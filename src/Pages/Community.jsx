import '../StyleSheet/Community.css'
import img from '../Asset/community/Images.png'
import sumut from '../Asset/community/sumut.jpg'
import Navbar from '../Components/Navbar';

import { GiGloves, GiLovers } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Community() {
    return (
        <>
        <Navbar />
            <div className="banner-community pt-5">
            </div>
            <div className="column-banner mx-auto">
                <div className="row">
                    <div className="col-lg-6 col-12 desc-community-banner">
                        <div className="save-us-part p-1 d-inline-flex align-items-center">
                            <p className='p-1'>You save with us</p>
                        </div>
                        <h3>We provide full range global logistics solution</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>


                        <div className="mb-2">
                            <div className="d-inline-flex icon-communit ">
                                <span className='p-1'><GiLovers /></span>
                                <p className='ms-3 my-auto'>A Shelter for Everyone</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="d-inline-flex icon-communit">
                                <span className='p-1'><GiGloves /></span>
                                <p className='ms-3 my-auto'>Always Together with Everyone</p>
                            </div>
                        </div>
                        .
                    </div>
                    <div className=" col-6 image-banner-desc text-center d-flex align-items-center justify-content-center">
                        <img src={img} alt="" className='' />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="active-comuntiy row mt-4">
                            <div className="col-12 col-lg-6 d-inline-flex align-items-center justify-content-center sub-community">
                                <h3 className='pt-2'>56</h3>
                                <span className=' p-1 ms-2'></span>
                                <p className='pt-3 ms-2'>active community</p>
                            </div>
                            <div className="col-12 col-lg-6  d-inline-flex align-items-center justify-content-center sub-community comunity-right">
                                <h3 className='pt-2'>18</h3>
                                <span className=' p-1 ms-2'></span>
                                <p className='pt-3 ms-2'>in many cities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="find-comunity container">
                <h3 className='text-center text-list-community  mb-5'>Find Community in Your City</h3>
                <div className="d-flex justify-content-center mt-3">
                    <div className="choise-community row text-center">
                        <div className="choise-community-left col-6">All</div>
                        <div className="col-6">Spesific</div>
                    </div>
                </div>


                <Link to='/detailCommunity' className='text-decoration-none text-black'>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="list-comunity row p-2">
                            <div className="image-community col-3 d-flex justify-content-center align-items-center">
                                <img className='pict-list-community' src={sumut} alt="" />
                            </div>
                            <div className="desc-list-community col-6 pt-2">
                                <h4>Sumatera Utara</h4>
                                <p><i>click here to see existing communities</i></p>
                            </div>
                            <div className="count-community col-2 m-2 d-flex justify-content-center align-items-center">
                                <h4>18</h4>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* list ke dua */}
                <Link to='/detailCommunity' className='text-decoration-none text-black'>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="list-comunity row p-2">
                            <div className="image-community col-3 d-flex justify-content-center align-items-center">
                                <img className='pict-list-community' src={sumut} alt="" />
                            </div>
                            <div className="desc-list-community col-6 pt-2">
                                <h4>Sumatera Utara</h4>
                                <p><i>click here to see existing communities</i></p>
                            </div>
                            <div className="count-community col-2 m-2 d-flex justify-content-center align-items-center">
                                <h4>18</h4>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* list ke tiga */}
                <Link to='/detailCommunity' className='text-decoration-none text-black'>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="list-comunity row p-2">
                            <div className="image-community col-3 d-flex justify-content-center align-items-center">
                                <img className='pict-list-community' src={sumut} alt="" />
                            </div>
                            <div className="desc-list-community col-6 pt-2">
                                <h4>Sumatera Utara</h4>
                                <p><i>click here to see existing communities</i></p>
                            </div>
                            <div className="count-community col-2 m-2 d-flex justify-content-center align-items-center">
                                <h4>18</h4>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
}

export default Community;