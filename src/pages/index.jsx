import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'
const index = () => {

  const [query, setquery] = useState([])
  useEffect(()=>{
    sanityClient.fetch('*[_type == "formSubmmission"]{name,email,message}')
    .then(setquery)
  },[]);
  return (
    <div>
<h1>admin dashboard</h1>
{
  query.map((elem,index)=>{
    <div key={index}>
<p>{elem.name}</p>
<p>{elem.email}</p>
<p>{elem.message}</p>
    </div>
  })
}

    </div>
  )
}
export default index;