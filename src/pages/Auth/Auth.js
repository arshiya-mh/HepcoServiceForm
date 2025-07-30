import './Auth.css';
import MyNav from './../../components/MyNav/MyNav';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import 'animate.css';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoBellFill } from "react-icons/go";
import { color } from 'framer-motion';
function Auth() {
    const phoneSchema = Yup.object({
        tel: Yup.string()
            .required('شماره تلفن الزامی است')
            .matches(/^(\+98|0)?9\d{9}$/, 'فرمت شماره تلفن معتبر نیست')
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(phoneSchema)
    });

    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const [userCode, setUserCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const navigate = useNavigate();


    const generateRandomCode = () => {
        const newCode = Math.floor(10000 + Math.random() * 90000);
        setGeneratedCode(newCode.toString());
        return newCode;
    };


    const showToastCode = () => {
        toast.warn(`کد ارسالی: ${generatedCode}`, {
            position: 'top-center',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            rtl: true,
            icon :  < GoBellFill color='yellow'  fontSize={'50px'}/>
}
        );
    };


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

const startTimer = () => {
    setTimeLeft(120);
    setIsRunning(true);
};

const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
};


const handleSendClick = (data) => {
    generateRandomCode();
    setIsCodeVisible(true);
    startTimer();
};


const handleResend = () => {
    generateRandomCode();
    startTimer();
};


useEffect(() => {
    if (generatedCode) {
        showToastCode();
    }
}, [generatedCode]);


const handleCodeSubmit = () => {
    if (userCode === generatedCode) {
        Swal.fire({
            title: 'کد تایید صحیح است',
            icon: 'success',
            confirmButtonText: 'ادامه',
            showClass: {
                popup: `animate__animated animate__fadeInUp animate__faster`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOutDown animate__faster`
            }
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/overhulform');
            }
        });
    } else {
        Swal.fire({
            title: "کد اشتباه است!",
            icon: "error",
            confirmButtonText: 'تایید'
        });
    }
};


const editTel = () => {
    setIsCodeVisible(false);
    setUserCode('');
    reset();
};

return (
    <>
        <MyNav />
        <div className="auth-container">
            {!isCodeVisible ? (
                <form onSubmit={handleSubmit(handleSendClick)}>
                    <h2 className="auth-title">شماره موبایل خود را وارد کنید</h2>
                    <input
                        type="tel"
                        {...register('tel')}
                        placeholder="+98"
                        className="auth-input"
                    />
                    {errors.tel && (
                        <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'lale' }}>
                            {errors.tel.message}
                        </p>
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
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="auth-input"
                    />
                    <div className='editbox'>
                        <button className='editbt' onClick={editTel}>ویرایش شماره تماس</button>
                        {isRunning ? (
                            <p className='recode'>
                                ارسال مجدد کد:
                                <span style={{ fontWeight: 'bold', marginRight: '5px' }}>
                                    {formatTime(timeLeft)}
                                </span>
                            </p>
                        ) : (
                            <button onClick={handleResend} className="resendcodebt">
                                ارسال مجدد کد
                            </button>
                        )}
                    </div>
                    <button onClick={handleCodeSubmit} className="auth-button">
                        تأیید کد
                    </button>
                </div>
            )}
        </div>
        <ToastContainer />
    </>
);
}

export default Auth;
