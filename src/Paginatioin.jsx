import React from 'react'

const Paginatioin = ({postsperpage, totalposts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalposts/postsperpage); i++) {
        pageNumbers.push(i)

    }
  return (
    <>
    {
        pageNumbers.map((number) =>{
            return(
                <button onClick={() => paginate(number)} key={number}>{number}</button>
            )
        })
    }
    
    </>
  )
}

export default Paginatioin