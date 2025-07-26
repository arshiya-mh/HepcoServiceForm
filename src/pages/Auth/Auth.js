import './Auth.css'
import MyNav from './../../components/MyNav/MyNav'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
function Auth() {
    const phoneSchema = Yup.object({
        tel: Yup.string()
            .required('شماره تلفن الزامی است')
            .matches(/^(\+98|0)?9\d{9}$/, 'فرمت شماره تلفن معتبر نیست')

    });
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(phoneSchema) });
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [code, setCode] = useState('');

    const handleSendClick = (data) => {
        console.log(data)
        setIsCodeVisible(true);
    };

    const handleCodeSubmit = () => {
        alert(`کد وارد شده: ${code}`);
    };

    return (
        <>
            <MyNav />
            <div className="auth-container">
                <h2 className="auth-title">  شماره موبایل خود را وارد کنید </h2>
                <form onSubmit={handleSubmit(handleSendClick,
                        () => setIsCodeVisible(false)
                )}>
                    <input
                        type="tel"
                        {...register('tel')}
                        placeholder="+98 "
                        className="auth-input"
                    />
                    {errors.tel && (
                        <p className="text-red-500 text-sm mt-1">{errors.tel.message}</p>
                    )}
                    <button onClick={handleSendClick} className="auth-button">
                        ارسال
                    </button>
                </form>

                {isCodeVisible && (
                    <div className="code-box">
                        <p className="code-text">
                            کد ارسال شده به شماره  را وارد کنید:
                        </p>

                        <input
                            type="text"
                            placeholder="کد تأیید"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="auth-input" ط
                        />

                        <button onClick={handleCodeSubmit} className="auth-button">
                            تأیید کد
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
export default Auth