import "./App.css"
import InputSection from "./components/InputSection"
import ListItems from "./components/ListItems"
import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("")
  const [array, setArray] = useState([])
  function addToArray() {
    setArray([...array, inputText])
    setInputText("") // To clean input
  }
  console.log(inputText)
  console.log(array)
  return (
    <div className="App">
      <h2>Plan list</h2>
      <InputSection inputText={inputText} setInputText={setInputText} addToArray={addToArray} />
      {array.map((e) => (
        <ListItems item={e} />
      ))}

      <div className="item">Items: {array.length}</div>
    </div>
  )
}

export default App
