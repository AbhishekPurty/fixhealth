// "use client";

// import React from 'react'
// import { useForm } from 'react-hook-form';

// interface Props{
//     name: String;
//     phoneno: String;
// }

// const Name = () => {

//     const {register, handleSubmit } =  useForm <Props>();

//     function onHandleFormSubmit(data:Props) {
//         console.log({data});
//     }

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
//         <div className="flex flex-col gap-1">
//             <label htmlFor="name">Name</label>
//             <input
//                 id="name"
//                 type="text"
//                 placeholder="Name"
//                 className="h-11 px-4 border rounded-md"
//                 {...register("name")}
//             />
//             <label htmlFor="phoneno">Phone No.</label>
//             <input
//                 id="phoneno."
//                 type="text"
//                 placeholder="Phone No."
//                 className="h-11 px-4 border rounded-md"
//                 {...register("phoneno")}
//             />
//         </div>
//         <div className="flex justify-end">
//             <button className="h-11 px-6 bg-black rounded-md">Next</button>
//         </div>
//     </form>
//   )
// }

// export default Name
