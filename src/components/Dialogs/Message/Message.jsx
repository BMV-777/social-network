
import { useRef } from 'react';
import css from './../Dialogs.module.css';


const Message = (props) => {
  
  let newMessagePost = useRef()
  
  let addMessages = () => {
    let text = newMessagePost.current.value;
    alert(text)
    
  }

  return (
    <div className={css.message}>
      {props.message}
      <div>
        <textarea ref={newMessagePost}></textarea>
        <div>
          <button onClick={addMessages}>add</button>
        </div>
      </div>
    </div>
  );

}


export default Message;