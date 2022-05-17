import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const BookingModel = ({date, treatment,setTreatment}) => {
    const {_id,name,slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const handleBooking  =  event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
    <form onSubmit={handleBooking } className='grid grid-cols-1 gap-5 justify-items-center'>
    <input type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
 {
     slots.map(slot => <option  value = {slot}>{slot}</option>)
 }

</select>
    <input type="text" name = 'name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
    <input type="email" name= "email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder='phone Number' class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModel;