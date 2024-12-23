import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const MyAppointment = () => {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p>My Appointments</p>
      
      <div>
         {doctors.slice(0,4).map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'  key={index}>
           <div>
             <img className='w-32 bg-indigo-50 rounded-lg' src={item.image} alt="" />
           </div>
           <div className='flex-1 text-sm text-zinc-600'>
            <p className='text-neutral-800 font-semibold'>{item.name}</p>
            <p >{item.speciality}</p>
            <p className='text-zinc-700 font-medium mt-1'>Address:</p>
            <p className='text-xs'>{item.address.streetName}</p>
            <p className='text-xs'>{item.address.HouseName}</p>
            <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'> Date & Time :</span> 11,Sep,2024 | 8.30 PM</p>
           </div>
           <div> </div>
           <div className='flex flex-col gap-2 justify-end'>
            <button className='tetx-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all durtion-300'>Pay Online</button>
            <button className='tetx-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all durtion-300 '> Cancel Appointments</button>
           </div>
          </div>
         ))}
     </div>
    </div>
    // <> my Appointments</>
  )
}

export default MyAppointment

// import React, { useContext } from 'react';
// import { AppContext } from '../Context/AppContext';

// const MyAppointment = () => {
//   const { doctors } = useContext(AppContext);

//   return (
//     <div>
//       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>

//       <div>
//         {doctors && doctors.slice(0, 2).map((item, index) => (
//           <div key={index}>
//             <div>
//               {item.image ? <img src={item.image} alt={item.name} /> : <p>No Image Available</p>}
//             </div>
//             <div>
//               <p>{item.name}</p>
//               <p>{item.speciality}</p>
//               <p>Address:</p>
//               {item.address ? (
//                 <>
//                   <p>{item.address.streetName || "Street not available"}</p>
//                   <p>{item.address.HouseName || "House name not available"}</p>
//                 </>
//               ) : (
//                 <p>Address not available</p>
//               )}
//               <p><span> Date & Time :</span> 11, Sep, 2024 | 8.30 PM</p>
//             </div>
//             <div> </div>
//             <div>
//               <button>Pay Online</button>
//               <button>Cancel Appointment</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointment;
