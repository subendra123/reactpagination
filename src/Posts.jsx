import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading ........</h2>
    }
  return (
    <>
    {
        posts.map((post) => {
          return(
            <>
          
            <p>{post.title}</p>
            </>
          )
         
        })
      }
    </>
  )
}

export default Posts