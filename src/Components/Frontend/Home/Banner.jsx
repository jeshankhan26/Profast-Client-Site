import React from 'react';
import banner from '../../../../public/assets/banner/banner1.png'

const Banner = () => {
    return (
        <div className='bg-[#EAECED] pb-5'>
            <img src={banner} alt="" className='lg:px-20 px-5 pt-5'  />
            
        </div>
    );
};

export default Banner;