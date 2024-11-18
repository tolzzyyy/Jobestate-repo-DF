import React from 'react'
import nawa from './img/bg.png'
import damn from './img/techtalkbg.jpg'
import blogimg1 from './img/blogimg1.jpg'
import blogimg2 from './img/blogimg2.jpg'
import blogimg3 from './img/blogimg3.jpg'
import blogimg4 from './img/blogimg4.jpg'
import blogimg5 from './img/blogimg5.jpg'
import face1 from '../components/img/face1.png'
import face2 from '../components/img/face2.png'
import face3 from '../components/img/face3.png'
import Footer from './Footer';
import { MdOutlineArrowOutward } from "react-icons/md";

const bgImage = {
    backgroundImage: `url(${nawa})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const bgImageBlog = {
    backgroundImage: `url(${damn})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg5,
    author: 'John Doe',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face1,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg3,
    author: 'Samuel Giggs',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face2,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg4,
    author: 'John Doe',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face1,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg2,
    author: 'Elizabeth Williams',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face3,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg1,
    author: 'Samuel Giggs',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face2,
  },
];

const Blog = () => {
  return (
    <div style={bgImage} className='mt-[70px] md:mt-[100px] lg:mt-[130px] overflow-hidden'>
        <section className='h-auto flex flex-col gap-7 py-12 md:px-[50px] md:flex md:h-[700px] items-center lg:items-start lg:px-[135px] lg:py-16 lg:flex lg:h-screen'>
          <div className='flex flex-col gap-7 md:gap-0 md:flex-row w-full justify-between items-center'>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-[#013A8A] font-semibold'>Trending</span>
              <h1 className='font-semibold text-[13px] md:text-[22px] lg:text-[30px]'>Insights and Advice to Help You Land Your Next Job</h1>
              <p className='text-[10px] text-center md:text-left md:text-[14px] lg:text-[15px] text-[#b3b3b3] w-[350px] md:w-[600px] lg:w-[1000px]'>
                Learn how to craft the perfect resume, ace interviews, and navigate the job market with confidence. 
                Our expert-driven insights provide the tools you need to stand out and succeed.
              </p>
            </div>
            <button className='w-[70px] h-[70px] rounded-full border border-black flex items-center justify-center hover:w-[80px] hover:h-[80px] transition-all duration-500'>
              <MdOutlineArrowOutward size={24}/>
            </button>
          </div>
          <div style={bgImageBlog} className='w-full h-full rounded-xl'></div>
        </section>
        <section className='h-auto flex flex-col gap-7 py-12 md:px-[50px] md:flex md:h-[700px] items-center lg:items-start lg:px-[135px] lg:py-14 lg:flex lg:h-full'>
          <div className='flex flex-col gap-7 md:gap-0 md:flex-row w-full justify-between items-center'>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <h1 className='font-semibold text-[13px] md:text-[22px] lg:text-[30px]'>Tech Trends</h1>
            </div>
            <button className='w-[70px] h-[70px] rounded-full border border-black flex items-center justify-center hover:w-[80px] hover:h-[80px] transition-all duration-500'>
              <MdOutlineArrowOutward size={24}/>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col ">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center">
                    <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='h-auto flex flex-col gap-7 py-12 md:px-[50px] md:flex md:h-[700px] items-center lg:items-start lg:px-[135px] lg:py-14 lg:flex lg:h-full'>
          <div className='flex flex-col gap-7 md:gap-0 md:flex-row w-full justify-between items-center'>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <h1 className='font-semibold text-[13px] md:text-[22px] lg:text-[30px]'>Tech Trends</h1>
            </div>
            <button className='w-[70px] h-[70px] rounded-full border border-black flex items-center justify-center hover:w-[80px] hover:h-[80px] transition-all duration-500'>
              <MdOutlineArrowOutward size={24}/>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col ">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center">
                    <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer/>
    </div>
  )
}



export default Blog