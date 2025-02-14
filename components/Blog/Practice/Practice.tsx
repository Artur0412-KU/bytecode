import React from 'react';
import {practiceData} from "@/data/blog";
import Card from "@/components/Blog/Card/Card";

const Practice = () => {
    return (
        <div>
            <h1 className='text-[45px] font-semibold mb-[15px] max-lg:text-[32px]'>Practice</h1>
            <div className='grid grid-cols-2 gap-[44px] max-lg:flex max-lg:flex-col'>
                {practiceData.map((item => (
                    <Card key={item.id} item={item}/>
                )))}
            </div>
            </div>
            );
            };

            export default Practice;