
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Paginatioin from './Paginatioin';
import Posts from './Posts';

function App() {
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(false);
  const[currentpage, setCurrentpoage] = useState(1);
  const[postsperpage] = useState(10); 

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
      
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //     setLoading(false);

      
  //   }
  //   fetchPosts();
  // },[])

  // console.log(posts);

  // get current Post

  const indexoflastpost = currentpage * postsperpage;
  const indexoffirstpost = indexoflastpost - postsperpage;
  const currentPosts = posts.slice(indexoffirstpost, indexoflastpost);

  const paginate = pageNumbers => setCurrentpoage(pageNumbers);

  return (
    <>
   <Posts posts={currentPosts} loading={loading} />
   <Paginatioin postsperpage={postsperpage}  totalposts={posts.length}  paginate={paginate}/>
  
  <Tabs />
  
  </>
  );
}

export default App;
