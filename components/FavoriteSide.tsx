import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineMore } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { Dropdown } from 'flowbite-react';
import { BsPlusCircle } from 'react-icons/bs'
import { FiSettings } from "react-icons/fi"
import { useDispatch } from 'react-redux';
import { setPath } from '@/redux/reducers/pathReducer';
function FavoriteSide() {
    const dispatch = useDispatch()
    return (
        <div className="block w-full">
            <div className="px-2 py-4 bg-white border-bottom">
                <div className="flex items-center justify-between bg-white">
                    <span className='text-[19px] text-[#3A405A] font-semibold'> Favorite chats</span>
                    <div className="flex items-center justify-between gap-2 bg-white">
                        <IoIosNotificationsOutline size={24} className='cursor-pointer' color='#AAAAAA' />
                        <Dropdown
                            inline
                            label={<AiOutlineMore size={24} className='cursor-pointer' color='#AAAAAA' />}
                        >
                            <Dropdown.Item className='gap-4'>
                                <BsPlusCircle size={18} color='#AAAAAA' className='cursor-pointer' />
                                New Chat
                            </Dropdown.Item>
                            <Dropdown.Item className='gap-4' onClick={() => dispatch(setPath("profile"))}>
                                <FiSettings size={18} color='#AAAAAA' className='cursor-pointer' />
                                Settings
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <div className='flex items-center bg-white pr-2 h-9 rounded mt-2 border-full justify-between '>
                    <input type="text" placeholder='Search users' className='w-full outline-none border-none  text-[15px] bg-transparent' />
                    <CiSearch size={21} color='#AAAAAA' />
                </div>
            </div>
            <div className="block py-4 lg:px-4 md:px-4 px-2 overflow-auto-users-card">

            </div>
        </div>
    )
}

export default FavoriteSide
