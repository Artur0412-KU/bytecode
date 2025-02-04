import React from 'react';
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";

function Page() {
    return (
        <div>
            <Banner title={'Blog'} subtitle={'Download and learn more about our services and reports'} />
            <Blog/>
        </div>
    );
}

export default Page;