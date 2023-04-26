//  import { useRef } from 'react';
// import css from './MyPost.module.css'
// import { Post } from './Post/Post';
import { addPosts, updateNewPostText } from 'Redux/profile-reducer';
import  MyPost  from './MyPost';


const MyPostContainer = (props) => {
 
 
  let addPost = () => {
    props.dispatch(addPosts());
  }
  
 
  let onPostChange = (text) => {
  
      // let text = newPostElement.current.value;
      // props.updatePostText(text);
     let action = ( updateNewPostText(text));
     props.dispatch(action);
  }
  
  
  return (<MyPost updateNewPostText={onPostChange} addPost={addPost} posts={props.posts} />)
  

}

export default MyPostContainer;
