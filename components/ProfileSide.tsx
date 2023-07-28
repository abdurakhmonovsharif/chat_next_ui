'use client'
import React from 'react'
import { AiOutlineMore, AiFillClockCircle, AiFillCalendar, AiFillPhone, AiFillHome, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BiSolidUser } from 'react-icons/bi'
import { Avatar, Dropdown } from 'flowbite-react';
import { useDispatch } from 'react-redux'
import { setSettings } from '@/redux/reducers/settingReducer'
const image = 'https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk5NjM3NzM2MjM0MTY1ODg4/dwayne_johnson_kl_072623.jpg'

function ProfileSide() {
    const dispatch = useDispatch()
    return (
        <div className="block w-full">
            <div className="px-2 flex items-center bg-white border-bottom h-[82px]">
                <div className="flex flex-col justify-start bg-white">
                    <span className='text-[19px] text-[#3A405A] font-semibold'>Profile</span>
                    <span className='text-[14px] text-[#ADB5BD] font-normal'>Personal Information & Settings</span>
                </div>
            </div>
            <div className="block py-4 lg:px-4 md:px-4 px-2 overflow-auto-profile-side">
                <div className="w-full relative border-full flex items-center justify-center flex-col gap-y-4 bg-white h-[200px] rounded-[0.25rem]">
                    <div className="absolute right-4 top-4">
                        <Dropdown
                            inline
                            label={<AiOutlineMore size={24} className='cursor-pointer' color='#AAAAAA' />}
                        >
                            <Dropdown.Item className='whitespace-nowrap text-[#3A405A]'>
                                Update profile picture
                            </Dropdown.Item>
                            <Dropdown.Item className='whitespace-nowrap text-[#3A405A]'>
                                Delete picture
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <Avatar rounded img={image} size={'lg'} />
                    <span className='text-xl  text-[#3A405A]'>Dwayne Johnson</span>
                    <button className='border-full px-2 w-24 py-2 rounded-[0.25rem] text-[#3A405A] hover:text-black' onClick={() => dispatch(setSettings('show'))}>Settings</button>
                </div>
                <div className='w-full flex justify-between items-center border-full rounded-profile-card-start mt-10 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Username</span>
                        <span className='text-[15px] text-[#3A405A]'>@Johnson1972</span>
                    </div>
                    <BiSolidUser size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-full rounded-profile-card-start mt-10 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Local Time</span>
                        <span className='text-[15px] text-[#3A405A]'>12:54 PM</span>
                    </div>
                    <AiFillClockCircle size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom  mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Birthdate</span>
                        <span className='text-[15px] text-[#3A405A]'>02/05/1972</span>
                    </div>
                    <AiFillCalendar size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom  mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Phone</span>
                        <span className='text-[15px] text-[#3A405A]'>+01-222-364522</span>
                    </div>
                    <AiFillPhone size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom  mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Website</span>
                        <a target='_blank' href='https://therockgear.com/' className='text-[15px] text-[#3A405A]'>therockgear.com</a>
                    </div>
                    <GiEarthAfricaEurope size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom rounded-profile-card-end  mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Address</span>
                        <span className='text-[15px] text-[#3A405A] '>The Garcia Companies
                            224 Palermo Avenue  <br />
                            Coral Gables, <br /> FL 33134
                            USA</span>
                    </div>
                    <AiFillHome size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-full rounded-profile-card-start mt-10 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Facebook</span>
                        <a target='_blank' href='https://www.facebook.com/DwayneJohnson/' className='text-[15px] text-[#665DFD] font-medium'>@DwayneJohnson</a>
                    </div>
                    <AiFillFacebook size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Instagram</span>
                        <a target='_blank' href='https://www.instagram.com/therock/' className='text-[15px] text-[#665DFD] font-medium'>@therock</a>
                    </div>
                    <AiFillInstagram size={22} color='#AAAAAA' />
                </div>
                <div className='w-full flex justify-between items-center border-left border-rigth border-bottom   mt-0 py-2 px-4 '>
                    <div className="flex flex-col">
                        <span className='text-sm text-[#AAAAAA]'>Linkedin</span>
                        <a target='_blank' href='https://twitter.com/therock' className='text-[15px] text-[#665DFD] font-medium'>@therock</a>
                    </div>
                    <AiFillLinkedin size={22} color='#AAAAAA' />
                </div>
            </div>
        </div>
    )
}

export default ProfileSide
