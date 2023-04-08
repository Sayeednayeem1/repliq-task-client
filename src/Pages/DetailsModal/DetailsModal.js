import React from 'react';

const DetailsModal = ({ dataDetail }) => {
    const { title, img, price, description, facility } = dataDetail;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 btn-warning ">✕</label>
                    <img src={img} className='rounded-xl' alt="" />
                    <h1 className='mt-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{title}</h1>
                    <p className='mt-2'>Price: {price}$</p>
                    <p className='mt-2'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;