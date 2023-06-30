
const Person = (props) => {
    console.log(props, 'prps')
    let reply;
    if(props.age > 18){
        reply = "please go vote!"
    } else {
        reply = "You must be 18"
    }
    let {name} = props;
    let newName;
   if(name.length > 8){
        newName = name.slice(0,6)
   }
 


  return (
    <div className="mt-2 p-5 bg-success text-white text-center rounded">
      <p className="text-center">Learn some information about this person</p>
      <p className="h4">Name: {newName}</p>
      <p className="h4">Age: {props.age}</p>
      <p className="h3 text-center">Says: {reply}</p>
      {props.hobbies.map((h,i)=><li key={i}>{h}</li>)}
    </div>
  )
}
