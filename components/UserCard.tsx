'use client'
import { Avatar } from 'flowbite-react'
import React, { MouseEventHandler } from 'react'

interface UserCardProps {
    onClick?: MouseEventHandler<HTMLDivElement>,
    fullName: string,
    status: string,
    lastText: string,
    avatar: string
}
function UserCard({ onClick, avatar, fullName, lastText, status }: UserCardProps) {
    return (
        <div onClick={onClick} className=" p-4 border-full rounded-md mb-2 bg-[#F8F9FB] cursor-pointer user-card-hover transition duration-300">
            <div className="flex justify-start items-center w-full">
                <Avatar status={status === "Offline" ? 'offline' : 'online'} rounded img={avatar} alt="user avatar" size={'md'} />
                <div style={{
                    width: 'calc(100% - 45px)'
                }}>
                    <div className="flex ml-3 items-center justify-between gap-2 w-full">
                        <span className="text-[15px] whitespace-nowrap">{fullName}</span>
                        <span className="text-sm text-[#969696] whitespace-nowrap text-end">{status}</span>
                    </div>
                    <div
                        className="text-ellipsis ml-3 text-sm overflow-hidden w-[180px]  lg:w-[180px]
                         md:w-[600px] h-6 whitespace-nowrap">
                        {lastText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
