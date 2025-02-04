import React from 'react';

const Button = ({text}: {text: string}) => {
    return (
        <button className='bg-[#459BDD] transition hover:bg-[#73BDF5] px-[20px] py-[15px] text-white text-[16px] font-medium'>
            {text}
        </button>
    );
};

export default Button;