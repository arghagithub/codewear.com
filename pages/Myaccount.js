import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Myaccount = () => {
  const router=useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('logintoken')){
      router.push('/Login');
    }
  })
  return (
    <div>
      Myaccount
    </div>
  )
}

export default Myaccount
