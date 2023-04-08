import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ProductLists = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('products.json')
            .then(res => res.json())
    })
    return (
        <div>
            <h1>products are here</h1>
        </div>
    );
};

export default ProductLists;