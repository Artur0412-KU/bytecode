import React from 'react';

const Button = ({text}: {text: string}) => {
    return (
        <a href='mailto:info@bytecode.team' className='bg-[#459BDD] transition hover:bg-[#73BDF5] px-[20px] py-[15px] text-white text-[16px] font-medium' >
            {text}
        </a>
    );
};

export default Button;