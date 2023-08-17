import React from 'react';
import axios from "axios";
import CarItem from "@/app/car/[id]/page";
import Link from "next/link";
import {Metadata} from "next";

export interface ICar {
    id: number
    image: string
    title: string
    start_production: string
    class: string
}

const getCars = async () => {
    const response = await axios.get<ICar[]>('https://car-data-dqrt.onrender.com/cars')
    return response.data
}

export const metadata: Metadata = {
    title: 'Cars canpmtalog'
}

const CarPage = async () => {
    const response = await getCars()

    return (
        <div className={'container'}>
            <h2 className={'text-[34px] font-bold'}>Car catalog</h2>
            <div className={'car-items flex flex-wrap justify-between items-start gap-y-6 mt-4'}>
                {response.map((car: ICar, index: number) => {
                    return (
                        <Link key={car.id} href={`car/${car.id}`} className={'w-[32%] bg-amber-200 car-item p-3 border-2 border-primary rounded cursor-pointer'}>
                            <h3 className={'text-[22px] font-bold'}>Name: {car.title}</h3>
                            <div className={'mt-2.5 w-full h-[210px]'}>
                                <img className={'w-full h-full object-cover'} src={car.image} alt=""/>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default CarPage;