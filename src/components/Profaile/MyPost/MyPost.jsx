 import css from './MyPost.module.css'
import { Post } from './Post/Post';



const MyPost = (props) => {

  
  let postElement =props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={css.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
       {postElement}
      </div>
    </div>
  );

}

export { MyPost};