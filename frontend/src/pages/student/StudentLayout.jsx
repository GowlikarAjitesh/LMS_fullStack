import axiosInstance from '@/api/axiosInstance';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [details, setDetails] = useState({});
  console.log('Token = ', localStorage.getItem('Bearer'));

  useEffect(()=>{
      axiosInstance.get('/api/user').then((res)=> {
    console.log(res.data.data);
    setDetails(res.data.data);
  }).catch((err)=> {
    console.log("Error ", err);
  });
  console.log(details);
  }, []);

  return (
    <div>
      This is Home Page
      {
        JSON.stringify(details)
      }
    </div>
  )
}
