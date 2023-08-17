import React from 'react';
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Not found',
}

const notFound = () => {
    return (
        <div className={'flex items-center justify-center h-[500px]'} >
            <Image src={'/404.png'} alt={''} width={500} height={500}/>
        </div>
    );
};

export default notFound;