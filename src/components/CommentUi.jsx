import React, { useState } from 'react'
import { AddOrEditReply } from './AddOrEditReply';
import { ReplyUi } from './ReplyUi';
import { CommentUiCard } from './CommentUiCard';
import { DeleteModal } from './modal/DeleteModal';
import { useComment } from '../utility/useComment';

export const CommentUi = ({ item, commentIndex, comment, setComment, reply, setReply }) => {

    const { handleAddReply,handleCounter,handleEdit,handleDelete,handleReplyCounter,setOpenDeleteModal,openDeleteModal } = useComment(comment,commentIndex,item,setComment,reply,setReply)

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
