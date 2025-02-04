import React from 'react';
import Mobile from '@/public/main/books/mobile-security.svg'
import Web from '@/public/main/books/web-security.svg'
import Network from '@/public/main/books/network-security.svg'
import Image from "next/image";
import Link from "next/link";

const Main = () => {
    return (
        <div className='p-[64px] flex flex-col gap-[44px] items-center justify-center max-lg:p-[32px] max-lg:gap-[24px]'>
            <h1 className='text-[34px] font-semibold'>Penetration Testing</h1>

            <div className='flex flex-row gap-[69px] max-lg:gap-[32px] max-sm:flex-col'>
                <div className='flex flex-col items-start gap-[25px]'>
                    <Link href='https://drive.google.com/file/d/11yVQwC6d7ABfKDm2oubNWFtJE5wjdI9E/view' target={'_blank'} className={'hover:scale-125 transition'}>
                        <Image src={Mobile} alt={''}/>
                    </Link>
                    <h2 className='text-[18px] font-semibold text-start pl-[10px]'>Mobile Application Security Assessment </h2>
                </div>
                <div className='flex flex-col items-start gap-[25px]'>
                    <Link href='https://drive.google.com/file/d/1wBOAHWBpsfOxG6waEs5Qiai5ut33BvkY/view' target={'_blank'} className={'hover:scale-125 transition'}>
                        <Image src={Web} alt={''}/>
                    </Link>

                    <h2 className='text-[18px] font-semibold text-start pl-[10px]'>Web Application Security Assessment  </h2>
                </div>
                <div className='flex flex-col items-start gap-[25px]'>
                    <Link href='https://drive.google.com/file/d/1KI3o3dVNCDIqDcRH1vt0fMxXdO44sWGU/view' target={'_blank'  } className={'hover:scale-125 transition'}>
                        <Image src={Network} alt={''}/>
                    </Link>
                    <h2 className='text-[18px] font-semibold text-start pl-[10px]'>Network Security Assessment   </h2>
                </div>
            </div>
        </div>
    );
};

export default Main;