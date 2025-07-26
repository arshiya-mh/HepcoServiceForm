import './MyNav.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import hepcologo from './../../assets/LOGO-HEPCO.png'
function MyNav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container ">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">صفحه اصلی  </a>
                            </li>
                            <NavDropdown title="درباره ما" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">معرفی شرکت</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    تاریخچه
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">تامیین کننده شرکت</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">گواهینامه ها</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    مشتریان
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="مصحولات" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">لودرها</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    بیل زنجیری
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">بیل چرخ لاستیکی</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> غلتک</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> بلدزر </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> گریدر</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    تراک
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="خدمات" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">آموزش</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    نمایندگی
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">خدمات پس از فروش</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='active'>بازسازی و نوسازی</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    خدمات مالی
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="شرکت های تابع" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">راهسازی ایران</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    هسکو
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">علمی-کاربردی</NavDropdown.Item>
                            </NavDropdown>
                            <li className="nav-item">
                                <a className="nav-link" href="#">تماس با ما</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">پروژه های صنعتی</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">امور سهام</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">فرصت های شغلی  </a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand" href="#"><img src={hepcologo} alt="" /></a>
                </div>

            </nav>
        </>
    )
}
export default MyNav