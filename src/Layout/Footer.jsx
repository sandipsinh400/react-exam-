

const Footer = () => {
  return (
    <div>
     <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
  
        <div className="col-md-4">
          <h5 className="text-uppercase mb-3">About Us</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec efficitur purus. Curabitur vehicula.</p>
        </div>

   
        <div className="col-md-4">
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>


        <div className="col-md-4">
          <h5 className="text-uppercase mb-3">Contact Us</h5>
          <p><i className="fas fa-map-marker-alt"></i> 9898 Street Name, Ahmedabad, india</p>
          <p><i className="fas fa-phone-alt"></i> +999 8888 111</p>
          <p><i className="fas fa-envelope"></i> info@example.com</p>
        </div>
      </div>


      <div className="text-center mt-4">
        <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white me-4"><i className="fab fa-linkedin-in"></i></a>
      </div>


      <div className="text-center mt-4">
        <p>&copy; 2024 Red and White . All Rights Reserved.</p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
