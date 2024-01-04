import { useState } from "react";
import pic from '../Asset/Login/picture.png'
import logo from '../Asset/Navbar/LOGO.gif'
import '../StyleSheet/Login.css'
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const hanleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }
    return (
        <>
            <div className="row">
                <div className="form-register col-lg-7 col-md-7 vh-100">
                    <div className="row d-flex align-items-center vh-100 ">
                        <div className="kolom-register col-lg-7 col-md-9 col-10 mx-auto p-4">
                            <div className="logo text-center ">
                                <img className="mx-auto" src={logo} alt="" />
                            </div>
                            <h3 className='text-center'>LOGIN</h3>
                            <form onSubmit={hanleSubmit}>
                                <div class="input-value mb-3">
                                    <label for="InputUsername" class="form-label">Username</label>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" id="InputUsername" aria-describedby="emailHelp" />
                                </div>
                                <div className="input-value mb-3">
                                    <label for="InputPassword" class="form-label">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="InputPassword" aria-describedby="emailHelp" />
                                </div>
                                <div className="button-input-value text-center">
                                    <button class="btn btn-light">Sign In</button>
                                </div>
                            </form>
                            <div className="come-register text-center mt-2">
                                <Link className="text-decoration-none" to={`/register`}>
                                    <h6 className="text-decoration-none">Don't have account? <b>Sign Up</b></h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-register col-5 d-none d-md-block">
                    <img className="w-100 vh-100" src={pic} alt="" />
                </div>
            </div>
        </>
    );
}

export default Login;