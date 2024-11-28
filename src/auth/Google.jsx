import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import auth from "../redux/Firestore"
import { useEffect, useState } from "react"
import { IoLogIn } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Google = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        toast.success('👍 successful........', {
            position: "top-center",
            });
        onAuthStateChanged(auth, (user) => {
            console.log(user.displayName);
            setUser(user)

        })
    })

    function google2() {
      
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    }

    function logout() {
        signOut(auth)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    }
    return (
        <div className="container  shadow text-center p-5 mt-4 mb-4">

            {
                user ? (
                    <>
                        <h2 className="text-danger">user information</h2>
                        <h6>{user.displayName}</h6>
                        <p>{user.email}</p>
                        <button onClick={logout} className="btn btn-danger"><CgLogOut />
                        </button>
                    </>
                ) : <button onClick={google2} className="btn btn-success p-3">Google with login
                    <IoLogIn />
                </button>
            }
<ToastContainer />
        </div>
    )
}

export default Google
