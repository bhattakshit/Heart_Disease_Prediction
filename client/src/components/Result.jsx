import React from 'react'
import { useState ,useEffect} from 'react';
import {useSelector} from 'react-redux'
function Result(props) {
const childToggle=()=>{
    const data=useSelector((state)=>state.auth.currentUser)
    const [resultData,setResultData]=useState([])
    useEffect(()=>{
const getAllData=async()=>{
const res=await fetch('http://localhost:4000/api/v1/heart/results',{
    method:'GET',
    headers:{
        'Authorization':`Bearer ${currentUser.token}`
    }
})
return await res.json()
}
getAllData().then((res)=>{
    setResultData(res)
}).catch((err)=>{
    console.log(err)
})

    },[])
    props.toggleResult(props.index)
}

  return (
  <div>

        {!props.show&&<button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    onClick={childToggle}
        >
     Date :  {props.date}    ||   Report Id :#{props.reportId}
               </button>}
    
     {props.show && 
        <div onClick={childToggle} className=" cursor-pointer block rounded-lg bg-blue p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
         Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
}
   
  </div>
  )
}

export default Result
