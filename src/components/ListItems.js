import React from "react"

export default function ListItems(props) {
  return (
    <div className="listItem">
      <p>{props.item}</p>
      <button className="btnRemove">x</button>
    </div>
  )
}
