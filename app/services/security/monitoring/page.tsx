import React from 'react';
import Main from "@/components/Monitoring/Main/Main";
import Call from "@/components/Monitoring/Call/Call";
import Endpoint from "@/components/Monitoring/Endpoint/Endpoint";
import Cards from "@/components/Monitoring/Cards/Cards";
import List from "@/components/Monitoring/List/List";

const Page = () => {
    return (
        <div>
            <Main/>
            <Call/>
            <Endpoint/>
            <Cards/>
            <List/>
        </div>
    );
};

export default Page;