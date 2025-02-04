import React from 'react';
import Image from "next/image";
import Case from "@/types/case";

const Card = ({id, image, title, text, list, conclusion}: Case ) => {
    return (
        <div className='bg-white flex flex-col' key={id}>
            <div className='flex flex-row items-center w-full'>
                <h2 className='py-[46px] px-[29px] bg-[#459BDD] h-full w-full text-white font-semibold'>{title}</h2>
                <Image src={image} alt={title} className="max-w-full h-auto object-contain max-sm:max-w-[40%]" />
            </div>
            <div className='bg-white px-[29px] py-[15px] flex flex-col items-start justify-center'>
                <p>{text}</p>
                <ul className='list-disc pl-[45px]'>
                    {list.map(({id, item}) => (
                        <li key={id}>{item}</li> // ✅ Використовуємо key
                    ))}
                </ul>
                {conclusion && <p>{conclusion}</p>}
            </div>
        </div>
    );
};

export default Card;