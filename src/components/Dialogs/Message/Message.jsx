
import { useRef } from 'react';
import css from './../Dialogs.module.css';


const Message = (props) => {
  
  let newMessagePost = useRef()
  
  let addMessages = () => {
   props.addPostDialog(); 
  }
  
  let onMessageText = () => {
    let text = newMessagePost.current.value;
    props.updateMessageText(text);
  }

  return (
    <div className={css.message}>
      {props.message}
      <div className={css.messageBlock}>
        <textarea
          //  key={props.id}
          onChange={onMessageText}
          ref={newMessagePost}
          value={props.newMessageText}
        />
        <div>
          <button onClick={addMessages}>add</button>
        </div>
      </div>
    </div>
  );

}


export default Message;