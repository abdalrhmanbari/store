import React from 'react'

export default function ErrorPage({error}:{error:Error}) {
  return (
    <div className=' text-center  '>{error.message}</div>
  )
}
