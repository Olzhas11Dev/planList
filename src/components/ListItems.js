import React from "react"

export default function ListItems(props) {
  console.log(props)
  return (
    <div className="listItem">
      <p>{props.item}</p>
      <button onClick={() => props.cleanList(props.item)} className="btnRemove">
        x
      </button>
    </div>
  )
}
