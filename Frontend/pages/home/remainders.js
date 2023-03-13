import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
const Remainder = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BEHOST}/getRemainder`, {
            credentials: 'include'
        }).then(response => response.json()).then(
            result => {
                setData(result)
            }
        )
    }, [])

    const checkboxHandler = (event) => {
        let a = event.target.value
        fetch(`${process.env.NEXT_PUBLIC_BEHOST}/postStatus`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
            body: JSON.stringify({
                name: a 
            })
        })
        let elem = document.getElementById(a)
        elem.remove()
        console.log(elem)
    } 

    console.log(data)
    let a = []
    if (data) {
        for (let x of data) {
            let b = <div className="flex remainderGrid compContainer my-4 p-4 rounded-lg" id={x.name}>
                <div className="flex flex-col">
                    <a className="mx-2 my-2" href={x.url}>{x.name}</a>
                    <h1 className="mx-2 timeContainer">{x.start_time}</h1>
                </div>
                <h1 className="text-center">{x.duration/60}mins</h1>
                <input type="checkbox" className="h-4 mt-5" value={x.name} onClick={checkboxHandler}/>
            </div>
            a.push(b)
        }
    }

    return (<>
        <Navbar/>
        <h1 className="text-4xl w-1/2 mx-auto my-10">My Remainders</h1>
        <div className="w-1/2 mx-auto">
        {a}
        </div>
    </>);
}

export default Remainder;