
const Index = () => {
  return (
   <div className="container">
    <App />
   </div>
  )
}

// ReactDOM.render(<Index />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
