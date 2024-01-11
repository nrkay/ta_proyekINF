import '../StyleSheet/Article.css'
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity'
import Navbar from '../Components/Navbar';
import { IoSearchOutline, IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"
import { db } from '../ConfigFirebase'
import { useEffect, useState } from 'react'


function Article() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const fetchedArticles = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setArticles(fetchedArticles);
            console.log("ini fetched", fetchedArticles)
            setIsLoading(true)
        }
        fetchArticles();
    }, []);

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
                        {isLoading ? articles.map((data) => {
                            return (
                                <div className="col-lg-4 col-6 mr-1 p-1">
                                    <Link to={`/detailArticle/${data.id}`} className='text-decoration-none' >
                                        <div className="bg-light">
                                            <div className="row card-article-desc p-2">
                                                <div className="col-12">
                                                    <div className='img-list-article'>
                                                        <img src={data.img} alt="Deskripsi Gambar" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <h6>{data.title.substring(0, 60)}...</h6>
                                                    <p>{data.desc.substring(0, 90)}... </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }) : (
                            <div className="vh-100 d-flex justify-content-center align-items-center">
                                <UseAnimations animation={infinity} size={80} style={{ color: '#003B73' }} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;