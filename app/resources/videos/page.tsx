import React from 'react';
import Banner from "@/components/Banner/Banner";
import Videos from "@/components/Videos/Videos";

const Page = () => {
    return (
        <div>
            <Banner title={'Videos & Webinars'} subtitle={'Download and learn more about our services and reports'} />
            <Videos/>
        </div>
    );
};

export default Page;