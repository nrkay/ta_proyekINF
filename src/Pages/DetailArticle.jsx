import "../StyleSheet/DetailArticle.css"
import detail2 from '../Asset/Article/detail1.jpg'
import detail1 from '../Asset/Article/detail2.jpg'
import detail3 from '../Asset/Article/detail3.jpg'
import Navbar from '../Components/Navbar';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"
import { db } from '../ConfigFirebase'
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity'






import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
function DetailArticle() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const fetchArticles = async () => {
            const detailArticle = doc(db, "articles", id);
            const docSnap = await getDoc(detailArticle);
            if (docSnap.exists()) {
                setTitle(docSnap.data().title);
                setImg(docSnap.data().img);
                setDesc(docSnap.data().desc);
                setAuthor(docSnap.data().author);
                setIsLoading(true)
            }
        }
        fetchArticles();
    }, []);
    return (
        <>
            <Navbar />
            {isLoading ? (
                <div className="container detail-article pt-5">
                    <div className="title text-center d-flex justify-content-center  align-items-center">
                        <div className="sub-title">
                            <h3>antiBully</h3>
                            <h1>{title}</h1>
                            <p><span>Author : </span>{author}</p>
                        </div>
                    </div>
                    <div className="gambar-article" style={{ backgroundImage: `url(${img})` }}>                </div>
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
                        <div className="col-lg-6">
                            <p>{desc}</p>
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
            ) : (
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <UseAnimations animation={infinity} size={80} style={{ color: '#003B73' }} />
                </div>
            )}

        </>
    );
}

export default DetailArticle;