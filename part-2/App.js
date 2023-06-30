
const App = () => {

    const date = new Date().toDateString()

  return (
    <div>
      <Tweet 
      user = "Bishnu Thapa"
      username = "bishnu" 
      date = {date}
      message = "#Ilovethispost"
      />
    </div>
  )
}

