import React from 'react'

const Item = ({bg, Images , title , count}) => {
    return (
        <li data-aos="zoom-in" data-aos-duration="1000" style={{ backgroundColor: bg }} className={`w-[230px] rounded-lg py-[30px] text-center`}>
            {/* <img className='mx-auto mb-4 ' src={img} alt="Category Img" width={47} height={52} /> */}
            <div className='flex justify-center mb-5'><Images/></div>
            <h2 className='mb-1 text-white'>{title}</h2>
            <p className='text-white'>{count}</p>
        </li>
    )
}

export default Item