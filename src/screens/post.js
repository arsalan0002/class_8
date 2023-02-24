// import React, { useEffect, useState } from 'react'

// function post() {
//     let getData = () =>
// const {dataList,setDataList}= useState([])

//   useEffect(()=>{
//     getData()
//   },[]); 
//   return (
//     <>
    
//        <h1>post</h1>
//        {listData.map((x,i) => (
//         <div>
//           <p>{x.title}</p>
//           <imgsrc={x.thumbnailUrl} width="300" alt="" />
//           </div>
//        ))}

//     </>
//   )
// }

// export default post;

import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function post(){
    const [datalist,setdatalist]=useState([])
    let api="https://jsonplaceholder.typicode.com/photos"
    let getdata=()=>{
        axios
        .get(api)
        .then((res)=>{
            console.log(res)
            setdatalist([...res.data])
        })
        .catch((err)=>{
            console.log(err)
        })
       
    }
    useEffect(()=>{
       getdata()
          },[])
          const navigate = useNavigate();
          const moveToSinglePost = (i)=>{
            navigate(`/singlepost/${i}`);
          };
    return(
        <>
        <h1>Home</h1>
       
       {datalist.map((x,i)=>{
       <div onClick={()=>moveToSinglePost(x.id)} key={i}>
        <p>{x.title}</p>
        <img src={x.thumbnailUrl} width="100px" alt="" />
        </div>)

    ))}
        </>
    )
}
export default post;