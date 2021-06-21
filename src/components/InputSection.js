import React from "react"

export default function InputSection(props) {
  return (
    <div className="inputSection">
      <div>
        <input type="text" placeholder="Enter your text" />
      </div>
      <div>
        <button>+</button>
      </div>
    </div>
  )
}
