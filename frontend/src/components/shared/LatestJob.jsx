import React from 'react'
import LatestJobCard from './LatestJobCard'

const randomJobs = [1,2,3,4,5,6,7,8];
const LatestJob = () => {
  return (
    <div className='max-w-7xl mx-10 xl:mx-auto my-5'>
      <h1 className='text-4xl font-bold'><span className='text-[#6a38c2]'>Latest & Top </span><span>Job Openings</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
  {randomJobs.slice(0, 6).map((item, index) => (
    <LatestJobCard key={index} />
  ))}
</div>

    </div>
  )
}

export default LatestJob