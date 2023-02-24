import { useEffect, useState } from "react";

import Navbar from "@/components/navbar";

const HomePage = () => {

    const [results, setResults] = useState()

    let a = []
    let body = []

    useEffect(() => {
        fetch('http://localhost:5001/competitions', {
            credentials: 'include'
        }).then(
            response => response.json()
        ).then(result => {
            setResults(result)
        })
    }, [])

    const remindHandler = async (event) => {
        event.preventDefault()
        const elem = document.getElementById(event.target.name)
        elem.innerHTML = " "
        let y
        for(let x of results[event.target.value]){
            if (x.name === event.target.name){
                y = x
            }
        }
        fetch('http://localhost:5001/setRemainder',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                remainder: y
            })
        }).then(response => response.json()).then(
            result => {
                if(result.message === "yes"){
                    console.log("done")
                }
            }
        )
    }

    if (results) {
        for (let x in results) {
            let head = <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl w-1/2 mx-auto my-20">{x}</h1>
                </div>
            </div>
            a.push(head)
            for (let y of results[x]) {
                let bodyInner = <div className="" id={y.name}>
                    <div className="customGrid mx-auto text-center pt-2">
                        <div>
                            <a className="pt-1 text-xl" href={y.url}>{y.name}</a>
                            <h1 className="pt-1 text-sm timeContainer">{y.start_time}</h1>
                        </div>
                        <div>
                            <h1 className="pt-1">{y.duration/60} mins</h1>
                        </div>
                        <div className="text-center">
                            <button className=" px-4 h-10 rounded-lg" value={x} name={y.name} onClick={remindHandler}>Remind Me</button>
                        </div>
                    </div>
                </div>
                body.push(bodyInner)
            }
            let z = <div className="w-3/6 mx-auto p-4 rounded-2xl compContainer">
                {body}
            </div>
            a.push(z)
            body = []

        }
    }

    return (<>
        <Navbar/>
        {a.length !== 0 ? a : <p className="text-center text-4xl mt-10 text-white ">Loading Please wait...</p>}
        <div className="mb-10">

        </div>
    </>);
}

export default HomePage;