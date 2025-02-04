import React from 'react';
import Logo from '../../public/main/header_logo.svg'
import Image from "next/image";
import footer from "@/data/footer";
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-black text-white px-[64px] pt-[63px] pb-[33px] max-sm:px-[32px] flex flex-col gap-[34px]'>
            <div className='flex flex-row max-lg:flex-col items-start max-lg:items-center  gap-[198px] max-lg:gap-[50px]  border-b-[1px] border-b-[#3D3D3D]'>
                <div className='flex items-start justify-start flex-col gap-[48px]'>
                    <Image src={Logo} alt='logo' />
                    <a href='tel:+380685853586' className='text-[16px]'>+380685853586</a>
                </div>

                <div className='flex items-start justify-between w-full mb-[16px] max-lg:grid grid-cols-2 max-lg:gap-[20px] max-sm:gap-[40px] max-sm:grid-cols-1'>
                    {footer.map((item, index) => (
                        <div key={index} className="flex items-start flex-col text-[16px] gap-[22px] max-sm:items-center">
                            <h1 className="font-semibold">{item.name}</h1>
                            <ul className="flex items-start flex-col text-[16px] gap-[22px] max-sm:items-center">
                                {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="font-normal text-[#B1B1B1]">
                                        <Link href={listItem.link}>{listItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>

            <p className='text-[16px] text-[#B1B1B1]'>© 2024 ByteCode. All rights reserved.</p>
        </div>
    );
};

export default Footer;