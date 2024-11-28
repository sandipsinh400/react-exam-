import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Studentform from "./pages/Studentform"
import Studendetails from "./pages/Studendetails"
import Studentlist from "./pages/Studentlist"
import 'bootstrap/dist/css/bootstrap.css'
import OneUser from "./pages/OneUser"
import Google from "./auth/Google"

const App = () => {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Studentform/>}></Route>
        <Route path="/userlist" element={<Studentlist/>}></Route>
        <Route path="/update/:id" element={<Studendetails/>}></Route>
        <Route path="/oneuser/:id" element={<OneUser/>}></Route>
        <Route path="/google" element={<Google/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
