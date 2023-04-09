import React from 'react'

export const AddComment = ({ text, setText, comment, setComment }) => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-around gap-5 w-[100%] p-2 bg-white bottom-0'>
            <div className='hidden sm:flex'>
                <img src="/images/avatars/img1.png" alt="logo" className='w-[50px] h-[40px]' />
            </div>
            <textarea placeholder="Add a comment..."
                className='border p-1 rounded-sm w-[100%]'
                onChange={(e) => { setText(e.target.value) }}
                value={text}
                rows={'3'}
            />
            <div className='flex justify-between'>
                <div className=' flex sm:hidden'>
                    <img src="/images/avatars/img1.png" alt="logo" className='w-[40px] h-[40px]' />
                </div>
                <button
                    className='bg-blue-500 px-5 text-[16px] h-[40px] rounded-md font-medium text-white'
                    onClick={() => {
                        let newComment = [];
                        var date = new Date();
                        newComment = [...comment, {
                            id: '',
                            comment: text,
                            currentUser: 'name',
                            createdAt: date,
                            counter:0,
                            reply: [],
                        }]
                        setComment(newComment);
                        setText('')
                    }}>
                    send
                </button>
            </div>
        </div>
    )
}
