import React from 'react';
import baby from '../../../assets/images/treatment.png'

const Middle = () => {
    return (

        <div className="hero min-h-screen bg-base-200 px-12">
  <div className="hero-content flex-col lg:flex-row">
    <img src={baby} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <button className="btn btn-primary btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary">Get Started</button>
    </div>
  </div>
</div>
    //     <div className="hero min-h-screen px-12">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <img src={baby} className="max-w-sm rounded-lg shadow-2xl" />
    //       <div>
    //         <h1 className="text-5xl font-bold">your new smile Starts here</h1>
    //         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //         <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary ">Get Started</button>
    //       </div>
    //     </div>
    //   </div>
    );
};

export default Middle;