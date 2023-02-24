import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    const submitHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:5001/staffRegister',{
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(response => response.json()).then(
            result => {
                if(result.message === 'yes'){
                    router.push('/staff/homepage')
                }
            }
        )
    }   

    return ( <>
        <div className="flex flex-col mx-auto justify-center items-center h-screen text-black">
            <h1 className="text-center text-6xl mb-5 text-white">Sign Up</h1>
            <p className="text-white text-xl mb-5">Enter your credentials to continue</p>
            <input placeholder="Name" type="text" className="border w-64 border-black rounded-lg p-2 my-2" onChange={e => setName(e.target.value)}/>
            <input placeholder="Email" type="text" className="border w-64 border-black rounded-lg p-2 my-2" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" className="border w-64 border-black rounded-lg p-2 my-2" onChange={e => setPassword(e.target.value)}/>
            <button className="w-24 h-10 rounded-lg my-10" onClick={submitHandler}>Submit</button>
        </div>
    </> );
}
 
export default Signup;