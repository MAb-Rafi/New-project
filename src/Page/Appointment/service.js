 import React from 'react';
 
 const Service = ({service}) => {
     const {name,slots} = service;
     return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>
              {
                  slots.length >0 ?
                  <span>{slots[0]}aho batiza</span>
                  :
                  <span className='text-red-500'>No slots, Try Another Day </span>
              }
          </p>
          <p>{slots.length } space Available</p>
          <div class="card-actions justify-end">
            <button disabled= {slots.length ===0 } class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     );
 };
 
 export default Service;