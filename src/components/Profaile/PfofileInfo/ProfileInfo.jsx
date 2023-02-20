 import css from './ProfileInfo.module.css';

const ProfileInfo = props => {
  return (
    <>
      <div>
        <img
          src="https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4="
          alt="nub"
        />
      </div>
      <div className={css.descriptionBlock}>Ava + description</div>
    </>
  );
};

export default ProfileInfo;
