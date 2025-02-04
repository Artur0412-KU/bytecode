import React from 'react';
import Main from "@/components/Response/Main/Main";
import Services from "@/components/Response/Services/Services";
import Request from "@/components/Response/Request/Request";

const Page = () => {
    return (
        <div>
            <Main/>
            <Services/>
            <Request/>
        </div>
    );
};

export default Page;