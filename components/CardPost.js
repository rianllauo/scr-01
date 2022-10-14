import React from 'react'
import Image from 'next/image'
// import userImg from '/public/img/img1.jpg'

const CardPost = ({post}) => {
  return (
    
    <div>
        {post.map((item) => (
            <div key={item.id} className='p-5 border bg-white drop-shadow-md rounded-xl'>
                <div>
                    <h1 className='text-xl leading-5 font-semibold'>{item.username}</h1>
                    <p className='text-xs text-slate-500'>{item.daypost}</p>
                </div>
                <div className='mt-3'>
                    <p className='text-sm mb-3 leading-5 text-slate-500'>{item.posttext}</p>
                    
                    {/* <Image className='rounded-xl ' src={item.imgpost}  alt='user post' layout='fill'/> */}
                </div>
            </div>
        ))}
    </div>

    
  )
}

export default CardPost