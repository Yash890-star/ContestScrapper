import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

const StaffRemainders = () => {

    const [staffRemainders, setStaffRemainders] = useState()

    useEffect(() => {
        fetch('http://localhost:5001/staffRemainders', {
            credentials: "include"
        }).then(res => res.json()).then(data => setStaffRemainders(data))
    }, [])

    const checkboxHandler = (event) => {
        document.getElementById(event.target.value).innerHTML=""
        document.getElementById(event.target.value).classList=[]
        fetch('http://localhost:5001/staffCompleted',{
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                completed: event.target.value
            })
        })
    }

    return (<>
        <Navbar />
        <h1 className="text-center my-10 text-4xl">Staff Remainders</h1>
        <div className="w-1/2 mx-auto">
            {staffRemainders ? staffRemainders.map((val, i) => {
                return (
                    <div className="flex remainderGrid compContainer my-4 p-4 rounded-lg" id={val.name}>
                        <div className="flex flex-col">
                            <a className="mx-2 my-2" href={val.url}>{val.name}</a>
                            <h1 className="mx-2 timeContainer">{val.start_time}</h1>
                        </div>
                        <h1 className="text-center">{val.duration / 60}mins</h1>
                        <input type="checkbox" className="h-4 mt-5" value={val.name} onClick={checkboxHandler}/>
                    </div>
                )
            }) : <p>Loading</p>}
        </div>
    </>);
}

export default StaffRemainders;