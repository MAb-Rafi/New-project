import React from 'react';
import Footer from '../../Footer';
import AppointmentBanner from '../Appointment/AppointmentBanner';
import Login from '../Login/Login';
import LogInForm from '../LogInForm';
import Banner from './Banner/Banner';
import MakeAppointment from './Banner/MakeAppointment';
import Middle from './Banner/Middle';
import Info from './info';
import Services from './Services';
import Testimonials from './Testimonials';
                       

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Middle></Middle>
         <MakeAppointment></MakeAppointment>
         <Testimonials></Testimonials>
         <LogInForm></LogInForm>
         <Footer></Footer>
       
        </div>
    );
};

export default Home;