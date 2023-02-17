 import { MyPost } from './MyPost/MyPost';
import css from './Profile.module.css'



const Profile = () => {
  return (
    <div className={css}>
        <div>
          <img src='https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4=' alt='nub' />
        </div>
      <MyPost />
        </div>
)

}

export { Profile};