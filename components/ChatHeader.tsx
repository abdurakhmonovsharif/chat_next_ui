import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineMore } from 'react-icons/ai'
import { BsInfoCircle, BsImage } from 'react-icons/bs'
import { BiSolidTrash, BiBlock } from 'react-icons/bi'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { clearChatId } from '@/redux/reducers/chatReducer'
import { userCardData } from '@/data'
const image = 'https://cdn-icons-png.flaticon.com/512/219/219988.png'
function ChatHeader() {
    const path = useSelector((state: { path: string }) => state.path)
    const chatId = useSelector((state: any) => state.chatId.chatId)
    const dispatch = useDispatch()
    const selectedUser = userCardData.find((user: any) => user.id === chatId);
    return (
        <div className={`flex w-full border-bottom py-4 px-2  items-center justify-between`}>
            {
                path === "messages" || path === "favorite" ?
                    <>
                        <div className="flex items-center justify-start  w-full">
                            <button onClick={() => dispatch(clearChatId())}>
                                <IoIosArrowRoundBack color='#000' size={28} className='block lg:hidden cursor-pointer ' />
                            </button>
                            <span className='text-[#3A405A] text-lg whitespace-nowrap'>{selectedUser?.fullName}</span>
                        </div>
                        <div className="flex items-center justify-end w-[14%] gap-1">
                            <CiSearch size={24} color='#AAAAAA' className='cursor-pointer hidden lg:flex' />
                            <Dropdown
                                inline
                                label={<AiOutlineMore size={24} className='cursor-pointer' color='#AAAAAA' />}
                            >
                                <Dropdown.Item className='gap-4 '>
                                    <BsInfoCircle size={22} color='#AAAAAA' />
                                    View Info
                                </Dropdown.Item>
                                <Dropdown.Item className='gap-4 '>
                                    <CiSearch size={22} color='#AAAAAA' />
                                    Search
                                </Dropdown.Item>
                                <Dropdown.Item className='gap-4 '>
                                    <BsImage size={22} color='#AAAAAA' />
                                    Wallpaper
                                </Dropdown.Item>
                                <Dropdown.Item className='gap-4 '>
                                    <BiSolidTrash size={22} color='#AAAAAA' />
                                    Delete
                                </Dropdown.Item>
                                <Dropdown.Item className='gap-4  text-[#FF4E8D]'>
                                    <BiBlock size={22} color='#FF4E8D' />
                                    Block
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </>
                    : path === "profile" && <div className={`flex flex-col justify-start bg-white`}>
                        <span className='text-[18.5px] text-[#3A405A] font-semibold'>Settings</span>
                        <span className='text-[14px] text-[#ADB5BD] font-normal'>Update Personal Information & Settings</span>
                    </div>
            }


        </div>
    )
}

export default ChatHeader
