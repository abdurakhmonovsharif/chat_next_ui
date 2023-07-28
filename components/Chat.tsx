import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessaging from './ChatMessaging'
import ChatFooter from './ChatFooter'
import { useDispatch, useSelector } from 'react-redux'
import ProfileSettings from './ProfileSettings'
import { Avatar } from 'flowbite-react'
import { setCreateChat } from '@/redux/reducers/createChat'
const image = 'https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk5NjM3NzM2MjM0MTY1ODg4/dwayne_johnson_kl_072623.jpg'
function Chat() {
    const path = useSelector((state: { path: string }) => state.path)
    const chatId = useSelector((state: any) => state.chatId.chatId)
    const dispatch = useDispatch()
    return (
        <div className={`${chatId === null && path === "messages" ? 'hidden' : ''}
        flex-col relative lg:flex w-full !h-screen ${chatId === null && path === "profile" ? ' lg:flex' : 'hidden'} pb-40 lg:pb-0`}>
            {
                chatId === null && (path === "messages" || path === "favorite")
                    ? "" : <ChatHeader />
            }
            {
                (path === "messages" || path === "favorite") && chatId ?
                    <ChatMessaging /> :
                    path !== "profile" &&
                    <div className='h-full flex flex-col items-center justify-center'>
                        <Avatar img={image} size={'xl'} rounded />
                        <span className='font-medium text-[#495057] text-lg'>Welcome, Dwayne! </span>
                        <span className='text-[#A9B8CF] font-normal text-sm'>Please select a chat to Start messaging.</span>
                        <button onClick={() => dispatch(setCreateChat(true))} className=' mt-4 bg-transparent hover:bg-[#665DFE] text-[#665DFE] hover:text-white border-2 px-3 py-2  rounded-[0.25rem] border-[#665DFE] transition-all duration-300'>Start a conversation</button>
                    </div>
            }
            {
                path === "profile" && <ProfileSettings />
            }
            {
                path === "messages" && chatId && (
                    <ChatFooter />
                )
            }
        </div>
    )
}

export default Chat
