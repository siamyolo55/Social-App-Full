import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = ({uid}) => {
  const [posts, setPosts] = useState([])
  const [id] = useState(uid)
  


  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.post('http://127.0.0.1:4000/getUserPosts',{
          id
        })
        setPosts(res.data.posts)
      } catch (err) {
        console.log(err)
      }   
    }
    getPosts()
  },[id])

  return (
    <div>
        {posts !== [] ?  posts.map((post) => <Post key={post.uniq} post={post} />) : '' }
    </div>
  )
}

export default Posts