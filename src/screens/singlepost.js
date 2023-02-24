import React from 'react'
import { useParams } from 'react-router-dom'

function singlepost() {
  const params = useParams();
  console.log(params);

  let api="https://jsonplaceholder.typicode.com/photos"


  return (
    <div>Singlepost</div>
  )
}

export default singlepost