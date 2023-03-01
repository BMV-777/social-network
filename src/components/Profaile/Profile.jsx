 import { MyPost } from './MyPost/MyPost';
import ProfileInfo from './PfofileInfo/ProfileInfo';
import css from './Profile.module.css'



const Profile = (props) => {

  return (
    <div className={css}>
      <ProfileInfo />
      <MyPost
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
         updatePostText={props.updatePostText}
      />
    </div>
  );

}

export { Profile};