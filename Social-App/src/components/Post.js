import React, { useEffect, useState } from 'react'
import '../assets/mid-content.css'
import axios from 'axios'

const Post = ({post}) => {
    const [npost] = useState(post)
    const [name,setName] = useState('')
    const commentid = `comment${post.uniq}`
    let submitPost = (e) => {
        e.preventDefault()
        let comment = document.getElementById(commentid).value
        console.log(comment)
    }

    useEffect(() => {
        async function getName() {
            let res = await axios.post('http://127.0.0.1:4000/getName',{
                by: npost.by
            })
            if(res.status === 201)
                setName(res.data.name)
        }
        getName()
    },[npost])

    return (
        <div className='post'>
            <div className='post-content'>
                <p><b>{name}</b></p>
                <small>{npost.time}</small>
                <br />
                <p>{post.text}</p>
                <br />
                <input type="text" id={commentid} name='comment' />
                <button type='click' onClick={submitPost}>Comment</button>
            </div>
        </div>
    )
}

export default Post