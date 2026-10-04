// import './css/style.css'
import style from './css/UserProfile.module.css'

function userprofile() {
  return (
    <div>
      
      {/* <h1 className='heading'>User profile</h1> */}
      {/* <h1 className={style.heading}>User profile</h1> */}
      <div className={style.card}>
        <img className={style.img} src='https://www.w3schools.com/howto/img_avatar.png' alt="Avatar"></img>

        <div className={style.textWrap}>
            <h4>NB Nill</h4>
            <p4>Laravel full stack developer</p4>
        </div>
        
      </div>
    </div>
  );
}
export default userprofile;