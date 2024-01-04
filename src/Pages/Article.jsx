import '../StyleSheet/Article.css'
import pict from '../Asset/Article/article.jpg'
import pict1 from '../Asset/Article/detail1.jpg'
import pict2 from '../Asset/Article/detail2.jpg'
import pict3 from '../Asset/Article/detail3.jpg'
import Navbar from '../Components/Navbar';
import { IoSearchOutline, IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Article() {
    return (
        <>
        <Navbar />
            <div className="article-pages min-vh-100 pt-5" >
                <div className="container article-main py-5">
                    <div className="row title-article">
                        <div className="col-lg-6 d-flex">
                            <h1>MoreArticles.</h1>
                        </div>
                        <div className="col-lg-6 ">
                            <div class="input-group mb-3">
                                <span class="input-group-text span-input border border-0" id="basic-addon1"><IoSearchOutline /></span>
                                <input type="text" class="form-control form-input border border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <h3><span>Trending:</span> Cyberbullying,  Digital Policies</h3>

                        </div>
                    </div>
                    <hr />
                    {/* List ARticle */}
                    <div className="row">
                        <div className="col-lg-4 col-6 mr-1 p-1">
                            <Link to={"/detailArticle"} className='text-decoration-none' >
                                <div className="bg-light">
                                    <div className="row card-article-desc p-2">
                                        <div className="col-12">
                                            <div className='img-list-article'>
                                                <img src={pict} alt="Deskripsi Gambar" />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h6>Preventing Bullying Through Science, Policy, and Practice</h6>
                                            <p>Although attention to bullying has increased markedly among researchers, policy makers, and the media since the late 1990s... </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="col-lg-4 col-6 mr-1 p-1">
                            <Link to={"/detailArticle"} className='text-decoration-none' >
                                <div className="bg-light">
                                    <div className="row card-article-desc p-2">
                                        <div className="col-12 img-list-article">
                                            <img className="rounded" src={pict1} alt="Deskripsi Gambar" />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h6>Preventing Bullying Through Science, Policy, and Practice</h6>
                                            <p>Although attention to bullying has increased markedly among researchers, policy makers, and the media since the late 1990s... </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-6 mr-1 p-1">
                            <Link to={"/detailArticle"} className='text-decoration-none' >
                                <div className="bg-light">
                                    <div className="row card-article-desc p-2">
                                        <div className="col-12 img-list-article">
                                            <img className="rounded" src={pict2} alt="Deskripsi Gambar" />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h6>Preventing Bullying Through Science, Policy, and Practice</h6>
                                            <p>Although attention to bullying has increased markedly among researchers, policy makers, and the media since the late 1990s... </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-6 mr-1 p-1">
                            <Link to={"/detailArticle"} className='text-decoration-none' >
                                <div className="bg-light">
                                    <div className="row card-article-desc p-2">
                                        <div className="col-12 img-list-article">
                                            <img className="rounded" src={pict3} alt="Deskripsi Gambar" />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h6>Preventing Bullying Through Science, Policy, and Practice</h6>
                                            <p>Although attention to bullying has increased markedly among researchers, policy makers, and the media since the late 1990s... </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-6 mr-1 p-1">
                            <Link to={"/detailArticle"} className='text-decoration-none' >
                                <div className="bg-light">
                                    <div className="row card-article-desc p-2">
                                        <div className="col-12 img-list-article">
                                            <img className="rounded" src={pict} alt="Deskripsi Gambar" />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h6>Preventing Bullying Through Science, Policy, and Practice</h6>
                                            <p>Although attention to bullying has increased markedly among researchers, policy makers, and the media since the late 1990s... </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}

export default Article;