import React from 'react';
import Banner from "@/components/Banner/Banner";
import Main from "@/components/Reports/Main/Main";

function Page() {
    return (
        <div>
            <Banner title={'Data Sheets & Reports'} subtitle={'Download and learn more about our services and reports'} />
            <Main/>
        </div>
    );
}

export default Page;