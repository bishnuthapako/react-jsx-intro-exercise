
const Tweet = (props) => {
 

  return (
    <div>
      <h4>{props.user}</h4>
      <p>{props.username}</p>
      <p>{props.message}</p>
      <h5>{props.date}</h5>
    </div>
  )
}

