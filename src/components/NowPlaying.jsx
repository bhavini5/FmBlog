import React from "react";
import { MoveRight } from "lucide-react";
import player from "../assets/img-player.png";
import song from "../assets/Group 7.png";
import buttons from "../assets/Buttons.png";

function NowPlaying({ isMobile }) {
  return (
    <div  className=' h-full lg:w-1/3'>
      <div style={{backgroundColor:'#0087c2',}}
        className={`bg-blue-400  rounded-lg text-white inline-block text-center "bottom-[9rem]"
        }`}
      >
        <div  className='flex m-2 items-center'>
          <MoveRight color='blue' />
          <h1 className='text-2xl mx-2 font-bold'>Now Playing</h1>
        </div>
        <div className='bg-white h-full  rounded-lg text-black'>
          <div className='p-4 text-left'>
            <div className='flex'>
              <img src={player} alt='' />
              <div className='flex flex-col ml-10'>
                <h2 className='text-xl font-bold'>Artist Name</h2>
                <h3 className='text-lg'>
                  Music album subheading title
                </h3>
              </div>
            </div>
            <div className='mt-4'>
              <h4 className='text-base font-bold'>Playing:</h4>
              <img className='' src={song} alt='' />
            </div>
            <div className='mt-4 flex  w-fit border-4  rounded-md mx-auto p-2'>
              <h4 className='text-base font-bold text-blue-400'>
                Previously Played:
              </h4>
              <h4 className='text-base'>Song name</h4>
            </div>
            <img
              src={buttons}
              className=' mt-5'
              alt=''
              srcset=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NowPlaying;
