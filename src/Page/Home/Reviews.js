import React from 'react';

const Reviews = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">

                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                    Winson Herry
                    California</p>
                <div class='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                        <div>
                            <h4 className="text-xl">{review.name}</h4>
                            <p>
                                {review.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;