'use client'
import { IoMdChatboxes } from 'react-icons/io'
import Link from 'next/link';
import ProfileSide from './ProfileSide';
import UsersSide from './UsersSide';
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { BiLogOut, BiSolidUser } from 'react-icons/bi'
import { MdFavorite } from 'react-icons/md'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { clearPath, setPath } from '@/redux/reducers/pathReducer';
import FavoriteSide from './FavoriteSide';
import { Modal } from 'flowbite-react';
import { clearChat } from '@/redux/reducers/createChat';
import { userCardData } from '@/data';
import UserCard from './UserCard';
import { CiSearch } from 'react-icons/ci'
import { clearChatId } from '@/redux/reducers/chatReducer';
import { useRouter } from 'next/navigation';
export default function LeftSidebar() {
    const route = useRouter()
    const path = useSelector((state: { path: string }) => state.path)
    const chatId = useSelector((state: { chatId: any }) => state.chatId.chatId)
    const createChat = useSelector((state: { createChat: boolean }) => state.createChat)
    const settings = useSelector((state: any) => state.settings)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(clearPath())
        dispatch(clearChatId())
        route.push("/login")
    }
    return (
        <>
            <div className={`h-screen w-full flex lg:w-[40rem] bg-[#F4F5F7] border-rigth ${chatId === null ? 'flex' : 'hidden lg:flex'} ${settings === 'show' ? 'hidden' : ''}`}>
                <div className="bg-[#645CFF] w-[70px] h-screen hidden lg:flex flex-col items-center  py-5">
                    <Link href={'/'} className='w-[30px] h-[30px]' onClick={() => {
                        dispatch(clearChat())
                        dispatch(clearChatId())
                    }}>
                        <IoMdChatboxes size={30} color='#FFF' className='cursor-pointer' />
                    </Link>
                    <div className="flex fixed top-[40%] justify-center flex-col gap-y-8">
                        <BsFillChatRightTextFill
                            onClick={() => dispatch(setPath('messages'))}
                            size={24} color='#FFF' className='!select-none w-[24px] h-[24px]  cursor-pointer !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                        <MdFavorite
                            onClick={() => dispatch(setPath('favorite'))}
                            size={24} color='#FFF' className='!select-none  cursor-pointer w-[24px] h-[24px] !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                        <BiSolidUser
                            onClick={() => dispatch(setPath('profile'))}
                            size={24} color='#FFF' className='!select-none  cursor-pointer w-[24px] h-[24px]  !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                        <BiLogOut
                            onClick={logOut}
                            size={24} color='#FFF' className='!select-none  cursor-pointer  w-[24px] h-[24px] !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                    </div>
                </div>
                {path === "messages" ?
                    <UsersSide />
                    :
                    path === "profile" ?
                        <ProfileSide /> :
                        path === "favorite" && <FavoriteSide />
                }  <Modal
                    show={createChat}
                    size="lg"
                    popup
                    onClose={() => dispatch(clearChat())}
                >
                    <Modal.Header />
                    <Modal.Body className='relative'  >
                        <div className='flex  left-5 right-5 items-center bg-white pr-2 h-9 rounded mt-2 border-full justify-between '>
                            <input type="text" placeholder='Search users' className='w-full outline-none border-none  text-[15px] bg-transparent' />
                            <CiSearch size={21} color='#AAAAAA' />
                        </div>
                        <div className="mt-7">
                            {userCardData.map(user => {
                                return <UserCard onClick={() => {
                                    dispatch(clearChat())
                                }} avatar={user.avatar} fullName={user.fullName} lastText='' status={user.status} key={user.id} />
                            })}
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
            <div className="bg-[#645CFF] bottom-0 w-full absolute  flex lg:hidden   px-3 py-5">
                <Link href={'/'} className='w-[30px] h-[30px] lg:flex hidden' onClick={() => {
                    dispatch(clearChat())
                    dispatch(clearChatId())
                }}>
                    <IoMdChatboxes size={30} color='#FFF' className='cursor-pointer' />
                </Link>
                <div className="flex w-full  justify-center gap-x-12">
                    <BsFillChatRightTextFill
                        onClick={() => dispatch(setPath('messages'))}
                        size={24} color='#FFF' className='!select-none w-[24px] h-[24px]  cursor-pointer !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                    <MdFavorite
                        onClick={() => dispatch(setPath('favorite'))}
                        size={24} color='#FFF' className='!select-none  cursor-pointer w-[24px] h-[24px] !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                    <BiSolidUser
                        onClick={() => dispatch(setPath('profile'))}
                        size={24} color='#FFF' className='!select-none  cursor-pointer w-[24px] h-[24px]  !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                    <BiLogOut
                        onClick={logOut}
                        size={24} color='#FFF' className='!select-none  cursor-pointer  w-[24px] h-[24px] !text-[#e7e7e7] hover:!text-white 
                    !transition-all !duration-100' />
                </div>
            </div>
        </>

    )
}


