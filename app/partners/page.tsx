import React from 'react';
import Main from "@/components/Partners/Main/Main";
import Partnership from "@/components/Partners/Partnership/Partnership";
import Work from "@/components/Partners/Work/Work";
import Call from "@/components/Partners/Call/Call";

const Page = () => {
    return (
        <div>
            <Main/>
            <Partnership/>
            <Work/>
            <Call/>
        </div>
    );
};

export default Page;