import React, { useState } from 'react'

export const useComment = (comment,commentIndex,item,setComment,reply,setReply) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDelete = (replyIndex) => {
        let replyArray = [];
        let newCommentArray = [];
        var date = new Date();
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
    return {
        handleAddReply,handleCounter,handleEdit,handleDelete,handleReplyCounter,setOpenDeleteModal,openDeleteModal
    }
}
