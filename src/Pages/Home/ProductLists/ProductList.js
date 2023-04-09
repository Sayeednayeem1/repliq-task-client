import React from 'react';

const ProductList = ({ product, setDataDetail, addToCart }) => {
    const { title, img, price, description, facility } = product;
    return (
        <div>
            <div className='h-[450px] p-8 rounded-xl shadow-xl'>
                <img src={img} className='h-60 rounded-xl' alt="" />
                <h1 className='mt-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{title}</h1>
                <p className='mt-2'>Price: {price}$</p>
                <p className='mt-2'>{description}</p>
                <div className='mt-2'>
                    <label htmlFor="my-modal-3" className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none mr-2" onClick={() => setDataDetail(product)}>Details</label>
                    <button className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;