import React from 'react'
import { BsPlusCircle, BsArrowRight } from 'react-icons/bs'
import { FiSmile } from 'react-icons/fi'
function ChatFooter() {
    return (
        <div className=' w-full flex  items-center justify-between absolute bottom-0 h-[77px] p-3 mt-2'>
            <BsPlusCircle size={22} color='#AAAAAA' className='cursor-pointer' />
            <input type="text" placeholder='Type your message here...' className='w-full border-none outline-none' />
            <div className="flex items-center gap-2">
                <FiSmile size={22} color='#AAAAAA' className='cursor-pointer' />
                <div className="bg-[#655DFE] hover:bg-[#3C32E8] p-4 rounded-[50%] cursor-pointer">
                    <BsArrowRight size={21} color="#FFF" />
                </div>
            </div>
        </div>
    )
}

export default ChatFooter
