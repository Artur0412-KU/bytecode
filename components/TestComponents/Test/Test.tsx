import React from 'react';
import BlackBox from '../../../public/icons/security/test/black.svg'
import GrayBox from '../../../public/icons/security/test/gray.svg'
import WhiteBox from '../../../public/icons/security/test/white.svg'
import Image from "next/image";


const Test = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[36px]'>Testing Approaches</h1>

            <div className='flex items-center justify-between max-sm:flex-col max-sm:gap-[24px]'>
                <div className='p-[24px] flex flex-col items-start gap-[15px] max-lg:p-[12px]'>
                    <Image src={BlackBox} alt={''}/>
                    <h2 className='text-[24px] font-semibold'>Black box</h2>
                    <p className='text-[#777777]'>Simulate an external attack by testing without prior knowledge of the internal workings of the
                        system, focusing solely on its external behavior.</p>
                </div>
                <div className='p-[24px] flex flex-col items-start gap-[15px] max-lg:p-[12px]'>
                    <Image src={GrayBox} alt={''}/>
                    <h2 className='text-[24px] font-semibold'>Gray box</h2>
                    <p className='text-[#777777]'>Combine the best of both worlds by testing with partial knowledge of the system's internals, allowing for a more targeted and efficient assessment.</p>
                </div>
                <div className='p-[24px] flex flex-col items-start gap-[15px] max-lg:p-[12px]'>
                    <Image src={WhiteBox} alt={''}/>
                    <h2 className='text-[24px] font-semibold'>White box</h2>
                    <p className='text-[#777777]'>Perform a thorough examination by testing with full access to the system’s internal architecture, ensuring every aspect is scrutinized for potential vulnerabilities.</p>
                </div>
            </div>
        </div>
    );
};

export default Test;