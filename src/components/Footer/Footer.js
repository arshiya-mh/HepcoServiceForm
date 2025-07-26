import './Footer.css'
import hepcologo from './../../assets/LOGO-HEPCO.png'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo-section">
                        <img src={hepcologo} alt="HEPCO Logo" className="footer-logo" />
                            <p className="footer-desc">شرکت تولید تجهیزات سنگین - هپکو</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>دسترسی سریع</h4>
                            <ul>
                                <li><a href="#">صفحه اصلی</a></li>
                                <li><a href="#">محصولات</a></li>
                                <li><a href="#">درباره ما</a></li>
                                <li><a href="#">تماس با ما</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>خدمات</h4>
                            <ul>
                                <li><a href="#">فروش</a></li>
                                <li><a href="#">خدمات پس از فروش</a></li>
                                <li><a href="#">قطعات یدکی</a></li>
                                <li><a href="#">پشتیبانی</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h4>اطلاعات تماس</h4>
                        <p>آدرس: اراک، کیلومتر ۵ جاده تهران</p>
                        <p>تلفن: 086-33660001</p>
                        <p>ایمیل: info@hepcoir.com</p>
                        <div className="footer-socials">
                            <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" /></a>
                            <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="LinkedIn" /></a>
                            <a href="#"><img src="https://img.icons8.com/ios-filled/20/ffffff/facebook.png" alt="Facebook" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 تمامی حقوق برای شرکت هپکو محفوظ است.</p>
                </div>
            </footer>

        </>
    )
}
export default Footer