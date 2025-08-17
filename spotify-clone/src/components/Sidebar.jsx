import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[25%] text-white h-screen p-2 gap-2 flex-col hidden lg:flex bg-black'>
        <div className='bg-[#121212] h-[15%] rounded flex-col flex justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <Image className='w-6' src={home} alt='Home' width={24} height={24} />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <Image className='w-6' src={favourites} alt='Favourites' width={24} height={24} />
                <p className='font-bold'>Favourites</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <Image className='w-6' src={history} alt='History' width={24} height={24} />
                <p className='font-bold'>History</p>
            </div>
        </div>
    </div>
    
    )
}

export default Sidebar