import React from 'react';
import Discover from "@/components/About/Discover/Discover";
import About from "@/components/About/AboutUs/About";
import Contact from "@/components/About/Contact/Contact";
import Sertification from '@/components/Sertifications/Sertification';

const Page = () => {
    return (
        <div>
            <Discover/>
            <About/>
            <Sertification/>
            <Contact/>
        </div>
    );
};

export default Page;