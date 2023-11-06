// import React, { useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"


// function Login() {

//     const history=useNavigate();
//     const[username,setusername]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:3000/",{
//                 username,email,password
//             })
//             .then(res=>{
//                 if(res.data==="exist"){
//                     history("/home",{state:{id:email}})
//                 }
//                 else if(res.data==="notexist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }


//     return (
//         <div className="login" >

//             {/* <h1>Login</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br /> */}
//             <div className="container mt-5">
//                 <img src="train.jpg" alt="" srcset="" />
//     <div className="row justify-content-center">
//         <div className="col-md-6">
//             <div className="card">
//                 <div className="card-header">
//                     <h4>Login</h4>
//                 </div>
//                 <div className="card-body">
//                     <form action="POST">

//                     <div className="mb-3">
//                             <label for="username" className="form-label">Username:</label>
//                             <input type="text" onChange={(e) => { setusername(e.target.value) }} placeholder="Enter user name"  />
//                         </div>
//                         <div className="mb-3">
//                             <label for="email" className="form-label">Email:</label>
//                             <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                         </div>
//                         <div className="mb-3">
//                             <label for="password" className="form-label">Password:</label>
//                             <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//                         </div>
//                         <div className="text-center">
//                         <input type="submit" onClick={submit} className="btn btn-primary" />
//                         </div>
//                         <Link to="/signup">Signup Page</Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//             {/* <Link to="/signup">Signup Page</Link> */}

//         </div>
//     )
// }

// export default Login
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import Home from "../../pages/home/Home";
import "./login.css"


function Login() {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/", {
                username, email, password
            });

            if (res.data === "exist") {
                // Correct usage of useNavigate to navigate to "/home"
                history("/", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login" >
            <div className="container mt-5">
                <img src="train.jpg" alt="" srcSet="" />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form action="POST">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label"><i class="fas fa-user icon"></i> Username:</label>
                                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"> <i class="fas fa-envelope icon"></i> Email:</label>
                                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label"><i class="fas fa-lock icon"></i>  Password:</label>
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                    </div>
                                    <div className="text-center">
                                        <input type="submit" onClick={submit} className="btn btn-primary" style={{backgroundColor:"purple"}} />
                                    </div>
                                    <Link to="/signup">Signup Page</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
