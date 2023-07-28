"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function Register() {
    const [errorMessage, setErrorMessage] = React.useState<string>('')
    const route = useRouter()
    const handleSignUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            firstName: { value: string },
            lastName: { value: string },
            email: { value: string };
            password: { value: string };
            password2: { value: string }
        };
        const firstName = target.firstName.value
        const lastName = target.lastName.value
        const email = target.email.value;
        const password = target.password.value;
        const password2 = target.password2.value;
        if (password === password2) {
            route.push("/")
        } else {
            setErrorMessage("Passwords don't match. Please try again.");
        }

    }
    return (
        <div className='w-full overflow-auto flex items-center'>
            <div className=" w-full lg:w-[50%] h-screen !py-4  justify-center flex flex-col items-center ">
                <h2 className='text-4xl'>Welcome</h2>
                <span className='text-sm text-[#AAAAAA] '>Welcome! Please enter your details.</span>
                <form onSubmit={handleSignUp} className="flex mt-2 lg:w-[64%] w-full p-4 lg:p-0 flex-col gap-4">
                    <div className=' lg:grid grid-rows-1 grid-cols-2 gap-2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="firstName"
                                value="First name"
                            />
                            <TextInput
                                id="firstName"
                                placeholder="James"
                                required
                                name='firstName'
                                type="text"
                            />
                        </div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="lastName"
                                value="Last name"

                            />
                            <TextInput
                                id="lastName"
                                placeholder="Smith"
                                required
                                name='lastName'
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            required
                            name='email'
                            type="email"
                            placeholder='example@email.com'
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
                            name='password'
                            type="password"
                            minLength={8}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Confirm your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            required
                            minLength={8}
                            type="password"
                            name='password2'
                        />
                        {errorMessage && <span className="text-red-500 mt-0.5 font-normal text-sm">{errorMessage}</span>}
                    </div>

                    <Button type="submit" className="bg-[#7F56DA] hover:!bg-[#5d3da3]">
                        Submit
                    </Button>
                    <Button type="button" className="bg-[#FFF]   hover:!bg-[#FFF] border-1 border-full text-[#000]">
                        <FcGoogle size={22} className='!mr-4' />
                        <span>Sign up with Google</span>
                    </Button>
                </form>
                <div className="flex   gap-2 mt-2">
                    <span>Already have an account?</span>
                    <Link href={'login'} className='text-[#7F56DA] hover:underline'>Sign in</Link>
                </div>
            </div>
            <div className=" w-[50%] bg-[#F3F4F8] h-screen  items-center justify-center hidden lg:flex">
                <div className="w-[300px] h-[300px] rounded-[50%] bg-[#603CB6]"></div>
                <div className='shadow-for-cirle'></div>
            </div>
        </div>
    )
}

export default Register
