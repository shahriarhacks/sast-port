import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className='py-16 grid grid-cols justify-center'>
      <h1 className='text-white font-bold  text-3xl text-center'>MY <span className='text-primary font-bold'>EDUCATION</span></h1>

      <br /><br />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6'>
        <div>

          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2022</span>
            <h3 className='font-bold text-primary'>Web Development Course</h3>
            <h3 className='font-bold text-primary'>Programming Hero Course</h3>
            <p className='text-white'>I do a 6 month on web development course. Through which we acquire many skills web development.
              I can easily create any web site. We can easily make web site responsive for all devices.
            </p>
          </div>


          <div className=' box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2020-2024</span>
            <h3 className='font-bold text-primary'>Degree- Diploma Engineering</h3>
            <h3 className='font-bold text-primary'>Kushtia Polytechnic Institute, Kushtia,
              Khulna</h3>
            <p className='text-white'>Department of Computer Science and
              Technology.</p>
          </div>

        </div>



        <div>
          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2018-2020</span>
            <h3 className='font-bold text-primary'>Degree- Secondary School Certificate</h3>
            <h3 className='font-bold text-primary'>Jharambari High School, Pirganj,
              Rangpur</h3>
            <p className='text-white'>Department of Science.</p>
          </div>

          <div className='box'>
            <i className='fas fa-graduation-cap'></i>
            <span className='text-2xl font-bold text-white'>2017</span>
            <h3 className='font-bold text-primary'>Degree- Junior School Certificate</h3>
            <h3 className='font-bold text-primary'>Jharambari High School, Pirganj,
              Rangpur</h3>
            <p className='text-white'>I got first certificate of my study life.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Education;