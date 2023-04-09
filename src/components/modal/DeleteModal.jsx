import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

export const DeleteModal = ({ open, setOpen, handleDelete, replyIndex }) => {

    const width = window.screen.width;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width>700?350:'95%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 20,
        p: 2,
        borderRadius: '10px'
    };
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="flex flex-col">
                <Typography id="modal-modal-title" variant="h6" component="h2" >
                    <p className='text-[25px] font-bold'>Delete comment</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                </Typography>
                <div className='flex justify-between mt-5'>
                    <button className='bg-gray-500 font-medium text-white w-[140px] h-[45px] rounded-lg' onClick={()=>{handleClose()}}>NO, CANCEL</button>
                    <button className='bg-red-500 font-medium text-white w-[140px] h-[45px] rounded-lg' onClick={()=>{
                        handleDelete(replyIndex) 
                        handleClose()}}>YES, DELETE</button>
                </div>
            </Box>
        </Modal>
    )
}
