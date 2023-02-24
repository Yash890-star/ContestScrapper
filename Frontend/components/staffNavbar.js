import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StaffNavbar = () => {

    const router = useRouter()
    const [excel, setExcel] = useState()
    const [ack, setAck] = useState([])

    const logoutHandler = () => {
        fetch('http://localhost:5001/logout',{
            credentials: 'include'
        }).then(response => response.json()).then(
            data => {
                if(data.body === 'success'){
                    router.push('/auth/login')
                }
            }
        )
    }

    const fecthHandler = () => {
        fetch('http://localhost:5001/createExcel', {
            credentials: 'include'
        }).then(res => res.json()).then(
            data => setExcel(data)
        )
    }

    useEffect(() => {
        console.log(excel)
        if(excel && excel.message === 1){
            let a = [<p>done</p>]
            setAck(a)
        }
        setTimeout(() => {
            setAck([])
        }, 2000)
    }, [excel])

    return ( <>
        <div className="flex justify-center items-center py-8 navContainer">
            <Link href="/staff/homepage" className="text-2xl mx-4">Competitions</Link>
            <Link href="/staff/remainders" className="text-2xl mx-4">Remainders</Link>
            <div>
            <button className="text-2xl mx-4" onClick={fecthHandler}>Fetch Excel data</button>
            <p>{ack.length !== 0 ? ack.map((val, i) => {
                return (
                    <p className="text-white text-center">Done</p>
                )
            }) : ""}</p>
            </div>
            <button className="text-2xl mx-4" onClick={logoutHandler}>Logout</button>
        </div>
    </> );
}
 
export default StaffNavbar;