 import { MyPost } from './MyPost/MyPost';
import ProfileInfo from './PfofileInfo/ProfileInfo';
import css from './Profile.module.css'



const Profile = () => {
  return (
    <div className={css}>
      <ProfileInfo/>
      <MyPost />
    </div>
  );

}

export { Profile};