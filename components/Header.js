import React from 'react'
import Image from 'next/image'

import menuIcon from '/public/icon/menu.svg'
import userPng from '/public/img/man.png'


const Header = () => {
  return (
    <div className='w-full px-4 py-3 bg-white drop-shadow-sm flex items-center justify-between'>
        <div className='flex items-center'>
            <button className='flex items-center'>
                <Image src={menuIcon} alt="menu" width="26px" height="26px" />
            </button>
            <h1 className='pl-3 text-xl font-semibold'>WeePage</h1>
        </div>
        <Image src={userPng} alt="menu" width="30px" height="30px" />        
    </div>
  )
}

export default Header