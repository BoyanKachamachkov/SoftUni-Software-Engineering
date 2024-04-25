
import Container from "./components/Container";
import Header from "./components/Header";
function App() {

    return (

        <>

            <Header />
            <Container />
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <h3 className="footer_text">Useful links</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li className="active"><a href="index.html"><span className="angle_icon active"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Home</a></li>
                                    <li><a href="about.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  About</a></li>
                                    <li><a href="services.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Services</a></li>
                                    <li><a href="domain.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Domain</a></li>
                                    <li><a href="testimonial"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  Testimonial</a></li>
                                    <li><a href="contact.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h3 className="footer_text">Address</h3>
                            <div className="location_text">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10"><i className="fa fa-map-marker" aria-hidden="true"></i></span>It is a long established fact that a<br /> reader will be distracted</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>(+71) 1234567890<br />(+71) 1234567890
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>demo@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer_main">
                                <h3 className="footer_text">Find Us</h3>
                                <p className="dummy_text">more-or-less normal distribution </p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">2023 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
                </div>
            </div>
        </>

    );
}

export default App;
