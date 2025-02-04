import React from 'react';
import Discover from "@/components/About/Discover/Discover";
import About from "@/components/About/AboutUs/About";
import Contact from "@/components/About/Contact/Contact";

const Page = () => {
    return (
        <div>
            <Discover/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Page;