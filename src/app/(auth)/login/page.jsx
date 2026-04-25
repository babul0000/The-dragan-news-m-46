"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm, SubmitHandler } from "react-hook-form"


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {
        console.log(data, errors, "data");


        const { data: res, error } = await authClient.signIn.email({

            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",


        });

        console.log(res, error);


    }
    return (
        <div>

            <form onSubmit={handleSubmit(handleLogin)} className="container mx-auto pt-15 bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mt-15 ">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <div>
                                <h1 className="text-xl font-bold">Login your account</h1>
                            </div>

                            <fieldset className="fieldset">
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

                                <input type="password" className="input" placeholder="Password"
                                    {...register("password", { required: true })}

                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        Password is required
                                    </p>
                                )}

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>

                        <p className='text-center pb-6'>Dont’t Have An Account ? <Link href={"/register"} className='text-red-700'>Register</Link></p>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default LoginPage;