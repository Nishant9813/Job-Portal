import Navbar from '@/components/shared/Navbar'
import React from 'react'
import JobCard from '@/components/shared/JobCard';

const randomJobs= [1,2,3,4,5,6,7,8];

const Browse = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-auto pt-24'>
        <h1 className='font-bold text-xl my-10 mx-5'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
        {
            randomJobs.map((item,index) =>{
                return (
                    <JobCard/>
                )
            })
        }
        </div>
    </div>
    </>
  )
}

export default Browse