import React from 'react';
import Image from "next/image";
import Percent from '../../../public/icons/security/percent.svg'
import Shield from '../../../public/icons/security/shield.svg'
import Law from '../../../public/icons/security/law.svg'
import Note from '../../../public/icons/security/note.svg'

const Types = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px] bg-[#F7F9FC]'>
            <h1 className='text-[45px] font-semibold max-sm:text-[30px]'>Types of Security Testing</h1>
            <div className='grid grid-cols-3 gap-[38px] justify-items-center self-center justify-center content-center max-sm:flex max-sm:flex-col'>
                <div
                    className='border-[#777777] bg-[#fff] border-[1px] rounded-[10px] p-[24px] flex flex-col items-start gap-[15px]'>
                    <Image src={Percent} alt={''}/>
                    <h3 className='text-[24px] font-semibold'>Web Application Testing</h3>
                    <p className='text-[#777777]'>Evaluate the security of your web applications by identifying and
                        addressing vulnerabilities that could be exploited by attackers.</p>
                </div>
                <div
                    className='border-[#777777] bg-[#fff] border-[1px] rounded-[10px] p-[24px] flex flex-col items-start gap-[15px]'>
                    <Image src={Shield} alt={''}/>
                    <h3 className='text-[24px] font-semibold'>Mobile Application Testing</h3>
                    <p className='text-[#777777]'>Ensure the safety of your mobile apps across various platforms by uncovering security flaws and safeguarding sensitive data.</p>
                </div>
                <div
                    className=' border-[#777777] bg-[#fff] border-[1px] rounded-[10px] p-[24px] flex flex-col items-start gap-[15px]'>
                    <Image src={Law} alt={''}/>
                    <h3 className='text-[24px] font-semibold'>Infrastructure Testing</h3>
                    <p className='text-[#777777]'>Assess the resilience of your network and system infrastructure against potential intrusions, ensuring strong defenses at every level.</p>
                </div>
                <div className="col-span-3 flex justify-center gap-[38px] w-[66%] max-sm:flex max-sm:flex-col max-sm:w-full">
                    <div
                        className=' border-[#777777] bg-[#fff] border-[1px] rounded-[10px] p-[24px] flex flex-col items-start gap-[15px]'>
                        <Image src={Note} alt={''}/>
                        <h3 className='text-[24px] font-semibold'>Sociotech</h3>
                        <p className='text-[#777777]'>Analyze the human factors and social engineering vulnerabilities within your organization to prevent manipulation and insider threats.</p>
                    </div>
                    <div
                        className=' border-[#777777] bg-[#fff] border-[1px] rounded-[10px] p-[24px] flex flex-col items-start gap-[15px]'>
                        <Image src={Note} alt={''}/>
                        <h3 className='text-[24px] font-semibold'>Smart-Contract Auditing</h3>
                        <p className='text-[#777777]'>Review and audit smart contracts in blockchain systems to detect and fix potential security issues, ensuring the integrity and reliability of your decentralized applications.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Types;