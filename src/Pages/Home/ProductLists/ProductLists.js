import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductList from './ProductList';

const ProductLists = () => {

    const url = 'products.json';
    console.log(url);
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => <ProductList
                    key={product._id}
                    product={product}
                ></ProductList>)
            }
        </div>
    );
};

export default ProductLists;