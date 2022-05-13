import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Afnan',
            review:'',
            location:"Canada",
            img: people1

        },
        {
            _id:2,
            name:'Nafis',
            review:'',
            location:"Toronto",
            img: people2

        },
        {
            _id:3,
            name:'Adhora',
            location:"Halifex",
            review:'',
            img: people3

        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-3xl'>What our patients say !!</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews
                    key={review._id}
                    review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;