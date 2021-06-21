import React from "react"

export default function ListItems(props) {
  console.log(props.inputText)
  return (
    <div className="listItem">
      <p>Buy a milk</p>
      <button className="btnRemove">x</button>
    </div>
  )
}
