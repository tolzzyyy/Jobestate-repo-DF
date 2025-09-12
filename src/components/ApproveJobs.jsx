import React from 'react'
import donut from '../Assets/img/Donut and Shadow.png'


const jobs = [
  {
    id: 1,
    company: 'Tech Corp',
    title: 'Frontend Developer',
    salary: '$80,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/1'
  },
  {
    id: 2,
    company: 'Tech Corp',
    title: 'Backend Developer',
    salary: '$95,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/2'
  },
  {
    id: 3,
    company: 'Tech Corp',
    title: 'UI/UX Designer',
    salary: '$70,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/3'
  },
  {
    id: 2,
    company: 'Tech Corp',
    title: 'Backend Developer',
    salary: '$95,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/2'
  },
  {
    id: 3,
    company: 'Tech Corp',
    title: 'UI/UX Designer',
    salary: '$70,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/3'
  },
  {
    id: 2,
    company: 'Tech Corp',
    title: 'Backend Developer',
    salary: '$95,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/2'
  },
  {
    id: 3,
    company: 'Tech Corp',
    title: 'UI/UX Designer',
    salary: '$70,000',
    location: 'Lagos, Nigeria',
    link: '/jobs/3'
  },
];

const ApproveJobs = () => {


  const jobId = 1; // the ID you want to fetch
  const job = jobs.find((j) => j.id === jobId);

  console.log(job);
  // {id: 2, company: 'BuildX', title: 'Backend Developer', ...}
  

  return (
        <div className='mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]'>
          <div className='flex justify-between w-full items-center bg-white'>
            <h1 className='text-5xl font-semibold'>Approve Jobs</h1>
            <img src={donut} alt="" className='hidden md:flex'/>
          </div>
          <div className='flex justify-between mt-10 gap-8 w-full items-start'>
            <div className='w-full lg:w-5/12 '>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:max-h-[600px] lg:overflow-y-auto lg:pr-4'>
                {jobs.map((job) => (
                  <div 
                    key={job.id} 
                    className='h-auto w-full p-6 flex flex-col gap-10 rounded-md shadow-lg bg-white'
                  >
                    <div className='w-full h-auto flex justify-between'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs'>{job.company}</p>
                        <h3 className='text-2xl'>{job.title}</h3>
                      </div>
                      <p className='text-xl'>{job.salary}</p>
                    </div>
                    <div className='w-full h-auto flex justify-between'>
                      <p>{job.location}</p>
                      <a href={job.link} className='underline text-blue-500'>View Details</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-7/12 hidden lg:block bg-white shadow-lg'>
              <div className="h-[calc(100vh-150px)] overflow-y-auto"> 
              <div>
                {job && (
                  <div className='h-auto w-full p-6 flex flex-col gap-10 rounded-md shadow-lg bg-white sticky top-0 z-50'>
                    <div className='w-full h-auto flex justify-between'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs'>{job.company}</p>
                        <h3 className='text-2xl'>{job.title}</h3>
                      </div>
                      <p className='text-xl'>{job.salary}</p>
                    </div>
                    <div className='w-full h-auto flex justify-between'>
                      <p>{job.location}</p>
                      <a href={job.link} className='flex gap-2'>
                        <button className='py-3 px-5 rounded-md text-white font-semibold bg-green-500'>Accept</button>
                        <button className='py-3 px-5 rounded-md text-white font-semibold bg-red-500'>Decline</button>
                      </a>
                    </div>
                  </div>
                )}
                <p className='p-5 bg-white leading-8 text-gray-500'>
                  $63,000 + VIP Bonus
                  Our fast-paced and collaborative environment inspires us to create, think, and challenge each other in ways that make our solutions and our teams better. Whether you’re interested in engineering or development, marketing or sales, or something else – if this sounds like you, then we’d love to hear from you!
                  We are headquartered in Denver, Colorado, with offices in the US, Canada, and India.
                  Looking to start your career in Technology? We have opportunities right here in mid-Michigan! Vertafore is looking for talented people to join our team in Michigan. Our dynamic environment provides professional development, fast upward mobility, and exposure to the latest and greatest in technology.
                  Vertafore is a leading technology company whose innovative software solution are advancing the insurance industry. Our suite of products provides solutions to our customers that help them better manage their business, boost their productivity and efficiencies, and lower costs while strengthening relationships. Our mission is to move InsurTech forward by putting people at the heart of the industry. We are leading the way with product innovation, technology partnerships, and focusing on customer success. Our fast-paced and collaborative environment inspires us to create, think, and challenge each other in ways that make our solutions and our teams better.
                  We are headquartered in Denver, Colorado, with offices across the U.S., including East Lansing, Michigan – we are minutes from Michigan State University, Lansing Community College, and Cooley Law School!
                  Vertafore is a Flexible First working environment which allows team members to work from home as often as you’d like, while using our offices as a place for collaboration, community, and teambuilding. There are times you may be asked to come into an office and/or travel for specific meetings for a specific business purpose and this varies by job responsibilities.
    
                  JOB DESCRIPTION
    
                  Engineers create products utilizing state-of-the-art technologies. They ensure successful releases to market while working with cutting-edge, lean-agile, software development methodologies.
    
                  Core Responsibilities:
                  Writes well-designed, testable code.
                  Participates in the design, development, testing, and debugging of an application.
                  Troubleshoots and ensures timely and effective resolutions of any project issue.
                  Participates in code reviews, both of your own code and as a reviewer.
                  Provides feedback and suggestions for process and product improvement.
                  Conducts technical research on new technology for possible new aspects of a product or components needing redesign or updating.
                  Prepares product documentation, support materials, and internal documentation.
                  Shares what they know by reaching out to other team members.
    
                  Core Competencies:
                  Effective communicator (written and verbal).
                  Problem solver with strong analytical and critical thinking skills
                  An innate curiosity about how things work; Proactively acquires new skills and learns new tools and technologies to troubleshoot issues.
                  Ability to learn quickly and work independently or as part of a team
                  Adaptable and works best in a fast-paced, work environment
    
                  Core Requirements:
                  No Experience Required
                  Proficient in popular coding languages and frameworks and systems
                  Knowledge of the software development life cycle
                  Knowledge of Agile and Scrum development methodologies
                  Knowledge of relational and NoSQL databases helpful
    
                  Additional Requirements and Details:
                  No travel anticipated.
                  Located and working from our East Lansing location when required.
                  Ability to work remote with a stable internet connection on an as needed basis.
                  Occasional lifting and/or moving up to 10 pounds.
                  Frequent repetitive hand and arm movements required to operate a computer.
                  Specific vision abilities required by this job include close vision (working on a computer, etc.).
                  Frequent sitting and/or standing.
                  #LI-Hybrid
                  $63,000 / year
    
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ApproveJobs