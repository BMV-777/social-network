 import { MyPost } from './MyPost/MyPost';
import ProfileInfo from './PfofileInfo/ProfileInfo';
import css from './Profile.module.css'



const Profile = ({post}) => {
  return (
    <div className={css}>
      <ProfileInfo/>
      <MyPost post ={post} />
    </div>
  );

}

export { Profile};