import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Login() {
    const history=useNavigate();
    const[username,setusername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/signup",{
               username ,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            {/* <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link> */}
             <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h4>Sign UP</h4>
                </div>
                <div class="card-body">
                    <form action="POST">
                    <div class="mb-3">
                            <label for="email" class="form-label"> <i class="fas fa-user icon"></i>  username:</label>
                            <input type="text" onChange={(e) => { setusername(e.target.value) }} placeholder="Email"  />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label"> <i class="fas fa-envelope icon"></i>  Email:</label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label"><i class="fas fa-lock icon"></i> Password:</label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                        </div>
                        <div class="text-center">
                        <input type="submit" className="btn btn-primary" onClick={submit} style={{backgroundColor:"purple"}}/>
                        </div>
                        <Link to="/login">Login Page</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default Login