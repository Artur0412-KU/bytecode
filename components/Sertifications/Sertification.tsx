import React from 'react';
import Image from "next/image";
import AndroidImg from '@/public/icons/certifications/android.png'
import AseImg from '@/public/icons/certifications/ase.png'
import AtxImg from '@/public/icons/certifications/atx.png'
import CehImg from '@/public/icons/certifications/ceh.png'
import CiscoImg from '@/public/icons/certifications/cisco.png'
import EmartImg from '@/public/icons/certifications/emart.png'
import OneTrsutImg1 from '@/public/icons/certifications/onetrust.png'
import OneTrsutImg2 from '@/public/icons/certifications/onetrust2.png'
import OneTrsutImg3 from '@/public/icons/certifications/onetrust3.png'
import OnseImg from '@/public/icons/certifications/osce.png'
import OscpImg from '@/public/icons/certifications/oscp.png'
import SaImg from '@/public/icons/certifications/sa.png'
import TmcpImg from '@/public/icons/certifications/tmcp.png'

const Sertification = () => {
    return (
        <div className='p-[64px] max-lg:p-[32px]'>
            <h1 className='text-[45px] max-lg:text-[32px] font-semibold'>Certifications</h1>
            <div>
                <Image src={AndroidImg} alt={''}/>
                <Image src={AseImg} alt={''}/>
                <Image src={AtxImg} alt={''}/>
                <Image src={CehImg} alt={''}/>
                <Image src={CiscoImg} alt={''}/>
                <Image src={EmartImg} alt={''}/>
                <Image src={AndroidImg} alt={''}/>
            </div>
        </div>
    );
};

export default Sertification;