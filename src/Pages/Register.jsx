import { useState } from "react";
import '../StyleSheet/Login.css'
import pic from '../Asset/Login/picture.png'
import logo from '../Asset/Navbar/LOGO.gif'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../ConfigFirebase'

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Yeay, Sign Up Successfuly. Let's Login with Your Email and Passwords");
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }
    return (
        <div className="row">
            <div className="form-register col-lg-7 col-md-7 vh-100">
                <div className="row d-flex align-items-center vh-100 ">
                    <div className="logo text-center col-lg-7 col-md-9 col-10 mx-auto">
                        <img className="mx-auto" src={logo} alt="" />
                    </div>
                    <div className="kolom-register col-lg-7 col-md-9 col-10 mx-auto p-4">
                        <h3 className='text-center'>Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div class="input-value mb-3">
                                <label for="InputEmail" class="form-label">Email:</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div class="input-value mb-3">
                                <label for="InputUsername" class="form-label">Username</label>
                                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" class="form-control" id="InputUsername" aria-describedby="emailHelp" />
                            </div>
                            <div class="input-value mb-3">
                                <label for="InputPassword" class="form-label">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="InputPassword" aria-describedby="emailHelp" />
                            </div>
                            <div className="button-input-value text-center">
                                <button class="btn btn-light">Sign Up</button>
                            </div>
                        </form>
                        <div className="come-register text-center mt-2">
                            <Link className="text-decoration-none" to={`/`}>
                                <h6 className="text-decoration-none">Already have account? <b>Sign In</b></h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-register col-5 d-none d-md-block">
                <img className="w-100 vh-100" src={pic} alt="" />
            </div>
        </div>
    )
}

export default Register;