import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import MyNav from "./../../components/MyNav/MyNav";
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './OverhulForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegCopy } from "react-icons/fa6";

function OverhulForm() {

    const formSchema = Yup.object({
        companyName: Yup.string().required('نام شرکت / شخص الزامی است'),
        machineType: Yup.string().required('نوع دستگاه الزامی است'),
        chassisNumber: Yup.string().required('شماره شاسی الزامی است'),
        description: Yup.string().required('توضیحات الزامی است'),
    });


    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange'
    });

    const trackingCode = uuidv4();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/overhauls', data);
            console.log('اطلاعات ذخیره شد:', response.data);
            Swal.fire({
                title: 'اطلاعات با موفقیت ثبت شد ',
                html: `
                <p>کد پیگیری شما:</p>
                <button id="copy-btn" style="
                    background-color: #f0ad4e; 
                    border: none; 
                    padding: 8px 12px; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-family: yekan;
                    font-size: 16px;
                    margin-top: 10px;
                ">
                    ${trackingCode}
                </button>
                <p style="font-size: 12px; margin-top: 5px;">روی کد کلیک کنید تا کپی شود</p>
            `,
                icon: "success",
                didOpen: () => {
                    const btn = document.getElementById('copy-btn');
                    btn.addEventListener('click', () => {
                        navigator.clipboard.writeText(trackingCode);
                        toast.info('کد پیگیری کپی شد ', {
                            position: 'top-center',
                            autoClose: 2000,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            rtl: true,
                            icon: <FaRegCopy color='blue' />
                        })
                    });
                }
            });
            reset();
        } catch (error) {
            console.error('خطا در ارسال اطلاعات:', error);
            Swal.fire({
                icon: "error",
                title: " خطا در ارسال اطلاعات ",
                text: " دوباره تلاش کنید ",
            });
        }
    };

    return (
        <>
            <MyNav />
            <div className="containeer">
                <div className="formcontainer">
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" style={{ direction: 'rtl' }}>
                            <Form.Label style={{ fontFamily: 'lale' }}>نام شرکت / شخص</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("companyName")}
                                style={{ fontFamily: 'yekan' }}
                            />
                            {errors.companyName && <p className="error-text">{errors.companyName.message}</p>}
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: 'lale' }}>نوع دستگاه</Form.Label>
                            <Form.Select
                                {...register("machineType")}
                                style={{ fontFamily: 'lale' }}
                            >
                                <option value="">انتخاب کنید</option>
                                <option value="لودر HWL 110‑3">لودر HWL 110‑3</option>
                                <option value="لودر HWL 140">لودر HWL 140</option>
                                <option value="لودر HWL 160">لودر HWL 160</option>
                                <option value="لودر بکهولودر 100">لودر بکهولودر 100</option>
                                <option value="لودر اسکید لودر 350">لودر اسکید لودر 350</option>
                                <option value="HEC 60">HEC 60 بیل‌های چرخ‌زنجیری</option>
                                <option value="HEC 220">HEC 220 بیل‌های چرخ‌زنجیری</option>
                                <option value="HEC 370">HEC 370 بیل‌های چرخ‌زنجیری</option>
                                <option value="HEC 470">HEC 470 بیل‌های چرخ‌زنجیری</option>
                                <option value="HEC 750">HEC 750 بیل‌های چرخ‌زنجیری</option>
                                <option value="HEW 140">HEW 140 بیل چرخ لاستیکی</option>
                                <option value="HE 100B1">HE 100B1 بیل چرخ لاستیکی</option>
                                <option value="HC 5">HC 5 غلتک‌</option>
                                <option value="HC 13B">HC 13B غلتک‌</option>
                                <option value="HS 78">HS 78 غلتک‌</option>
                                <option value="HCD 100C">HCD 100C غلتک‌</option>
                                <option value="HCP 100C">HCP 100C غلتک‌</option>
                                <option value="HR 105C7">HR 105C7 غلتک‌</option>
                                <option value="HDZ 42">HDZ 42 بلدوزر</option>
                                <option value="HG 180 D1">HG 180 D1 گریدر</option>
                                <option value="HG 180 D3">HG 180 D3 گریدر</option>
                            </Form.Select>
                            {errors.machineType && <p className="error-text">{errors.machineType.message}</p>}
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: 'lale' }}>شماره شاسی</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("chassisNumber")}
                                style={{ fontFamily: 'yekan' }}
                            />
                            {errors.chassisNumber && <p className="error-text">{errors.chassisNumber.message}</p>}
                        </Form.Group>


                        <FloatingLabel controlId="floatingTextarea2" label="توضیحات" style={{ fontFamily: 'lale' }}>
                            <Form.Control
                                as="textarea"
                                {...register("description")}
                                placeholder="توضیحات"
                                style={{
                                    minHeight: '100px',
                                    maxHeight: '200px',
                                    overflowY: 'auto'
                                }}
                            />
                        </FloatingLabel>
                        {errors.description && <p className="error-text">{errors.description.message}</p>}


                        <Button
                            variant="warning"
                            type="submit"
                            className="finalsubbt"
                            disabled={!isValid}
                            style={{ fontFamily: 'lale', marginTop: '15px' }}
                        >
                            تایید اطلاعات
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="formfooter">
                <Footer />
            </div>
             <ToastContainer /> 
        </>
    );
}

export default OverhulForm;
