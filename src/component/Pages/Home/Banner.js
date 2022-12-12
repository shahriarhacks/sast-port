import React, { useEffect } from 'react';
import { BsCodeSlash } from "react-icons/bs"
import AOS from 'aos'
import Type from './Type';
import './Banner.css';





const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });


    }, []);


    return (
        <div className='banner py-12'>
            <div class="hero  flex justify-center p-12">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div data-aos='zoom-in' className='px-16 text-[230px] text-primary'>

                        <BsCodeSlash></BsCodeSlash>

                    </div>




                    <div className='px-16 mt-16'>
                        <h1 class="text-2xl font-bold text-white">hi, there</h1>

                        <h1 class="text-2xl font-bold text-white">I'M SHAHRIAR AHMED</h1>

                        <h2 class="text-2xl font-bold text-primary mt-2 mb-2"><Type></Type></h2>

                        <p class=" text-1xl mt-6   text-white">I enjoy learn new skills and implementing then in real life.I like programming.<br></br>I am always ready to learn new frameworks/technologies to keep myself update with the latest market trends.</p>

                        <a href="https://drive.google.com/file/d/1UF4I9PnYlVOTV9xwGfNjwZn9lcsNpZof/view?usp=sharing/"><button class="px-6 py-2  btn-style button-one-style flex mt-6 text-white">DOWNLOAD RESUME</button></a>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;