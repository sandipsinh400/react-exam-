import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { viewstudent } from "../redux/Studentslice"


const OneUser = () => {
    const {id}=useParams()
    // alert("fghj")

const {userList}=useSelector((state)=>state.user)
console.log(userList);

const [user,setUser]=useState({})

const oneuser=userList.find((user)=>{
    return user.id===id
})
console.log(oneuser);



    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(viewstudent())
        setUser(oneuser)
    },[dispatch])

  return (
    <div className=" container shadow p-5 mt-5 mb-5"> 
        <h3 className="text-center">Studemt-Detailes</h3>
            <h6> Username : {user?.username}</h6>
             <p>Roll-No.: {user.rollNumber}</p>
             <p>Class :{user.class}</p>
    </div>
  )
}

export default OneUser
