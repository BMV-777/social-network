// import css from './Friends.module.css'

const Friends = ({friends}) => {
  //  const isOnline = props.props.friends;
  //  const friends = props.props.friends;
  // const friends = props.friends;
  


  // let postElement = isOnline.map(f => (
  //   <div key={f.id}>
  //     <img src={f.url} alt="" /> <p>{f.name}</p>{' '}
  //   </div>
  // ));
  return (
    
      <div>
      <h1>Friends</h1>
     
      {/* {friends.friends.map(f => <div>
        <p>{f.name}</p>
      </div>)} */}
      
      
        {/* {friends.map(f =>
          <ul key={f.id}>
            <img src={f.url} alt='img' />
            <h3>{f.name }</h3>
          </ul>)} */}
     
      

      {/* {props.map(f => (
          <div key={f.id} className={css}>
            <img src={f.url} alt='img' />
            <h3>{f.name}</h3>
          </div>
        ))} 
       <img
          src="https://pbs.twimg.com/profile_images/1144122570687410176/e9tNbFNq_400x400.png"
          alt="Sveta"
        />
        <div>Sveta</div>
        <img
          src="https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477"
          alt="Nataha"
        />
        <div>Nataha</div>
        <img
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png"
          alt="Vika"
        />
        <div>Vika</div>
      </div>
       <div className={css.friendsList}>
        <img
          src="https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477"
          alt="Nataha"
        />
        Nataha
      </div> 
       <div className={css.friendsList}>
        <img
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png"
          alt="Vika"
        />
        Vika
      </div>  */}
   </div>
    
  );
};

export default Friends;