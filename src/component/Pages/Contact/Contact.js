import React from 'react';
import ContactEmail from '../ContactEmail/ContactEmail';


const Contact = () => {
    return (
        <div className='py-12 grid grid-cols justify-center mb-6 min-h-screen'>
            <h1 className='text-white font-bold  text-3xl text-center'>CONTACT <span className='text-primary font-bold'>ME</span></h1>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mt-6'>
                <div>
                    <div class="card w-64  shadow-xl">
                        <figure class="px-10 pt-10">
                            <i class="fa-solid fa-phone-volume text-primary text-7xl"></i>

                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-white font-bold  text-2xl text-center'>Call Us On</h1>
                            <h1 className='text-white font-bold  text-1xl text-center'>+8801571228994</h1>

                        </div>
                    </div>
                </div>


                <div>
                    <div class="card w-64  shadow-xl">
                        <figure class="px-10 pt-10">
                            <i class="fa-solid fa-message text-primary text-7xl"></i>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-white font-bold  text-2xl text-center'>Email</h1>
                            <h1 className='text-white font-bold  text-1xl text-center'>shahriar7ahmed@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-64  shadow-xl">
                        <figure class="px-10 pt-10">
                            <i class="fa-solid fa-location-dot text-primary text-7xl"></i>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-white font-bold  text-2xl text-center'>Adress</h1>
                            <h1 className='text-white font-bold  text-1xl text-center'>Kushtia, Khulna</h1>

                        </div>
                    </div>
                </div>


            </div>
            <ContactEmail></ContactEmail>
        </div>
    );
};

export default Contact;