import React from 'react'
import Item from '../Item/Item';
import {Cupcake, Pizza , Kebab, Salmon , Doughnut} from "../../assets/images/Icon"
export const ListItem = () => {
    const categories = [
        {
            id:1,
            img:Cupcake,
            title:"Cupcake",
            count:"22 Items",
            bg:"#F0FEEB",
        },
        {
            id:2,
            img:Pizza,
            title:"Pizza",
            count:"25 Items",
            bg:"#2e6d17",   
        },
        {
            id:3,
            img:Kebab,
            title:"Kebab",
            count:"22 Items",
            bg:"#EAEEFA",  
        },
        {
            id:4,
            img:Salmon,
            title:"Salmon",
            count:"22 Items",
            bg:"#F9EEF3", 
        },
        {
            id:5,
            img:Doughnut,
            title:"Doughnut",
            count:"11 Items",
            bg:"blue"
        },
    ];

    return (
        <ul className='flex justify-between w-[1200px] mx-auto mt-10'>
            Salom
            {categories.map((item, index) => <Item key={item.id} bg={item.bg} count={item.count} title={item.title} Images={item.img}/>)}
        </ul>
    )
}