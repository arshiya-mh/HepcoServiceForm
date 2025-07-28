import './Auth.css'
import MyNav from './../../components/MyNav/MyNav'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import 'animate.css';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Auth() {
    const phoneSchema = Yup.object({
        tel: Yup.string()
            .required('شماره تلفن الزامی است')
            .matches(/^(\+98|0)?9\d{9}$/, 'فرمت شماره تلفن معتبر نیست')

    }).required()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ resolver: yupResolver(phoneSchema) });
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [code, setCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startTimer = () => {
        setTimeLeft(120);
        setIsRunning(true);
    };
    const navigate = useNavigate()

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timer);
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };
    const handleResend = () => {
        
        setIsRunning(true);
        setTimeLeft(120); 
    };
    const handleSendClick = (data) => {
        console.log(data)
        setIsCodeVisible(true);
        startTimer();
    };
    const handleCodeSubmit = () => {
        if (code === '12345') {
            Swal.fire({
                title: '  کد تایید صحیح است',
                icon: 'success',
                confirmButtonText: 'ادامه',
                showClass: {
                    popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
                },
                hideClass: {
                    popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/overhulform');
                }
            });


        } else {
            Swal.fire({
                title: "کد اشتباه است! ",
                icon: "error",
                draggable: 'اصلاح کد ',
                confirmButtonText: 'تایید'
            });
        }



    };
    const edittel = () => {
        setIsCodeVisible(false)
    }
    return (
        <>
            <MyNav />
            <div className="auth-container">

                {!isCodeVisible ? (
                    <form onSubmit={handleSubmit(handleSendClick)}>
                        <h2 className="auth-title">  شماره موبایل خود را وارد کنید </h2>
                        <input
                            type="tel"
                            {...register('tel')}
                            placeholder="+98 "
                            className="auth-input"
                        />
                        {errors.tel && (
                            <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'lale' }}>{errors.tel.message}</p>
                        )}

                        <button type="submit" className="auth-button">
                            ارسال
                        </button>
                    </form>
                ) : (
                    <div className="code-box">
                        <h3 className="code-text">
                            کد ارسال شده به شماره را وارد کنید:
                        </h3>

                        <input
                            type="text"
                            placeholder="کد تأیید"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="auth-input"
                        />
                        <div className='editbox'>
                            <button className='editbt' onClick={edittel}> ویرایش شماره تماس </button>
                            {isRunning ? (
                                <p className='recode'> ارسال مجدد کد :
                                    <span style={{ fontWeight: 'bold', marginRight: '5px' }}>
                                        {formatTime(timeLeft)}
                                    </span>

                                </p>
                            ) : (<button
                                onClick={handleResend}
                                className="resendcodebt"
                            >
                                ارسال مجدد کد
                            </button>)}
                        </div>
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