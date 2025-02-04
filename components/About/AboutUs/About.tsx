import React from 'react';

const About = () => {
    return (
        <div className='flex flex-row justify-between p-[64px] gap-[99px] max-lg:p-[32px] max-lg:gap-[30px] max-lg:flex-col'>
            <div className='flex flex-col items-start w-[70%] gap-[12px] max-lg:w-full'>
                <h1 className='text-[50px] font-semibold max-lg:text-[35px]'>Who <span className='text-[#459BDD]'>we</span> are</h1>
                <p className='text-[#777777]'>
                    ByteCode was founded in 2018 by a group of former specialists from CERT-UA and Hacken.io, bringing
                    together years of experience in cybersecurity and a deep understanding of emerging threats. Our team
                    is
                    composed of industry veterans who have worked on the front lines of cyber defense, handling some of
                    the
                    most complex security challenges in both public and private sectors.
                </p>
                <p className='text-[#777777]'>
                    Driven by a passion for securing digital environments, we have built ByteCode into a leading
                    provider of
                    cybersecurity services, with a focus on comprehensive auditing, penetration testing, and robust
                    security
                    solutions. Our mission is to help organizations navigate the ever-evolving threat landscape,
                    ensuring
                    that they remain secure, compliant, and resilient against cyberattacks.
                </p>

            </div>

            <div className='grid grid-cols-2'>
                <div className='client-block-black'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>50+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Protected Clients</p>
                </div>
                <div className='client-block-blue'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>1,000+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Vulnerabilities Detected</p>
                </div>
                <div className='client-block-blue'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>6+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Years of expertise</p>
                </div>
                <div className='client-block-black'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>10+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Partners</p>
                </div>
            </div>
        </div>
    );
};

export default About;