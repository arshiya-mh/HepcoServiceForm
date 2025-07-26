import './Overhul.css'
import MyNav from './../../components/MyNav/MyNav'
import oldb from './../../assets/oldb.jpg'
import newb from './../../assets/newb.jpg'
import overhulbanner from './../../assets/overhulbanner.jpg'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
function Overhul() {
    return (
        <>
            <div className="containerr ">
                <MyNav />
                <div className="container-fluid ">
                    <img className='ovbanner' src={overhulbanner} alt="" />
                </div>
                <Row className='justify-content-around roww'>
                    <h4>بازسازي و نوسازي  <span>ماشين آلات راهسازی</span></h4>
                    <p>شرکت هپکو با توجه به امکانات و پتانسیل های بالقوه موجود و با همکاری ساير شركتهاي اقماري خود از دی ماه سال 1391 پروژه عظیم بازسازي و نوسازي را کلید زده است و با آماده سازی کامل سالن بازسازی با استقبال بسیار خوبی از سوی پيمانكاران راهسازي بزرگ مواجه شده است.
                        در کارگاه بازسازی دستگاه ها به طور کامل و صددرصد دمونتاژ می شوند و تمام قطعات و اجزاء به طور کامل مورد بازبینی قرار می گیرند. بعد از بازسازي،محصول تامدت زمان معيني شامل گارانتي نيز مي گردد.</p>
                    <Col className='justify-content-center' xs={12} md={6} lg={4}>
                        <img className='oldb' src={oldb} alt="" />
                    </Col>
                    <Col className='justify-content-center' xs={12} md={6} lg={4}>
                        <img className='newb' src={newb} alt="" />
                    </Col>
                </Row>
                <div xs={12} md={6} lg={4} className='formbt'>
                    <Link to={'/signin'}><button>ثبت دستگاه </button></Link>
                </div>
                <div className=" footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Overhul