import StaffNavbar from "@/components/staffNavbar";
import { useEffect, useState } from "react";

const Homepage = () => {

    const [data, setData] = useState()
    const [comp, setComp] = useState()
    const [b, setB] = useState([])

    let a = []

    useEffect(() => {
        fetch('http://localhost:5001/getSites').then(
            res => res.json()
        ).then(
            result => setData(result)
        )
        fetch('http://localhost:5001/getComps').then(
            res => res.json()
        ).then(
            result => setComp(result)
        )

    }, [])

    const remindHandler = (event) => {
        event.preventDefault()
        let y
        for(let x of comp){
            if (x.name === event.target.name){
                console.log(event.target.name)
                y = x
            }
        }
        console.log(y)
        fetch('http://localhost:5001/remainder', {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "remainder": y
            })
        })
        const elem = document.getElementById(event.target.name)
        elem.innerHTML = ""
    }

    if (data && comp) {
        for (let x of data) {
            let b = <option value={x[0]}>{x[0]}</option>
            a.push(b)
        }
    }

    let c = []

    const selectHandler = (event) => {
        c = []
        for (let x of comp) {
            if (x.site === event.target.value) {
                let elem = <div className="" id={x.name}>
                    <div className="customGrid mx-auto text-center pt-2">
                        <div>
                            <a className="pt-1 text-xl" href={x.url}>{x.name}</a>
                            <h1 className="pt-1 text-sm timeContainer">{x.start_time}</h1>
                        </div>
                        <div>
                            <h1 className="pt-1">{x.duration / 60} mins</h1>
                        </div>
                        <div className="text-center">
                            <button className=" px-4 h-10 rounded-lg" value={x} name={x.name} onClick={remindHandler}>Remind</button>
                        </div>
                    </div>
                </div>
                c.push(elem)
            }
        }
        setB(c)
    }

    return (<>
        <StaffNavbar />
        <div>
            <div className="w-1/2 mx-auto text-center mt-10">
            <select name="platforms" id="platforms" className="compContainer p-4 rounded-lg text-white w-64 mx-auto" onClick={selectHandler}>
                {a.length !== 0 ? <option disabled selected defaultValue> -- select an option -- </option> : <option diabled selected defaultValue>Loading Please wait</option>}
                {a}
            </select>
            </div>
            <div className="compContainer w-1/2 mx-auto mt-20 rounded-lg py-6 px-4 mb-10">
                {b}
            </div>
        </div>
    </>);
}

export default Homepage;