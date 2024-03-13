

// import React from "react";
// import img from "../assets/img-header-main.png";
// import NowPlaying from "./NowPlaying";
// function Hero() {
//   return (
//     <div className='w-full my-5 flex flex-wrap '>
//       <div  className='w-full lg:w-2/3 h-full pr-5'>
//         <img style={{height:'350px'}} src={img} className='w-full h-[20rem]' alt='' />
//         <h1 style={{top:'-7rem'}}
//           className={`relative bottom-14 left-5  text-md lg:text-2xl text-blue-400`}
//         >
//           <p style={{color:'#60A5FA',fontSize:'1.2rem',fontWeight:'bold',marginTop:'-1.5rem'}}>No one ever promised you an easy life.</p>
//           <br/>
//           <span style={{color:'white',marginTop:'-2rem',position:'absolute',fontSize:'15px'}}>But there's one radio station that promise you easy listening.But there's one radio station that does promise you easy listening.But there's one radio station that does promise you easy listening.<button style={{color:'#60A5FA',fontWeight:'bold',marginLeft:'37rem'}}>View all</button></span>
//         </h1>
//       </div>
      

//       <NowPlaying />
//     </div>
//   );
// }
// export default Hero;

import React, { useState } from "react";
import img from "../assets/img-header-main.png";
import NowPlaying from "./NowPlaying";

function Hero() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=' my-5 flex flex-wrap 'id="hero">
      <div className=' lg:w-2/3 h-full pr-5'>
        <img style={{ height: '350px' }} src={img} className=' h-[20rem]' alt='' />
        <h1
          style={{ top: '-7rem' }}
          className={`relative bottom-14 left-5 text-md lg:text-2xl text-blue-400`}
        >
          <p style={{ color: '#60A5FA', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '-1.5rem' }}>
            No one ever promised you an easy life.
          </p>
          <br />
          <span style={{ color: 'white', marginTop: '-2rem', position: 'absolute', fontSize: '16px' }}>
            But there's one radio station that promises you easy listening.But there's one radio station that does promise you easy listening.
            {expanded ? (
              <>
                <span>
                This station has a wide range of music, from classic hits to modern tunes. Whether you're into pop, rock, hip-hop, or jazz, we've got you covered.
               
                </span>
                <button style={{ color: '#60A5FA', fontWeight: 'bold' }} onClick={toggleExpanded}>
                  Read Less
                </button>
              </>
            ) : (
              <button style={{ color: '#60A5FA', fontWeight: 'bold' }} onClick={toggleExpanded}>
                Read More
              </button>
            )}
          </span>
        </h1>
      </div>
      <NowPlaying />
    </div>
  );
}

export default Hero;
