import "../StyleSheet/DetailArticle.css"
import pict from '../Asset/Article/article.jpg'
import detail2 from '../Asset/Article/detail1.jpg'
import detail1 from '../Asset/Article/detail2.jpg'
import detail3 from '../Asset/Article/detail3.jpg'
import Navbar from '../Components/Navbar';



import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
function DetailArticle() {
    return (
        <>
        <Navbar />
            <div className="container detail-article pt-5">
                <div className="title text-center d-flex justify-content-center  align-items-center">
                    <div className="sub-title">
                        <h3>antiBully</h3>
                        <h1>Preventing Bullying Through Science, Policy, and Practice</h1>
                        <p><span>Author : </span>Nur Khairiyah</p>
                    </div>
                </div>
                <div className="gambar-article" style={{ backgroundImage: `url(${pict})` }}>                </div>
                {/* <img className="gambar-article" src={pict} alt="" /> */}

                {/* isi article */}
                <div className="row mt-5 article-detail-main">
                    <div className="social-media-article col-lg-2 d-flex flex-column">
                        <div className="rounded-circle mb-3 border border-2  text-center social-media-article p-2 mx-auto">
                            <FaFacebookF className=" " />
                        </div>
                        <div className="rounded-circle mb-3 border border-2 text-center social-media-article p-2 mx-auto">
                            <FaTwitter className=" " />
                        </div>
                        <div className="rounded-circle mb-3 border border-2 text-center social-media-article p-2 mx-auto">
                            <PiInstagramLogo className=" " />
                        </div>
                        
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-lg-3 latest-articles">
                        <h2>Latest Articles</h2>
                        <hr />
                        <div className="card-mini-article row mt-3">
                            <div className="col-5 gambar-mini-article">
                                <img src={detail2} alt="" />
                            </div>
                            <div className="desc-mini-article col-7">
                                <h4>Preventing Bullying Through Science</h4>
                                <p>Lorem ipsum, or lipsum as it is sometimes known...</p>
                            </div>
                        </div>
                        <div className="card-mini-article row mt-3">
                            <div className="col-5 gambar-mini-article">
                                <img src={detail1} alt="" />
                            </div>
                            <div className="desc-mini-article col-7">
                                <h4>Preventing Bullying Through Science</h4>
                                <p>Lorem ipsum, or lipsum as it is sometimes known...</p>
                            </div>
                        </div>
                        <div className="card-mini-article row mt-3">
                            <div className="col-5  gambar-mini-article">
                                <img src={detail3} alt="" />
                            </div>
                            <div className="desc-mini-article col-7">
                                <h4>Preventing Bullying Through Science</h4>
                                <p>Lorem ipsum, or lipsum as it is sometimes known...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailArticle;