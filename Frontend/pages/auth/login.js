import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const router = useRouter()

    const loggedInHandler = () => {
        if(!loggedIn){
            setLoggedIn(true)
        }
        else{
            setLoggedIn(false)
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:5001/login', {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password,
                loggedIn: loggedIn
            })
        }).then(response => response.json()).then(
            result => {
                if(result.message === "yes"){
                    router.push('/home/homepage')
                }
            }
        )
    }

    return (<>
        <div className="flex flex-col w-1/4 mx-auto justify-center items-center h-screen">
            <h1 className="text-center text-6xl mb-5">Log in</h1>
            <p className="text-xl mb-5">Enter your credentials to continue</p>
            <input placeholder="Email" type="text" className="border w-64 border-black rounded-lg p-2 my-2" onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" className="border w-64 border-black rounded-lg p-2 my-2" onChange={e => setPassword(e.target.value)} />
            <h1 className="mt-4">Click here to Stay logged In <input type="checkbox" onClick={loggedInHandler}/></h1>
            <button className="w-24 h-10 rounded-lg my-5" onClick={submitHandler}>Submit</button>
        </div>
    </>);
}

export default Login;