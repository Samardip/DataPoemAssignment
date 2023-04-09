import React, { useState } from 'react'
import { AddOrEditReply } from './AddOrEditReply';
import { ReplyUi } from './ReplyUi';
import { CommentUiCard } from './CommentUiCard';
import { DeleteModal } from './modal/DeleteModal';

export const CommentUi = ({ item, commentIndex, comment, setComment, reply, setReply }) => {

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDelete = (replyIndex) => {
        let replyArray = [];
        let newCommentArray = [];
        var date = new Date();
        console.log(replyIndex);
        replyArray = item?.reply?.filter((data, i) => {
            return (i !== ((replyIndex-1)<0?replyIndex:replyIndex-1))
        })

        comment?.map((data, index) => {

            if (index === commentIndex) {
                newCommentArray = [...newCommentArray,
                {
                    ...data,
                    reply: replyArray
                }]
            }
            else {
                newCommentArray = [...newCommentArray, data];
            }
        })

        setComment(newCommentArray)
    }

    const handleEdit = (replyIndex) => {
        let replyArray = [];
        let newCommentArray = [];

        item?.reply?.map((data, i) => {
            if (i === replyIndex) {
                replyArray = [...replyArray, {
                    ...data,
                    edit: true
                }]
            }
            else {
                replyArray = [...replyArray, data]
            }
        })

        comment?.map((data, index) => {

            if (index === commentIndex) {
                newCommentArray = [...newCommentArray,
                {
                    ...data,
                    reply: replyArray
                }]
            }
            else {
                newCommentArray = [...newCommentArray, data];
            }
        })

        setComment(newCommentArray)
    }
    const handleCounter = (counter, index) => {
        let newComment = [];
        comment?.map((data, i) => {
            if (i === index) {
                newComment = [...newComment, { ...data, counter: counter === 'plus' ? data.counter + 1 : data.counter - 1 }]
            }
            else {
                newComment = [...newComment, data];
            }
        })
        setComment(newComment);
    }
    const handleReplyCounter = (counter, index) => {
        let replyArray = [];
        let newCommentArray = [];
        item?.reply?.map((data, i) => {
            if (i === index) {
                replyArray = [...replyArray, {
                    ...data,
                    counter: counter === 'plus' ? data.counter + 1 : data.counter - 1,
                }]
            }
            else {
                replyArray = [...replyArray, data]
            }
        })
        // if (replyindex-1 && item?.repy[replyindex - 1]?.comment !== '') {
        comment?.map((data, index) => {

            if (index === commentIndex) {
                newCommentArray = [...newCommentArray,
                {
                    ...data,
                    reply: replyArray
                }]
            }
            else {
                newCommentArray = [...newCommentArray, data];
            }
        })
        setComment(newCommentArray)
        // }
    }
    const handleAddReply = (isNewReply, replyindex) => {
        let replyArray = [];
        let newCommentArray = [];
        var date = new Date();
        if (isNewReply) {
            item?.reply?.map((data, i) => {
                if (i === replyindex) {
                    replyArray = [...replyArray, {
                        id: '',
                        comment: reply,
                        createdAt: date,
                        counter: data?.counter,
                        edit: false
                    }]
                }
                else {
                    replyArray = [...replyArray, data]
                }
            })
            setReply('')
        }
        // if (replyindex-1 && item?.repy[replyindex - 1]?.comment !== '') {
        comment?.map((data, index) => {

            if (index === commentIndex) {
                newCommentArray = [...newCommentArray,
                {
                    ...data,
                    reply: !isNewReply ?
                        [...item?.reply, {
                            id: '',
                            comment: '',
                            createdAt: '',
                            counter: 0,
                            edit: false
                        }]
                        :
                        replyArray
                }]
            }
            else {
                newCommentArray = [...newCommentArray, data];
            }
        })

        setComment(newCommentArray)
        // }
    }

    return (
        <div className=' m-2 flex flex-col  items-around gap-2' key={commentIndex}>
            <CommentUiCard
                item={item}
                handleAddReply={handleAddReply}
                commentIndex={commentIndex}
                handleCounter={handleCounter}
            />
            <div className='border-l-[2px]  pl-5 border-l-gray-300 flex flex-col gap-2'>
                {
                    item?.reply?.map((replyItem, replyIndex) => {
                        return (
                            <div key={replyIndex}>
                                {
                                    replyItem?.comment === '' || replyItem?.edit ?
                                        <AddOrEditReply
                                            replyItem={replyItem}
                                            replyIndex={replyIndex}
                                            setReply={setReply}
                                            handleAddReply={handleAddReply}
                                            commentIndex={commentIndex}
                                        />
                                        :
                                        <ReplyUi
                                            commentIndex={commentIndex}
                                            replyIndex={replyIndex}
                                            replyItem={replyItem}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                            setOpenDeleteModal={setOpenDeleteModal}
                                            openDeleteModa={openDeleteModal}
                                            handleReplyCounter={handleReplyCounter}
                                        />
                                }
                                <DeleteModal
                                    open={openDeleteModal}
                                    setOpen={setOpenDeleteModal}
                                    handleDelete={handleDelete}
                                    replyIndex={replyIndex}
                                />
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}
