 import { useRef } from 'react';
import css from './MyPost.module.css'
import { Post } from './Post/Post';



const MyPost = (props) => {

 
  let postElement =props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = useRef();
  
  let addPost = () => { 
    props.addPost();  
  }
  
  let onPostChange = () => {
     let text = newPostElement.current.value;
     props.updatePostText(text);
  }
  return (
    <div className={css.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={css.posts}>{postElement}</div>
    </div>
  );

}

export { MyPost};