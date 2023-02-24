import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter()

    const logoutHandler = () => {
        fetch('http://localhost:5001/logout', {
            credentials: 'include'
        }).then(response => response.json()).then(
            data => {
                if (data.body === 'success') {
                    router.push('/auth/login')
                }
            }
        )
    }

    return (<>
        <div className="flex justify-center py-8 navContainer">
            <Link href="/home/homepage" className="text-2xl mx-4">All Competitions</Link>
            <Link href="/home/remainders" className="text-2xl mx-4">My Remainders</Link>
            <Link href="/home/completions" className="text-2xl mx-4">Completions</Link>
            <Link href="/home/staffRemainders" className="text-2xl mx-4">Staff Remainders</Link>
            <button className="text-2xl mx-4" onClick={logoutHandler}>Logout</button>
        </div>
    </>);
}

export default Navbar;