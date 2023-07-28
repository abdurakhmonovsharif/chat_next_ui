'use client'
import React from 'react'
import { useSelector } from 'react-redux'
function ProfileSettings() {
    const path = useSelector((state: any) => state.path)

    return (
        <div className={`h-full p-4 overflow-y-auto ${path === "profile" ? 'block' : 'hidden'} `}>
            <div className="w-full">
                <div className="bg-[#F7F8F9] border-full rounded-profile-card-start flex flex-col px-4 py-2 ">
                    <span className='text-[19px] text-[#3A405A] font-semibold'>Account</span>
                    <span className='text-[14px] text-[#ADB5BD] font-normal'>Update personal & contact information</span>
                </div>
            </div>
            <div className="w-full p-4 border-left border-rigth border-bottom ">
                <div className="grid grid-cols-2 grid-rows-3 gap-2">
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='firstName'>FirstName</label>
                        <input type="text" id="firstName" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='lastName'>LastName</label>
                        <input type="text" id="lastName" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='username'>Username</label>
                        <input type="text" id="username" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='mobileNumber'>Mobile number</label>
                        <input type="text" id="mobileNumber" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='birthdata' >Birth date</label>
                        <input type="text" id="birthdata" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[#495057]' htmlFor='website'>Website</label>
                        <input type="text" id="website" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-[#495057]' htmlFor='address'>Address</label>
                    <input type="text" id="address" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                </div>
            </div>
            <div className="w-full">
                <div className="bg-[#F7F8F9] border-left border-rigth border-bottom rounded-profile-card-end flex justify-end gap-4 px-4 py-2 ">
                    <button className='text-[#ADBED7] hover:underline'>Reset</button>
                    <button className='bg-[#665DFE]  hover:bg-[#4237fe] transition-all duration-200 py-2.5 px-3 text-white rounded-lg'>Save Changes</button>
                </div>
            </div>
            <div className="w-full mt-10">
                <div className="bg-[#F7F8F9] border-full rounded-profile-card-start flex flex-col px-4 py-2 ">
                    <span className='text-[19px] text-[#3A405A] font-semibold'>Password</span>
                    <span className='text-[14px] text-[#ADB5BD] font-normal'>Update personal & contact information</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-2   justify-between p-4 border-left border-rigth border-bottom ">
                <div className='flex flex-col gap-1'>
                    <label className='text-[#495057]' htmlFor='currentPass'>Current Password</label>
                    <input type="password" id="currentPass" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                </div>
                <div className=""></div>
                <div className='flex flex-col gap-1 mt-2'>
                    <label className='text-[#495057]' htmlFor='newPass'>New Password</label>
                    <input type="password" id="newPass" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                    <label className='text-[#495057]' htmlFor='repeatPass'>Repeat Password</label>
                    <input type="password" id="repeatPass" className='border-full text-[#495057] flex rounded-sm w-full focus:border-full' />
                </div>
            </div>
            <div className="w-full">
                <div className="bg-[#F7F8F9] border-left border-rigth border-bottom rounded-profile-card-end flex justify-end gap-4 px-4 py-2 ">
                    <button className='text-[#ADBED7] hover:underline'>Reset</button>
                    <button className='bg-[#665DFE] hover:bg-[#4237fe] transition-all duration-200 py-2.5 px-3 text-white rounded-lg'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
