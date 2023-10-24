// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
// import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <div className='text-white text-center uppercase'>
      <h1 className='text-5xl font-semibold p-10'>
        Hello World
      </h1>
      <Link href='/bakwan' className='text-xl font-semibold'>CLICK ME</Link>
    </div>
    <Navbar/>
    </>
  )
}
