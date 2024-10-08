import FilterCard from "@/components/shared/FilterCard";
import JobCard from "@/components/shared/JobCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
    <Navbar />
    <div className='max-w-7xl mx-auto mt-5 pt-24'>
        <div className='flex gap-5'>
            <div className='w-20%'>
                <FilterCard />
            </div>
            {
                jobsArray.length <= 0 ? <span>Job not found</span> : (
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-1'>
                            {
                                jobsArray.map((job) => (
                                    // <motion.div
                                    //     initial={{ opacity: 0, x: 100 }}
                                    //     animate={{ opacity: 1, x: 0 }}
                                    //     exit={{ opacity: 0, x: -100 }}
                                    //     transition={{ duration: 0.3 }}
                                    //     key={job?._id}>
                                    //     <Job job={job} />
                                    // </motion.div>
                                    <JobCard/>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </div>


</div>
  );
};

export default Jobs;
