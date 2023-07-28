import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
import { BiDotsHorizontalRounded, BiSolidTrash } from 'react-icons/bi'
import { MdContentCopy, MdOutlineModeEditOutline } from 'react-icons/md'
import { userCardData } from '@/data'
import { useSelector } from 'react-redux'
const image = 'https://cdn-icons-png.flaticon.com/512/219/219988.png'
interface CardProps {
    lastText?: string,
    avatar?: string,
    status?: string
}
const CurrentUserCard = () => <div className="flex justify-end mt-8 relative justify-items-end ">
    <div className='absolute items-center flex  -bottom-6 -right-5'>
        <span className='mt-5 mr-2 text-sm text-[#6b6b6b]  select-none'>12:18pm</span>
        <Dropdown
            label={
                <BiDotsHorizontalRounded size={22} color='#AAAAAA' className='mt-6 mr-2 cursor-pointer' />
            }
            inline
        >

            <Dropdown.Item className='gap-4 '>
                <MdContentCopy size={22} color='#AAAAAA' />
                Copy
            </Dropdown.Item>
            <Dropdown.Item className='gap-4 '>
                <MdOutlineModeEditOutline size={22} color='#AAAAAA' />
                Edit
            </Dropdown.Item>
            <Dropdown.Item className='gap-4 '>
                <BiSolidTrash size={22} color='#AAAAAA' />
                Delete
            </Dropdown.Item>
        </Dropdown>
        <Avatar size={'md'} status='online' statusPosition='top-right' rounded img={'https://img.favpng.com/23/24/25/computer-icons-icon-design-user-png-favpng-xgvvsv64jB5BK3DwJ9QiiTekd.jpg'} alt="user avatar" className=" rounded-[50%] !select-none border-[3px] border-white !pointer-events-none" />
    </div>
    <div className="bg-[#645CFF] !text-white text-wrap  w-fit rounded-2xl p-6  shadow-md">
        nasdkfja fka sdkf aksd fknasdfasdfkjnakds fkjasdfk
        nasdkfja fka sdkf aksd fknasdfasdfkjnakds fkjasdfk
        nasdkfja fka sdkf aksd fknasdfasdfkjnakds fkjasdfk
    </div>
</div>;
const UserCard = ({ lastText, avatar, status }: CardProps) => <div className="flex justify-start mt-8 relative ">
    <div className='absolute items-center flex  -bottom-6 -left-5'>
        <Avatar size={'md'} status={status === "Offline" ? 'offline' : 'online'} rounded img={avatar} alt="user avatar" className=" !select-none !pointer-events-none   border-[3px] border-white rounded-[50%]" />
        <span className='mt-6 mr-2 text-sm text-[#6b6b6b] select-none'>12:18pm</span>
        <Dropdown
            label={
                <BiDotsHorizontalRounded size={22} color='#AAAAAA' className='mt-6 mr-2 cursor-pointer' />
            }
            inline
        >
            <Dropdown.Item className='gap-4 '>
                <MdContentCopy size={22} color='#AAAAAA' />
                Copy
            </Dropdown.Item>
            <Dropdown.Item className='gap-4 '>
                <BiSolidTrash size={22} color='#AAAAAA' />
                Delete
            </Dropdown.Item>
        </Dropdown>
    </div>
    <div className="bg-[#F5F6FA] text-wrap  w-fit rounded-2xl p-6 shadow-md ">
        {lastText}
    </div>
</div>
function ChatMessaging() {
    const chatId = useSelector((state: any) => state.chatId.chatId)
    const selectedUser = userCardData.find((user: any) => user.id === chatId);

    return (
        <div className='px-8 py-2 overflow-auto-messages '>
            <UserCard lastText={selectedUser?.lastText} avatar={selectedUser?.avatar} status={selectedUser?.status} />
        </div>
    )
}

export default ChatMessaging
