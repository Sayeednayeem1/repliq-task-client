import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DetailsModal from '../../DetailsModal/DetailsModal';
import ProductList from './ProductList';

const ProductLists = () => {

    const [dataDetail, setDataDetail] = useState(null);

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
        <div className='max-w-[1440px] mx-auto mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductList
                        key={product._id}
                        product={product}
                        dataDetail={dataDetail}
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