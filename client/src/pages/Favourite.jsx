import React from 'react'
import { dummyShowsData } from '../assets/assets.js'
import MovieCard from '../components/MovieCard.jsx'
import BlurCircle from '../components/BlurCircle'

const Favourite = () => {
  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top='150px' left='0px'/>
      <BlurCircle bottom='50px' right='50px'/>
      <h1 className='text-lg font-medium my-5'>My Favourites</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.slice(0, 2).map((movie) => (
          <MovieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  )
}

export default Favourite
