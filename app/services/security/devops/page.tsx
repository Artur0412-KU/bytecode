import React from 'react';
import Main from "@/components/DevOps/Main/Main";
import Approach from "@/components/DevOps/Approach/Approach";
import Services from "@/components/DevOps/Services/Services";
import Work from "@/components/DevOps/Work/Work";
import Choose from "@/components/DevOps/Choose/Choose";
import Call from "@/components/DevOps/Call/Call";

const Page = () => {
    return (
        <div>
            <Main/>
            <Approach/>
            <Services/>
            <Work/>
            <Choose/>
            <Call/>
        </div>
    );
};

export default Page;