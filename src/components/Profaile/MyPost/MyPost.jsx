 import css from './MyPost.module.css'
import { Post } from './Post/Post';



const MyPost = () => {
  return (
    <>
        <div  >
          Ava + description 
        </div>
        <div>
        My post 
      </div>
      <div>
         <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={css.posts}>
        <Post massage ='Hi, how are you' likesCount='5' />
        <Post massage ='Ok, and you' likesCount='7' />
        <Post massage ="Kimi-himi" likesCount='10' /> 
      </div>
         
    </>
)

}

export { MyPost};