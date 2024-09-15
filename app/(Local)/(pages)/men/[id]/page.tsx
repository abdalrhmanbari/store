import CardId from '@/app/Components/component/card-id'
import PrevIcon from '@/app/Components/icon/prev-icon';
import { men } from '@/app/context/context'
import Link from 'next/link';
import React from 'react'

export default async function MenId({params}:{params:any}) {
    const Men= await men;
    const id= params.id
    const products= Men.find((product)=> product.id == id)
  return (
    <div className=' my-[4rem]'>
        <CardId image={`${products?.image}`} title={`${products?.title}`} price={products?.price} location='men' />
    </div>
  )
}
