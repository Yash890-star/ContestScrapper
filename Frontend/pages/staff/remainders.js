import { useEffect, useState } from "react";
import StaffNavbar from "@/components/staffNavbar";

const Remainders = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BEHOST}/getRemainders`, {
            credentials: "include"
        }).then(response => response.json()).then(
            result => setData(result)
        )
    }, [])

    console.log(data)
    let a = []
    if (data) {
        for (let x of data) {
            let b = <div className="flex remainderGrid compContainer my-4 p-4 rounded-lg">
                <div className="flex flex-col">
                    <a className="mx-2 my-2" href={x.url}>{x.name}</a>
                    <h1 className="mx-2 timeContainer">{x.start_time}</h1>
                </div>
                <h1 className="text-center">{x.duration / 60}mins</h1>
            </div>
            a.push(b)
        }
    }

    return (<>
        <StaffNavbar />
        <h1 className="text-4xl w-1/2 mx-auto my-10">My Remainders</h1>
        <div className="w-1/2 mx-auto">
            {a}
        </div>
    </>);
}

export default Remainders;