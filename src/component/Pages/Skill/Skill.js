import React from 'react';
import {
    DiJavascript1, DiReact,
    DiNodejs, DiGithubBadge, DiMongodb
} from "react-icons/di";
import { SiFirebase, SiWindows, SiVisualstudiocode, SiHeroku, SiNetlify, SiExpress } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"





import './Skill.css';



const Skill = () => {
    return (
        <div className='py-12 min-h-screen'>



            <div className='grid grid-cols justify-center'>
                <h1 className='text-white font-bold  text-3xl text-center mb-6'>PROFESSIONAL <span className='text-primary font-bold'>SKILL</span>
                </h1>


                <div className='grid py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-6'>



                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style '><AiFillHtml5 /></div>
                        </div>
                    </div>


                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style'><DiJavascript1 /></div>
                        </div>
                    </div>


                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style '><DiReact /></div>
                        </div>
                    </div>

                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style '><DiNodejs /></div>
                        </div>
                    </div>
                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style'><SiExpress /></div>
                        </div>
                    </div>

                    <div class="card card-style">
                        <div class="card-body items-center text-center text-white">
                            <div className='icon-style '><DiMongodb /></div>
                        </div>
                    </div>
                </div>
            </div>


            <br /><br /><br />



            <div className='mt-24'>

                <div className='grid grid-cols justify-center'>
                    <h1 className='text-white font-bold  text-3xl text-center mb-6 hr-border'>I USE <span className='text-primary font-bold'>TOOLS</span></h1>

                    <br />


                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-6'>



                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><SiWindows /></div>
                            </div>
                        </div>

                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><DiGithubBadge /></div>
                            </div>
                        </div>

                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><SiVisualstudiocode /></div>
                            </div>
                        </div>

                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><SiHeroku /></div>
                            </div>
                        </div>

                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><SiNetlify /></div>
                            </div>
                        </div>

                        <div class="card card-style">
                            <div class="card-body items-center text-center text-white">
                                <div className='icon-style '><SiFirebase /></div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>

            <br /><br /><br /><br /><br />


        </div>
    );
};

export default Skill;