import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const myaccount = () => {

    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

  return (
    <>
    <div>
    This is My account Page.  
    </div>
    </>
  )
}

export default myaccount
