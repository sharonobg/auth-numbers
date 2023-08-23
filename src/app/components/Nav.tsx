import Link from "next/link"
import '@/app/globals.css';
export default function Nav(){
    return(
        <>
        <nav>
            <ul className="flex">
            <Link href='/'>
                <li className="hover:cursor-pointer hover:text-blue-600">Home No-Auth-Helpers</li>
                </Link>
                <Link href='/login-page'>
                <li className="hover:cursor-pointer hover:text-blue-600">Login</li>
                </Link>
                <Link href="/transactions">
                <li className="hover:cursor-pointer hover:text-blue-600">Transactions</li>
                </Link>
                <Link href="/categories">
                <li className="hover:cursor-pointer hover:text-blue-600">Categories</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}