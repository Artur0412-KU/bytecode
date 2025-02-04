import React from 'react';
import Laboratory from "@/components/Blog/Laboratory/Laboratory";
import Practice from "@/components/Blog/Practice/Practice";

const Blog = () => {
    return (
        <div className='p-[64px] max-lg:p-[32px] bg-[#F7F9FC] flex flex-col gap-[44px]'>
            <Laboratory/>
            <Practice/>
        </div>
    );
};

export default Blog;