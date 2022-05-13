import React from 'react';
import PrimaryButton from './Shared/PrimaryButton';
import appoint from '../assets/images/appointment.png'

const LogInForm = () => {
    return (
        <section style={
            {
                background: `url(${appoint})`

            }
        }>
            <div className='flex justify-center items-center my-28 '>


                <div className='grid grid-cols-2S md:grid-cols-1 lg:grid-cols-1 gap-5'>
                    <h1 className='text-xl text-primary font-bold'>Contact us </h1>
                    <h2 className="text-3xl text-white" > Stay Connect with us</h2>


                    <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />



                    <input type="text" placeholder="Message" className="input input-bordered input-lg w-full max-w-xs" />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default LogInForm; 