import React from 'react';
import Main from "@/components/TestComponents/Main/Main";
import Types from "@/components/TestComponents/Types/Types";
import Test from "@/components/TestComponents/Test/Test";
import Work from "@/components/TestComponents/Work/Work";
import Call from "@/components/TestComponents/Call/Call";

const Page = () => {
    return (
        <div>
            <Main/>
            <Types/>
            <Test/>
            <Work/>
            <Call/>
        </div>
    );
};

export default Page;