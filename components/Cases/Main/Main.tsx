import React from 'react';
import Card from "@/components/Cases/Card/Card";
import casesData from '@/data/cases'

function Main() {
    return (
        <div className='bg-[#F7F9FC] p-[64px] grid grid-cols-2 gap-[44px] max-lg:gap-[18px] max-lg:p-[32px] max-lg:grid-cols-1'>
            {casesData.map((item) => (
                <Card key={item.id} id={item.id} image={item.image} title={item.title} text={item.text} list={item.list} conclusion={item.conclusion}/>
            ))}
        </div>
    );
}

export default Main;