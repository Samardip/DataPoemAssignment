import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { CommentUi } from './components/CommentUi';
import { AddComment } from './components/AddComment';

function App() {
  const [text, setText] = useState('');
  const [comment, setComment] = useState([])
  const [reply, setReply] = useState('')

  //   useEffect(()=>{
  // localStorage.setItem('comment',comment);
  //   },[comment])

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex flex-col items-center p-2 min-h-screen'>
        <div className='w-[100%] sm:w-[690px] h-[100%] flex flex-col justify-end'>
          <div>
            {
              comment?.map((item, commentIndex) => {
                return (
                  <div key={commentIndex}>
                    <CommentUi item={item}
                      commentIndex={commentIndex}
                      setComment={setComment}
                      comment={comment}
                      reply={reply}
                      setReply={setReply}
                    />
                  </div>
                )
              })
            }
          </div>
          <AddComment
            text={text}
            setText={setText}
            comment={comment}
            setComment={setComment}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
