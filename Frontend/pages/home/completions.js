import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

const Completions = () => {

    const [completions, setCompletions] = useState()

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BEHOST}/completions`, {
            credentials: "include"
        }).then(res => res.json()).then(
            data => setCompletions(data)
        )
    }, [])

    return (<>
        <Navbar />
        <div className="w-1/2 mx-auto mt-10">
            <h1 className="text-4xl my-10">My Completions</h1>
            {completions ? completions.map((val, i) => {
                return (
                    <div className="flex completionGrid compContainer my-4 p-4 rounded-lg" id={val.name}>
                        <div className="flex flex-col">
                            <a className="mx-2 my-2" href={val.url}>{val.name}</a>
                            <h1 className="mx-2 timeContainer">{val.start_time}</h1>
                        </div>
                        <h1 className="text-center">{val.duration / 60}mins</h1>
                    </div>
                )
            }) : <p>"Loading"</p>}
        </div>
    </>);
}

export default Completions;