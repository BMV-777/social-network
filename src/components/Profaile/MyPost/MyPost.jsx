 import css from './MyPost.module.css'
import { Post } from './Post/Post';



const MyPost = () => {
  

const postData = [
  { id: '1', massage: 'Hi, how are you', likesCount: '7' },
  { id: '2', massage: 'Ok, and you', likesCount: '5' },
  { id: '3', massage: 'Kimi-himi', likesCount: '4' },
  { id: '4', massage: 'Yo', likesCount: '3' },
  { id: '5', massage: 'Bro', likesCount: '2' },
];

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
        <Post massage={postData[0].massage} likesCount={postData[0].likesCount} />
        <Post massage={postData[1].massage} likesCount={postData[1].likesCount} />
        <Post massage={postData[2].massage} likesCount={postData[2].likesCount} />
      </div>
    </div>
  );

}

export { MyPost};