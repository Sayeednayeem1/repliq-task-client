import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DetailsModal from '../../DetailsModal/DetailsModal';
import ProductList from './ProductList';

const ProductLists = () => {

    const [dataDetail, setDataDetail] = useState(null);

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('products.json');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <div className='max-w-[1440px] mx-auto mt-14 mb-16'>
            <div className='mb-10'>
                <h5 className='text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]'>Services We provide</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductList
                        key={product._id}
                        product={product}
                        dataDetail={dataDetail}
                        addToCart={addToCart}
                        setDataDetail={setDataDetail}
                    ></ProductList>)
                }
            </div>
            <div>
                {
                    dataDetail &&
                    <DetailsModal
                        dataDetail={dataDetail}
                    />
                }
            </div>
        </div>
    );
};

export default ProductLists;