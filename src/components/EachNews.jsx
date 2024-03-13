

// import React from "react";

// function EachNews({image, data}) {
//   return (
//     <div>
//       <div className='grid-element'>
//         <img
//           className='w-[15rem]'
//           src={image}
//           style={{padding:'10px'}}
//         />
//         <p className='w:full  text-xs lg:text-lg'>
//           {data}
//         </p>
//         <div className='grid-button p-2 rounded-lg flex flex-row items-center border-0 w-fit'>
//           <div className='svg'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width={12}
//               height={12}
//               viewBox='0 0 24 24'
//             >
//               <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
//             </svg>
//           </div>
//           <button className='ml-2 bg-blue-600 text-white text-xs lg:text-xl p-2 border-0 rounded-r-xl'>
//             <p>read more</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EachNews;

import React, { useState } from "react";

function EachNews({ image, data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className='grid-element'>
        <img
          className='w-[15rem]'
          src={image}
          style={{ padding: '10px' }}
        />
        <p style={{fontSize:'0.8rem'}}className='w:full text-xs lg:text-lg'>
          {data}
        </p>
        {/* <div className='grid-button p-2 rounded-lg flex flex-row items-center border-0 w-fit'> */}
          {/* <div className='svg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={12}
              height={12}
              viewBox='0 0 24 24'
            >
              <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
            </svg>
          </div> */}
          {/* {showMore && (
            <span style={{ fontSize: '0.7rem', marginLeft: '0rem', lineHeight: '0.8rem' }} className='text-xs lg:text-lg'>
              The Catholic Church opens its door in the.
            </span>
          )} */}
          {/* <button
            style={{ width: '100px', height: '30px', fontSize: '0.5rem', fontWeight: 'bold' }}
            className='ml-2 bg-blue-600 text-white text-xs lg:text-xl p-2 border-0 rounded-r-xl'
            onClick={() => setShowMore(!showMore)}
          >
            <p style={{}}>{showMore ? 'Read less' : 'Read more'}</p>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default EachNews;
