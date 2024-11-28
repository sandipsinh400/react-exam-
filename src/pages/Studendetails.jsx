import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updatestudent, viewstudent } from "../redux/Studentslice"
import { useForm } from "react-hook-form"



const Studendetails = () => {
    const {id}=useParams()
    const {register,handleSubmit,reset}=useForm()
    // alert("update.........")

    const {userList}=useSelector((state)=>state.user)
    console.log(userList);

    const redirect=useNavigate()
    

    const dispatch=useDispatch()

    const singelstudent=userList.find((user)=>{
        return user.id===id
    })
    console.log(singelstudent);
    

    useEffect(()=>{
        dispatch(viewstudent())
        reset(singelstudent)

    },[dispatch])

    function updatedata(data){
        console.log(data);
        dispatch(updatestudent(data))
        redirect('/userlist')
        
    }

  return (
    <>
   
    <div className="container   shadow mt-5 mb-5 p-5">
    <h2 className="text-center">Student Details Form</h2>
    <form onSubmit={handleSubmit(updatedata)}>
      <div className="mb-3">
        <label className="form-label">Username Name</label>
        <input type="text"  {...register("username")}className="form-control" id="category" placeholder="Enter Category Name" />
      </div>
  
      <div className="mb-3">
        <label  className="form-label">Roll Number</label>
        <input type="text" {...register("rollNumber")} className="form-control" id="rollNumber" placeholder="Enter Roll Number"/>
      </div>
  
      <div className="mb-3">
        <label  className="form-label">Class</label>
        <input type="text"  {...register("class")} className="form-control" id="class" placeholder="Enter Class"/>
      </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  </>
  )
}

export default Studendetails
