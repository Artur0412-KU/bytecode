import React from 'react';
import Banner from "@/components/Banner/Banner";
import Main from "@/components/Cases/Main/Main";

function Page() {
    return (
        <div>
            <Banner title={'Cases'} subtitle={'Explore Our Success Stories and Client Achievements'}/>
            <Main/>
        </div>
    );
}

export default Page;