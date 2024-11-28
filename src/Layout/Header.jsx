import { AiFillGoogleCircle } from "react-icons/ai";

const Header = () => {
  return (
    <>
    <div>
 <header className="bg-primary text-white py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <h3 className="m-0">Sandipsinh Zala</h3>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/userlist">Userlist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="/google">
           <AiFillGoogleCircle />
        </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
    </>
  )
}

export default Header
