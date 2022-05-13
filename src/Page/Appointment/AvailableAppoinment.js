import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './service';

const AvailableAppoinment = ({date}) => {
    const [services,setSercices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setSercices(data));
    },[])
    return (
        <div>
           <h4 className='text-xl text-secondary text-center'> Available appointments on {format(date,'PP')}</h4>  
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   services.map(service => <Service
                   key={service._id}
                   service = {service}
                   ></Service>)
               }
               </div>            
        </div>
    );
};

export default AvailableAppoinment;