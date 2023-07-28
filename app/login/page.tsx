"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function Login() {
    const route = useRouter()
    const handleSignIn = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        route.push('/')
    }
    return (
        <div className='h-screen w-full flex items-center'>
            <div className=" w-full lg:w-[50%]  h-full flex flex-col items-center justify-center">
                <h2 className='text-4xl'>Welcome back</h2>
                <span className='text-sm text-[#AAAAAA] mt-1 mb-4'>Welcome back! Please enter your details.</span>
                <form onSubmit={handleSignIn} className="flex w-[60%] max-w-[400px] flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            placeholder="name@example.com"
                            required
                            name='email'
                            type="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            required
                            type="password"
                            name='password'
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" className='w-[16px]' />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit" className="bg-[#7F56DA] hover:!bg-[#5d3da3]">
                        Submit
                    </Button>
                    <Button type="button" className="bg-[#FFF]   hover:!bg-[#FFF] border-1 border-full text-[#000]">
                        <FcGoogle size={22} className='!mr-4' />
                        <span>Sign in with Google</span>
                    </Button>
                </form>
                <div className="flex  gap-2 mt-2">
                    <span>Don't have an account yet?</span>
                    <Link href={"register"} className='text-[#7F56DA] hover:underline'>Sign up</Link>
                </div>
            </div>
            <div className="w-[50%] bg-[#F3F4F8] h-full  items-center justify-center hidden lg:flex">
                <div className="w-[300px] h-[300px] rounded-[50%] bg-[#603CB6]"></div>
                <div className='shadow-for-cirle'></div>
            </div>
        </div>
    )
}

export default Login

