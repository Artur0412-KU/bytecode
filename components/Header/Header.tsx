"use client"
import React, {useRef, useState} from 'react';
import Logo from '../../public/main/header_logo.svg'
import Image from "next/image";
import BurgerClose from '../../public/icons/close.svg'
import BurgerMenu from '../../public/icons/burger-menu.svg'
import navItems from "@/data/nav";
import Link from "next/link";

const Header = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const detailsRef=  useRef<Array<(HTMLDetailsElement | null)[]>>([])

    const handleIndexChange = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    console.log(activeIndex)
    return (
        <div
            className="navbar bg-base-100 bg-black flex items-center justify-between py-[20px] px-[65px]  max-sm:px-[40px] border-b-[1px] border-b-[#333436]">
            <div>
                <Link href={'/'}>
                    <Image src={Logo} alt='logo'/>
                </Link>
            </div>
            <div className="flex-none max-lg:hidden">
                <ul className='text-white font-Inter text-[16px] menu menu-horizontal px-1 flex items-center justify-between gap-[50px]'>
                    {navItems.map((item, index) => (
                        <li key={item.id}>
                            <details
                                ref={(e) => {
                                    // @ts-ignore
                                    detailsRef.current[index] = e;
                                }}
                                open={activeIndex === index}
                            >
                                <summary className='hover:text-[#459BDD]' onClick={(e) => {
                                    e.preventDefault()
                                    handleIndexChange(index)
                                }}>{item.name}</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 bg-black w-[240px] mt-[10px]">
                                    {item.list.map((subItem, subIndex) => (
                                        <li key={subIndex} className="whitespace-nowrap">
                                            <a href={subItem.link}
                                               className="hover:text-[#459BDD]">{subItem.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                className='border-[1px] border-white text-[16px] px-[15px] py-[10px] font-Inter text-white hover:bg-[#459BDD] hover:border-[#459BDD] transition max-lg:hidden'>Request
                a Quote
            </button>

            <div className={`hidden max-lg:drawer max-lg:drawer-end max-lg:justify-end`}>
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content w-[32px]">
                    <label htmlFor="my-drawer-4" className="drawer-button">
                        <Image src={BurgerMenu} alt={''}/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-white min-h-full w-80 p-4 gap-[30px]">
                        <li className="flex justify-end">
                            <label htmlFor="my-drawer-4">
                                <Image src={BurgerClose} alt="close" className='w-[32px]'/>
                            </label>
                        </li>
                        {navItems.map((item, index) => (
                            <li key={item.id}>
                                <details
                                    ref={(e) => {
                                        // @ts-ignore
                                        detailsRef.current[index] = e;
                                    }}
                                    open={activeIndex === index}
                                >
                                    <summary className='hover:text-[#459BDD]' onClick={(e) => {
                                        e.preventDefault()
                                        handleIndexChange(index)
                                    }}>{item.name}</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2 bg-black">
                                        {item.list.map((subItem, index) => (
                                            <li key={index}>
                                                <a href={subItem.link}
                                                   className="hover:text-[#459BDD]">{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ))}
                        <li>
                            <button
                                className='border-[1px] border-white text-[16px] px-[15px] py-[10px] font-Inter text-white hover:bg-[#459BDD] hover:border-[#459BDD] hover:text-white transition w-[55%] text-center'>Request
                                a Quote
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header