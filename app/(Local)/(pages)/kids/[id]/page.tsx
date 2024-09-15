import CardId from '@/app/Components/component/card-id';
import PrevIcon from '@/app/Components/icon/prev-icon';
import { kids } from '@/app/context/context'
import Link from 'next/link';
import React from 'react'

export default async function KidsId({params}:{params:any}) {
    const Kids= await kids
    const id= params.id;
    const products= Kids.find((product)=> product.id == id)
  return (
    <div className=' my-[4rem]'>
    <CardId image={`${products?.image}`} title={`${products?.title}`} price={products?.price} location='kids'/>
    </div>
  )
}
