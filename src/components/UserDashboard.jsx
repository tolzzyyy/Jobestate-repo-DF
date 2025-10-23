import React, { useState, useEffect } from 'react'

const UserDashboard = ({ user }) => {
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jobestate-23.onrender.com/api/jobs', {
          method: 'GET',
          credentials: 'include', // This sends cookies for authentication
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch jobs')
        }
        
        const data = await response.json()
        
        if (data.jobs) {
          setJobs(data.jobs)
          // Set the first job as selected by default
          if (data.jobs.length > 0) {
            setSelectedJob(data.jobs[0])
          }
        }
      } catch (err) {
        setError('Failed to fetch jobs. Please try again.')
        console.error('Error fetching jobs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // Format salary range
  const formatSalary = (salaryRange) => {
    if (!salaryRange) return 'Salary not specified'
    return `$${salaryRange.min?.toLocaleString() || '0'} - $${salaryRange.max?.toLocaleString() || '0'}`
  }

  // Handle job selection
  const handleJobSelect = (job) => {
    setSelectedJob(job)
  }

  if (loading) {
    return (
      <div className='mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]'>
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]'>
        <div className='flex justify-center items-center h-64'>
          <p className='text-red-500 text-lg'>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]'>
      <div className='flex items-start gap-3 flex-col md:flex-row justify-between w-full md:items-center bg-white'>
        <h1 className='xl:text-5xl text-[2xl] font-semibold'>View All Jobs</h1>
        <p className='text-gray-600'>Welcome, {user?.fullName}</p>
      </div>
      
      <div className='flex justify-between mt-10 gap-8 w-full items-start'>
        {/* Jobs List */}
        <div className='w-full lg:w-5/12'>
          {jobs.length === 0 ? (
            <div className='text-center py-10'>
              <p className='text-gray-500 text-lg'>No jobs available at the moment</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:max-h-[410px] lg:overflow-y-auto lg:pr-4'>
              {jobs.map((job) => (
                <div 
                  key={job._id} 
                  className={`h-auto border-[#686868] border-[1px] w-full p-6 flex flex-col gap-10 rounded-md bg-white cursor-pointer transition-all hover:shadow-md ${
                    selectedJob?._id === job._id ? 'border-blue-500 border-2' : ''
                  }`}
                  onClick={() => handleJobSelect(job)}
                >
                  <div className='w-full h-auto flex items-start gap-3 flex-col md:flex-row md:items-center justify-between'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-xs text-gray-500'>Company</p>
                      <h3 className='text-2xl font-semibold'>{job.title}</h3>
                    </div>
                    <p className='text-[15px] font-bold text-green-600'>{formatSalary(job.salaryRange)}</p>
                  </div>
                  <div className='w-full h-auto flex justify-between items-center'>
                    <p className='text-gray-600'>Location</p>
                    <span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                      {job.status || 'Open'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Job Details */}
        <div className='w-7/12 hidden lg:block bg-white rounded-[30px] z-0 border-[#686868] border-[1px]'>
          <div className="h-[410px] overflow-y-auto"> 
            {selectedJob ? (
              <div>
                {/* Job Header */}
                <div className='h-auto w-full p-6 flex flex-col gap-10 bg-white rounded-t-[30px] border-[#686868] border-b-[1px] sticky top-0 z-0'>
                  <div className='w-full h-auto flex justify-between'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-xs text-gray-500'>Company</p>
                      <h3 className='text-2xl font-semibold'>{selectedJob.title}</h3>
                    </div>
                    <p className='text-xl font-bold text-green-600'>{formatSalary(selectedJob.salaryRange)}</p>
                  </div>
                  <div className='w-full h-auto flex justify-between items-center'>
                    <p className='text-gray-600'>Location</p>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors'>
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Job Description */}
                <div className='p-6 leading-8 text-gray-700'>
                  <h4 className='text-xl font-semibold mb-4'>Job Description</h4>
                  <p className='mb-6'>{selectedJob.description}</p>

                  {/* Requirements */}
                  {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                    <div className='mb-6'>
                      <h4 className='text-xl font-semibold mb-3'>Requirements</h4>
                      <ul className='list-disc list-inside space-y-2'>
                        {selectedJob.requirements.map((requirement, index) => (
                          <li key={index} className='text-gray-700'>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Salary Range */}
                  {selectedJob.salaryRange && (
                    <div className='mb-6'>
                      <h4 className='text-xl font-semibold mb-3'>Salary Range</h4>
                      <p className='text-green-600 font-semibold'>
                        {formatSalary(selectedJob.salaryRange)} per year
                      </p>
                    </div>
                  )}

                  {/* Job Status */}
                  <div className='mb-6'>
                    <h4 className='text-xl font-semibold mb-3'>Job Status</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedJob.status === 'approved' 
                        ? 'bg-green-100 text-green-800'
                        : selectedJob.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedJob.status?.charAt(0).toUpperCase() + selectedJob.status?.slice(1) || 'Open'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex justify-center items-center h-full'>
                <p className='text-gray-500 text-lg'>Select a job to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Job Details */}
      {selectedJob && (
        <div className='lg:hidden mt-6 bg-white rounded-lg border border-gray-300 p-6'>
          <h3 className='text-2xl font-semibold mb-4'>{selectedJob.title}</h3>
          <p className='text-gray-600 mb-4'>{selectedJob.description}</p>
          
          {selectedJob.requirements && selectedJob.requirements.length > 0 && (
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Requirements</h4>
              <ul className='list-disc list-inside space-y-1'>
                {selectedJob.requirements.map((requirement, index) => (
                  <li key={index} className='text-gray-700 text-sm'>{requirement}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className='flex justify-between items-center'>
            <p className='text-green-600 font-semibold'>{formatSalary(selectedJob.salaryRange)}</p>
            <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors'>
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDashboard