import React from 'react';
import {ICar} from "@/app/car/page";
import axios from "axios";
import {Metadata} from "next";

export const generateMetadata = async ({params: {id}}: IParam): Promise<Metadata> =>  {
    const car: ICar = await getCar(id)
    return {title: `${car.title}`}
}

const getCar = async(id: number) => {
    const response = await axios.get<ICar[]>(`https://car-data-dqrt.onrender.com/cars?id=${id}`)
    return response.data[0]
}

interface IParam {
    params: {
        id: number
    }
}
const CarItem: React.FC<IParam> = async ({params: {id}}) => {
    const car: ICar = await getCar(id)
    return (
        <div className={'w-[800px] bg-amber-200 car-item p-3 mx-auto border-primary border-2 rounded text-center'}>
            <h3 className={'text-[22px] font-bold'}>Name: {car.title}</h3>
            <div className={'mt-2.5 w-[500px] h-[285px] mx-auto'}>
                <img className={'w-full h-full object-cover'} src={car.image} alt=""/>
            </div>
            <p className={'mt-2.5 italic'}>Class: {car.class}</p>
            <p className={'mt-0.5'}>Start production: {car.start_production} year</p>
        </div>
    );
};

export default CarItem;