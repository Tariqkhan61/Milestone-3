import React from 'react';
import Image from 'next/image';

const VitaClassic = () => {
  return (
    <div className='flex justify-center items-center w-full h-[711px] bg-[#23856D] ml-[130px] relative'>
      <div className="flex flex-row w-full max-w-[1440px] h-full gap-[30px] items-center relative">
        <div className='w-[509px] h-full pt-[60px] gap-[30px] relative z-10'>
          <div className='w-full h-[160px] pt-[120px]'>
            <h5 className='font-sans font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#FFFFFF]'>SUMMER 2020</h5>
            <h1 className='font-bold leading-[80px] tracking-[0.2px] text-[58px] text-[#FFFFFF] mt-[40px]'>Vita Classic Product</h1>
            <h4 className='font-normal leading-[30px] mt-[40px] tracking-[0.2px] text-[#FFFFFF]'>We know how large objects will act, we know how small objects will act.</h4>
            <div className='flex gap-[10px] mt-[40px]'>
              <button className="w-[77px] h-[32px] md:text-base px-4 py-2 text-white border-none">$16.48</button>
              <button className='w-[184px] h-[52px] text-[14px] leading-[22px] tracking-[0.2px] text-center bg-[#2DC071] text-white font-extrabold'>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className='flex justify-end items-end w-[443px] h-full relative z-0'>
          <div className='relative w-[443px] h-[685px] bottom-[-1px] right-[-250px]'>
            <Image src='/boy6.png' alt='boy' layout='fill' objectFit='container' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VitaClassic;


