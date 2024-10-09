import React from 'react'
import cssstyle from "./about.module.css"


console.log(cssstyle,"cssstyle");


function aboutpage() {
  return (
    <div className={cssstyle.about}>this is about page</div>
  )
}

export default aboutpage