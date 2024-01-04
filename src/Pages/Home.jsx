import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="banner d-flex justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="container banner-content col-8 col-lg-6">
                        <h1>Our Mission</h1>
                        <h2 className="mt-2">
                            Your <span>Smile</span> Beautifies The <span>world</span>
                        </h2>
                        <p className="mt-3">
                            Ayo hentikan budaya bully di Indonesia, mari kita bangkit bersama
                            bangun Indonesia lebih maju.
                        </p>
                        <p>
                            <i>
                                “Beri aku 1000 orang tua, niscaya akan kucabut Sumeru dari akarnya.
                                Beri aku 10 pemuda, akan kuguncangan dunia” - Ir.Soekarna
                            </i>
                        </p>
                    </div>
                </div>

            </div>
            {/* <div className="kontenKomponen" id="home">
                <div className="kontenHome">
                    <div className="textKonten row">
                        <div className="col-lg-6 col-6">
                            <h3>
                                Butuh Teman Cerita?
                            </h3>
                            <p>Lihat daftar psikolog yang tersedia dan hubungi melalui wa</p>
                            <Link to={`/psikolog`}>
                                <button class="btn btn-primary">Psikolog</button>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-6">
                            <img
                                src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda2.png"
                                alt=""
                            />
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-5 " id="col1">
                            <h3>
                                Membutuhkan bantuan?
                            </h3>
                            <p>Lihat daftar komunitas yang dapat membantu anda</p>
                            <Link to={`/komunitas`}>
                                <button class="btn btn-primary">Komunitas</button>
                            </Link>
                        </div>
                        <div className="col-5" id="col2">
                            <h3>
                                Berbagi Pengalaman dengan user lain
                            </h3>
                            <p>Ceritakan pengalamanmu atau masalahmu di forum diskusi</p>
                            <Link to={`/diskusi`}>
                                <button class="btn btn-primary">Diskusi</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="section-psikolog">
                <div className="container px-3 pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex justify-content-center">
                            <img
                                src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda2.png"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 col-12  d-flex justify-content-center align-items-center p-5">
                            <div className="">
                                <h3>
                                    Membutuhkan bantuan?
                                </h3>
                                <p>Lihat daftar komunitas yang dapat membantu anda</p>
                                <Link to={`/komunitas`}>
                                    <button class="btn ">Komunitas</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-card">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-5">
                            <h3>
                                Membutuhkan bantuan?
                            </h3>
                            <p>Lihat daftar komunitas yang dapat membantu anda</p>
                            <Link to={`/komunitas`}>
                                <button class="btn">Komunitas</button>
                            </Link>
                        </div>
                        <div className="col-6 p-5">
                            <h3>
                                Berbagi Pengalaman dengan user lain
                            </h3>
                            <p>Ceritakan pengalamanmu atau masalahmu di forum diskusi</p>
                            <Link to={`/diskusi`}>
                                <button class="btn">Diskusi</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Home;