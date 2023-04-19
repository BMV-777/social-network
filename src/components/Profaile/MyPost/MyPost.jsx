 import { useRef } from 'react';
import css from './MyPost.module.css'
import { Post } from './Post/Post';
import { addPosts, updateNewPostText } from 'Redux/profile-reducer';

// createRef(); 

const MyPost = (props) => {
  let posts = props.posts
 
  let postElement =posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = useRef();
 
  let addPost = () => {
//  debugger
    //  props.addPost();  
    props.dispatch(addPosts());
    //  console.log(dispatch)

  }
  
 
  let onPostChange = () => {
  
      let text = newPostElement.current.value;
      // props.updatePostText(text);
     let action = ( updateNewPostText(text));
     props.dispatch(action);
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