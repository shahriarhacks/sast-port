import React from 'react';
import './Project.css'
import eCommerce from './images/E-commerce.png'
import TravelPartner from './images/Travel Partner.png'
import CodeSpace from './images/Code Space.png'

const Project = () => {
  return (
    <div className='py-12 min-h-screen'>

      <h1 className='text-white font-bold  text-3xl text-center mb-12'>MY     <span className='text-primary font-bold'>PROJECT</span></h1>

      <div className='grid py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6'>



        <div className="cart shadow-xl border-2 grid justify-center p-6">
          <div className=''>
            <img className='w-100%' src={eCommerce} class="max-w-sm  shadow-2xl" alt="" />
          </div>

          <div className="">
            <h2 class="text-2xl font-bold text-primary mt-2 mb-2">Resale Full Stack E-commerce</h2>
            <h2 class="font-bold text-[18px] text-white mt-2 mb-2">MERN || Firebase || Dashboard</h2>
            <a href="https://doya-shop.web.app/">
              <button className='btn-style p-2 text-white m-2'>LIVE SITE</button>
            </a>
            <a href="https://github.com/shahriar7ahmed/doya-shop-client/">
              <button className='btn-style p-2 text-white m-2'>GIT CODE</button>
            </a>

          </div>
        </div>




        <div className="cart shadow-xl border-2 grid justify-center p-6">
          <div className=''>
            <img className='w-100%' src={TravelPartner}class="max-w-sm  shadow-2xl" alt="" />
          </div>

          <div className="text-white">
            <h2 class="text-2xl font-bold text-primary mt-2 mb-2">Travel Partner - (A Traveling Platform)</h2>
            <h2 class="font-bold text-[18px] text-white mt-2 mb-2">MERN || Firebase || CRUD</h2>
            <a href="https://go-travel-vacation.web.app/">
              <button className='btn-style p-2 text-white m-2'>LIVE SITE</button>
            </a>
            <a href="https://github.com/shahriar7ahmed/travel-partner-client/">
              <button className='btn-style p-2 text-white m-2'>GIT CODE</button>
            </a>
          </div>

        </div>



        <div className="cart shadow-xl border-2  grid justify-center p-6">
          <div className=''>
            <img className='w-100%' src={CodeSpace} class="max-w-sm  shadow-2xl" alt="" />
          </div>

          <div className="text-white">
            <h2 class="text-2xl font-bold text-primary mt-2 mb-2">Code Space - (A Learning Platform)</h2>
            <h2 class="font-bold text-[18px] text-white mt-2 mb-2">MERN || Firebase</h2>
            <a href="https://zero2hero-courses.firebaseapp.com/">
              <button className='btn-style p-2 text-white m-2'>LIVE SITE</button>
            </a>
            <a href="https://github.com/shahriar7ahmed/client-code-space/">
              <button className='btn-style p-2 text-white m-2'>GIT CODE</button>
            </a>

          </div>
        </div>



      </div>
    </div>
  );
};

export default Project;