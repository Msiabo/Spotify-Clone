import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>

            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl text-white'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl text-white'>Biggest Hits Today</h1>
                <div className='flex overflow-x-scroll hide-scrollbar'>
                    {songsData.map((item, index) => (
                        <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>


        </>
    )
}

export default DisplayHome