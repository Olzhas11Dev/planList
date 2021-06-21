import "./App.css"
import InputSection from "./components/InputSection"
import ListItems from "./components/ListItems"
import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("")
  const [arr, setArr] = useState([])

  const [index, setIndex] = useState(0)
  const [color, setColor] = useState("#008CFF")
  const arrColor = ["#008CFF", "#BBAFFD", "#42E3C1"]

  return (
    <div className="App">
      <h2>Plan list</h2>
      <InputSection />
      <ListItems />

      <div className="item">Items:{arr.length}</div>
    </div>
  )
}

export default App
