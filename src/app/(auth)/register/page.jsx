"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm, SubmitHandler } from "react-hook-form"


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async(data) => {
        console.log(data, errors, "data");


        const { data: res, error } = await authClient.signUp.email({
    name: data.name, // required
    email: data.email, // required
    password: data.password, // required
    image: "https://example.com/image.png",
    callbackURL: "/",

    
});
if(error){
    alert(Error.message)
}

if(res){
        alert("Register Successfully")
    }

console.log(res, error);


    }
    return (
        <div>

            <form onSubmit={handleSubmit(handleLogin)} className="container mx-auto pt-5 bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mt-15 ">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <div>
                                <h1 className="text-xl font-bold">Register your account</h1>
                            </div>

                            <fieldset className="fieldset">

                                <label className=" text-lg font-semibold">Your Name</label>

                                <input type="text" className="input" placeholder="Enter your name"
                                    {...register("name", { required: true })}
                                />

                                {errors.text && (
                                    <p className="text-red-500 text-sm">
                                        Email is required
                                    </p>
                                )}



                                <label className=" text-lg font-semibold">Photo URL</label>

                                <input type="text" className="input" placeholder="Enter your photo url"
                                    {...register("url", { required: true })}
                                />

                                {errors.text && (
                                    <p className="text-red-500 text-sm">
                                        Email is required
                                    </p>
                                )}




                                <label className=" text-lg font-semibold">Email address</label>

                                <input type="email" className="input" placeholder="Email"
                                    {...register("email", { required: true })}
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        Email is required
                                    </p>
                                )}

                                <label className="text-lg font-semibold">Password</label>

                                <input type="password" className="input" placeholder="Enter your password"
                                    {...register("password", { required: true })}

                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        Password is required
                                    </p>
                                )}

                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}

                                <div className='flex gap-2 items-center mt-2'>
                                    <input type="checkbox" defaultChecked className="checkbox" /> 
                                    <p>Accept Term & Conditions</p>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>

                        
                    </div>
                </div>
            </form>

        </div>
    );
};

export default LoginPage;