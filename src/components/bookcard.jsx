import React from 'react'

const bookcard = ({image,name,genre,author}) => {
  return (
    <div
    style={{
        width:"max-content",
    }}
    >
        <img src={image} alt="image" 
            style={{
                width:"14rem",height:"16rem"
            }}
        />
        <h3>{name}</h3>
        <p>{genre}</p>
        <p>{author}</p>
    </div>
  )
}

export default bookcard