import React from 'react';
import Ai from '../../../public/icons/solutions/ai.svg'
import Note from '../../../public/icons/solutions/note.svg'
import Shield from '../../../public/icons/solutions/shield-half-sharp-svgrepo-com 1.svg'
import Cloud from '../../../public/icons/solutions/cloud.svg'
import Penetration from '../../../public/icons/solutions/hacker 1.svg'
import Blockchain from '../../../public/icons/solutions/blockchain.svg'
import Image from "next/image";

const Solutions = () => {
    return (
        <div className='pt-[37px] pb-[69px] px-[64px] bg-[#F7F9FC] max-lg:px-[32px]'>
            <div className='flex flex-col text-center gap-[24px]'>
                <h1 className='text-[45px] font-semibold'>Specific solutions</h1>
                <p className='text-[16px] font-normal text-[#B1B1B1]'>We offer tailored security solutions designed to meet the unique needs of various industries and
                    sectors</p>
            </div>

            <div className='grid grid-cols-3 pt-[27px] max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <div
                    className='border-r-[1px] border-b-[1px] pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px]'>
                    <Image src={Penetration} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>Penetration testing</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>We identify and address vulnerabilities in web and mobile applications, network infrastructures, and cryptocurrency systems to ensure robust security.</p>
                    </div>
                </div>
                <div
                    className='border-r-[1px] border-b-[1px] pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-lg:border-r-0 max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px]'>
                    <Image src={Note} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>Security compliance</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>We help organizations achieve compliance with ISO 27001, SOC 1, SOC 2, and cryptocurrency regulations, ensuring adherence to industry standards and best practices.</p>
                    </div>
                </div>
                <div
                    className='border-b-[1px] pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-lg:border-r-[1px] max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px]'>
                    <Image src={Shield} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>Security process</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>Our services include vulnerability management, access control, continuous security monitoring, and endpoint protection to maintain a secure environment.</p>
                    </div>
                </div>
                <div
                    className='border-r-[1px] pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-lg:border-r-0 max-lg:border-b-[1px] max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px]'>
                    <Image src={Cloud} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>Cloud security</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>We safeguard data and applications in cloud environments through comprehensive security measures tailored to your cloud infrastructure.</p>
                    </div>
                </div>
                <div
                    className='border-r-[1px] pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px] max-sm:border-b-[1px]'>
                    <Image src={Ai} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>AI security</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>We implement security practices for AI systems to mitigate risks and ensure the safe deployment and operation of AI technologies.</p>
                    </div>
                </div>
                <div
                    className='pb-[52px] pr-[102px] pl-[55px] pt-[71px] border-dashed border-[#BBBBBB] flex flex-col items-start gap-[24px] max-sm:flex max-sm:items-center max-sm:border-r-0 max-sm:p-[32px]'>
                    <Image src={Blockchain} alt='AI'/>
                    <div className='flex flex-col items-start gap-[18px] max-sm:items-center max-sm:text-center'>
                        <h2 className='text-[24px] font-semibold'>Blockchain security</h2>
                        <p className='font-normal text-[16px] text-[#777777]'>Our specialized security services for blockchain technologies protect against threats and ensure the integrity and security of your blockchain systems.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Solutions;