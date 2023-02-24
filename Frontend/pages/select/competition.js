import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const competitions = () => {

    const [sites, setSites] = useState()
    const [interested, setInterested] = useState([])
    const router = useRouter()

    useEffect(() => {
        fetch('https://kontests.net/api/v1/sites').then(
            response => response.json()
        ).then(
            result => setSites(result)
        )
    }, [])

    const checkboxHandler = (event) => {
        console.log(event.target.value)
        setInterested(prev => ([...prev, event.target.value]))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(interested)
        fetch('http://localhost:5001/apply', {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                competitions: interested
            })
        }).then(response => response.json()).then(
            result => {
                console.log(result)
                if(result.message === "done"){
                    router.push('/home/homepage')
                }
            }
        )
    }

    console.log(interested)

    return (<>
        <div>
            <h1 className="text-5xl text-center mt-10 mb-10">Select Interested Platforms</h1>
            <div className="grid w-1/2 mx-auto grid-cols-2">
                {sites ? sites.map((val, index) => {
                    return <>
                        <p key={index} className="text-center my-2 text-xl">{val[0]}</p>
                        <input type="checkbox" value={val[0]} key={index+10} onClick={checkboxHandler} className="h-4 my-auto" />
                    </>
                }) : " "}
            </div>
            <div className="flex justify-center">
                <button onClick={submitHandler} className="text-center mx-auto px-4 w-36 py-2 rounded-lg mt-10">Done</button>
            </div>
        </div>
    </>);
}

export default competitions;