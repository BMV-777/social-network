 import css from './Post.module.css'



const Post = ( props ) => {
  return (
    <>
    
      <div className={css.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYylrIORqVocCKuFL2M1wuFuUr7KTY-rqP_Q&usqp=CAU' alt='avatar' />
        {props.massage}
        
        <div>
         <span> like</span>  {props.likesCount } 
        </div>
        </div>
    </>
)

}

export { Post};