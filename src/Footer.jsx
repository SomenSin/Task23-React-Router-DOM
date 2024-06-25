import React from 'react'

export default function Footer() {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",position:"relative",bottom:"0",height:"50px",width:"100%",backgroundColor:"grey",color:"black"}}>
        <p>&copy; Copyright 2024</p>
        <button style={{backgroundColor: "black",color:"white",padding:"5px 10px",borderRadius:"5px"}}>Register for Free</button>
    </div>
  )
}
