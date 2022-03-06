import React from 'react'
import '../assets/mid-content.css'

const Postbox = () => {
  return (
    <div>
        <p id='post-header' ><b>Share your thoughts</b></p>
        <input id='post-box' type='text' placeholder='...' />
        <button id='post-submit' type='submit'>Post</button>
    </div>
  )
}

export default Postbox