import React from 'react'

export const CommentUiCard = ({ item, handleAddReply, commentIndex,handleCounter }) => {
    let createdAt = item?.createdAt;
    console.log(createdAt);
    let time = createdAt?.getSeconds()<=60?createdAt?.getSeconds()+' sec ago':createdAt?.getMinutes()<=60?createdAt?.getMinutes()+' min ago':createdAt?.getHours()<=60?createdAt?.getHours()+' hrs ago':createdAt?.getDays();
    
    return (
        <div className='flex bg-white p-2 gap-5' key={commentIndex}>
            <div className='sm:flex items-center hidden '>
                <div className='flex flex-col items-center justify-center gap-2 bg-gray-100 min-w-[30px] h-[100px]'>
                    <div onClick={() => {
                        handleCounter('plus',commentIndex);
                    }}><img src="/images/icon-plus.svg" alt="logo" className='w-[10px] h-[10px]' /></div>
                    <div>{item?.counter}</div>
                    <div onClick={() => {
                        handleCounter('minus',commentIndex);
                    }}><img src="/images/icon-minus.svg" alt="logo" className='w-[10px] h-[px]' /></div>
                </div>
            </div>
            <div className='w-[100%] sm:w-[90%] flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div className=''>
                            <img src="/images/avatars/img1.png" alt="logo" className='w-[30px] h-[30px]' />
                        </div>
                        <div className='font-bold'>name&nbsp;{commentIndex + 1}</div>
                        <div className='font-medium'>{createdAt.toLocaleTimeString()}</div>
                    </div>
                    <div className='hidden sm:flex text-blue-700 cursor-pointer font-medium items-center' onClick={() => { handleAddReply(false) }}>
                        <img src="/images/icon-reply.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Reply
                    </div>
                </div>
                <div className='break-words'>
                    {item?.comment}
                </div>
                <div className='flex items-center justify-between mx-2 sm:hidden '>
                    <div className='flex items-center justify-around gap-2 bg-gray-100 min-w-[100px] h-[30px]'>
                        <div onClick={() => {
                            handleCounter('plus',commentIndex);
                        }}><img src="/images/icon-plus.svg" alt="logo" className='w-[10px] h-[10px]' /></div>
                        <div>{item?.counter}</div>
                        <div onClick={() => {
                            handleCounter('minus',commentIndex);
                        }}><img src="/images/icon-minus.svg" alt="logo" className='w-[10px]' /></div>
                    </div>
                    <div className='flex sm:hidden text-blue-700 cursor-pointer font-medium items-center'
                        onClick={() => {
                            handleAddReply(false)
                        }}>
                        <img src="/images/icon-reply.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Reply
                    </div>
                </div>
            </div>
        </div>
    )
}
