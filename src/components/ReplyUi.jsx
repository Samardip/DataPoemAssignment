import React, { useState } from 'react'

export const ReplyUi = ({ commentIndex, replyIndex, replyItem, handleEdit, handleDelete, setOpenDeleteModal, handleReplyCounter }) => {


    return (
        <div className='bg-white p-2  flex flex-col sm:flex-row gap-3 pb-5' key={replyIndex}>
            <div className='sm:flex items-center hidden'>
                <div className='flex flex-col items-center justify-center gap-2 bg-gray-100 min-w-[30px] h-[100px]'>
                    <div onClick={() => { handleReplyCounter('plus', replyIndex) }}><img src="/images/icon-plus.svg" alt="logo" className='w-[10px] h-[10px]' /></div>
                    <div>{replyItem?.counter}</div>
                    <div onClick={() => { handleReplyCounter('minus', replyIndex) }}><img src="/images/icon-minus.svg" alt="logo" className='w-[10px] ' /></div>
                </div>
            </div>
            <div className='w-[100%] sm:w-[90%] flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div className=''>
                            <img src="/images/avatars/img1.png" alt="logo" className='w-[30px] h-[30px]' />
                        </div>
                        <div className='font-bold'>name&nbsp;{commentIndex + 1}{replyIndex + 1}</div>
                        {/* <div>1 month ago</div> */}
                    </div>
                    <div className='flex gap-5'>
                        <div className='hidden sm:flex text-blue-700 cursor-pointer font-medium items-center' onClick={() => { setOpenDeleteModal(true) }}>
                            <img src="/images/icon-delete.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Delete
                        </div>
                        <div className='hidden sm:flex text-blue-700 cursor-pointer font-medium items-center' onClick={() => { handleEdit(replyIndex) }}>
                            <img src="/images/icon-edit.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Edit
                        </div>
                    </div>
                </div>
                <div className='break-words'>
                    {replyItem?.comment}
                </div>
                <div className='flex items-center justify-between mx-2 sm:hidden '>
                    <div className='flex items-center justify-around gap-2 bg-gray-100 min-w-[100px] h-[30px]'>
                        <div onClick={() => { handleReplyCounter('plus', replyIndex) }}><img src="/images/icon-plus.svg" alt="logo" className='w-[10px] h-[10px]' /></div>
                        <div>{replyItem?.counter}</div>
                        <div onClick={() => { handleReplyCounter('minus', replyIndex) }}><img src="/images/icon-minus.svg" alt="logo" className='w-[10px] h-[px]' /></div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='sm:hidden flex text-blue-700 cursor-pointer font-medium items-center' onClick={() => { setOpenDeleteModal(true) }}>
                            <img src="/images/icon-delete.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Delete
                        </div>
                        <div className='sm:hidden flex text-blue-700 cursor-pointer font-medium items-center' onClick={() => { handleEdit(replyIndex) }}>
                            <img src="/images/icon-edit.svg" alt="logo" className='w-[10px] h-[10px]' />&nbsp;Edit
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
