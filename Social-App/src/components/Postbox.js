import React, { useState } from 'react'
import '../assets/mid-content.css'
import axios from 'axios'

const Postbox = ({id}) => {

  const [post,setPost] = useState('')
  const submitPost = async () => {
    let res = await axios.post('http://127.0.0.1:4000/submitPost', {
      id,post
    })
    if(res.status === 201){
      console.log('wrorked')
    }
  }

  return (
    <div>
        <p id='post-header' ><b>Share your thoughts</b></p>
        <input id='post-box' type='text' value={post} onChange={(e) => setPost(e.target.value)} />
        <button id='post-submit' type='click' onClick={submitPost}>Post</button>
    </div>
  )
}

export default Postbox