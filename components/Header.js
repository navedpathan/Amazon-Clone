import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slice/cartSlice';

function Header() {
  
  const { data: session } = useSession();
  const router  = useRouter();
  const items = useSelector(selectItems);
  
  return (
    <header>
        {/* Top nav */}
        <div className='flex items-center w-[100vw] bg-black p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow-0'>
            <Image
            onClick={() => router.push('/')} 
            src='/amznlogo.png' width={150} height={35} objectFit='contain' className='cursor-pointer'/>            
            </div>

            {/* Search */}
            <div className='hidden mx-2 sm:flex items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
              <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink focus:ring-0 outline-none rounded-l-md '/>
              <SearchIcon className='h-9 px-3 py-2'/>
            </div>

            {/* Right */}
            <div className='flex text-white items-center text-xs space-x-4 mx-4 whitespace-nowrap'>
              <div onClick={ !session ? signIn : signOut } className="link">
                <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>

              <div onClick={() => session && router.push('/orders')} className="link">
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
              </div>

              <div onClick={() => router.push('/checkout')} className="link relative flex items-center">

                <span className='absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                  {items.length}
                </span>
                
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
              </div>
            </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-4 p-2 pl-6 w-full bg-gray-800 text-white text-sm">
          <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-1'/>
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Mobiles</p>
          <p className='link'>Customer Service</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden lg:inline-flex'>Fashion</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Home & Kitchen</p>
          <p className='link hidden lg:inline-flex'>New Releases</p>
        </div>
    </header>
  )
}

export default Header