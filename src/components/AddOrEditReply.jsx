import React from 'react'

export const AddOrEditReply = ({ replyItem, replyIndex, setReply, handleAddReply, commentIndex }) => {
    return (
        <div className='bg-white p-2  flex flex-col gap-3 pb-5' key={replyIndex}>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div className=''>
                        <img src="/images/avatars/img1.png" alt="logo" className='w-[30px] h-[30px]' />
                    </div>
                    <div className='font-bold'>name&nbsp;{commentIndex + 1}{replyIndex + 1}</div>
                    {/* <div>1 month ago</div> */}
                </div>

            </div>
            <div>
                <input
                    defaultValue={replyItem?.comment}
                    placeholder='Add reply...'
                    className='p-1 w-[100%] border border-gray-100 rounded-lg'
                    onChange={(e) => {
                        setReply(e.target.value)
                    }}
                />
            </div>
            <div className='flex justify-end'>
                <button
                    className='bg-blue-500 px-5 text-[16px] h-[40px] rounded-md font-medium text-white'
                    onClick={() => {
                        handleAddReply(true, replyIndex)
                    }}>{`${replyItem?.edit ? 'Update' : 'Add'}`}</button>
            </div>
        </div>
    )
}
