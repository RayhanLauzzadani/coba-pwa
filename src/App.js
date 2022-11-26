import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
    </div>
  )
}

export default App