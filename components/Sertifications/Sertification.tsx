import React from 'react';
import Image from "next/image";
import AndroidImg from '@/public/icons/certifications/android.png'
import AseImg from '@/public/icons/certifications/ase.png'
import AtxImg from '@/public/icons/certifications/atx.png'
import CehImg from '@/public/icons/certifications/ceh.png'
import CiscoImg from '@/public/icons/certifications/cisco.png'
import EmartImg from '@/public/icons/certifications/emart.png'
import OneTrust from '@/public/icons/certifications/onetrust.png'
import OneTrust2 from '@/public/icons/certifications/onetrust2.png'
import OneTrust3 from '@/public/icons/certifications/onetrust3.png'
import Osce from '@/public/icons/certifications/osce.png'
import Oscp from '@/public/icons/certifications/oscp.png'
import SA from '@/public/icons/certifications/sa.png'
import Tmcp from '@/public/icons/certifications/tmcp.png'
import BurpSuite from '@/public/icons/certifications/Burp-suite.jpg'

const Sertification = () => {
    return (
        <div className='p-[64px] max-lg:p-[32px]'>
            <h1 className='text-[45px] max-lg:text-[32px] font-semibold text-center mb-[32px]'>Certifications</h1>
            <div className='grid grid-cols-4 items-center gap-[24px] place-items-center max-lg:grid-cols-3 max-sm:grid-cols-2'>
                <Image src={AndroidImg} alt={''}/>
                <Image src={AseImg} alt={''}/>
                <Image src={AtxImg} alt={''}/>
                <Image src={CehImg} alt={''}/>
                <Image src={CiscoImg} alt={''}/>
                <Image src={EmartImg} alt={''}/>
                <Image src={OneTrust} alt={''}/>
                <Image src={OneTrust2} alt={''}/>
                <Image src={OneTrust3} alt={''}/>
                <Image src={Osce} alt={''}/>
                <Image src={Oscp} alt={''}/>
                <Image src={SA} alt={''}/>
                <Image src={Tmcp} alt={''}/>
                <Image src={BurpSuite} alt={''}/>
            </div>
        </div>
    );
};

export default Sertification;