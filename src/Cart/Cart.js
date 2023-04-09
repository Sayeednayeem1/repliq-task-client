import React from 'react';

const Cart = ({ itemCount }) => {
    return (
        <div className="relative inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21h6a2 2 0 002-2v-7h3l-3-7H9L6 7h3v7a2 2 0 002 2z" />
            </svg>
            {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{itemCount}</span>
            )}
        </div>
    );
};

export default Cart;
