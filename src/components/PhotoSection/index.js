import React from "react"
import { Button } from "../ButtonElements"
import "./PhotoSection.css"

function PhotoSection() {
  return (
    <div className="photo-container">
      <h1> Joshua Moore</h1>
      <p>Landscape Photographer</p>
      <div className="photo-btns">
        <Button fontBig big primary>
          get started
        </Button>
      </div> 
    </div>
  )
}

export default PhotoSection
