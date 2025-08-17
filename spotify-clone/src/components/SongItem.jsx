import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {

    const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#ffffff26] '>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold pt-2 mb-2 text-white top-info'>{name}</p>
        <p className='text-slate-200 text-sm '>{desc}</p>

    </div>
  )
}

export default SongItem