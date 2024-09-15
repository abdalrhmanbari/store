import CustomButton from '@/app/Components/button/custom-button';
import CardId from '@/app/Components/component/card-id';
import PrevIcon from '@/app/Components/icon/prev-icon';
import { women } from '@/app/context/context';
import Link from 'next/link';

import React from 'react'

export default async function womenId({params}:{params:any}) {
    const Women= await women;
    const id= params.id;
    const products= Women.find((product) => product.id == id) 
  return (
        <div className='my-[4rem]'>
            <CardId image={`${products?.image}`} title={`${products?.title}`} price={products?.price} location='women' />
        </div>
  )
}
