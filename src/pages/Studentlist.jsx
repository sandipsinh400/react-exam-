import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletestudent, viewstudent } from "../redux/Studentslice"
import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdSecurityUpdateGood } from "react-icons/md";
import { PiUserListDuotone } from "react-icons/pi";

const Studentlist = () => {


    const { userList } = useSelector((state) => state.user)
    console.log(userList);

    const [serch,setUser]=useState("")

    const serchdata=userList.filter((user)=>{
        const  uppseruser=user.username.toUpperCase()
         const uppserch=serch.toUpperCase()
         console.log(uppserch);
         
        
         return uppseruser.includes(uppserch)
    })


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewstudent())
        
    }, [dispatch])


    function trash(id) {
        console.log(id);
        if(confirm("delete student.........")){
        dispatch(deletestudent(id))
        }
    }


    return (
        <div>
            <input type="text" className="form-control mt-5 w-25" placeholder="serching student...name" onChange={(e)=>setUser(e.target.value)}/>
            <table className="table table-bordered text-center mt-2 mb-5">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>student name</th>
                        <th>rollNumber</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serchdata?.map((user, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user?.rollNumber}</td>
                                        <td><button onClick={(() => (trash(user.id)))} className=" btn btn-outline-danger"><MdAutoDelete />
                                        </button>
                                        <NavLink to={`/update/${user.id}`} className="btn btn-outline-success mx-5"><MdSecurityUpdateGood />
                                        </NavLink>
                                        <NavLink to={`/oneuser/${user.id}`} className="btn btn-outline-success "><PiUserListDuotone />
                                        </NavLink>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Studentlist
