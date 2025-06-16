'use client'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between mx-1.5 mt-2'>
    <div className="">
        <span className="text-3xl font-bold">Gribbly</span>
    </div>
    <div className='flex-row gap-3' >
        {/* <Link href={''}>Home</Link>
        <Link href={''}>Pricing</Link>
        <Link href={''}>Login</Link>
        <Link href={''}>Sign Up</Link> */}
    </div>
    </nav>
  )
}

export default Navbar