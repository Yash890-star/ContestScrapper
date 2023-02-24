import { useEffect, useState } from "react";

const Test = () => {

    const [holder, setHolder] = useState()

    useEffect(() => {
        fetch('http://localhost:5001/test').then(
            response => response.json()
        ).then(data => setHolder(data))
    }, [])
    console.log(holder)
    return ( <>
    <h1>{holder ? holder.message : "loading"}</h1>
    </> );
}
 
export default Test;