// import React from "react";
// import "./Footer.css"; // Import your CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* Instagram Section */}
//       <div className="footer-instagram">
//         <h2>ON INSTAGRAM</h2>
//         <p>@NFLUENCE777</p>
//         <div className="instagram-images">
//           <img src="https://i.pinimg.com/736x/25/ba/00/25ba00880939bb921060a0ed6ebb7f37.jpg" alt="Instagram 1" />
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS9Z6ml0kV_sj6HXdTKiLGf2WbwhOLlB1qA&s" alt="Instagram 2" />
//           <img src="https://static.vecteezy.com/system/resources/previews/039/075/286/large_2x/ai-generated-of-a-beautiful-model-girl-in-beige-clothes-for-advertising-free-photo.jpeg" alt="Instagram 3" />
//           <img src="https://plus.unsplash.com/premium_photo-1669950093661-be9dedbda440?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" alt="Instagram 4" />
//           <img src="https://static.vecteezy.com/system/resources/previews/039/051/196/non_2x/ai-generated-woman-using-laptop-device-isolated-on-blue-background-smiling-female-model-holding-computer-presenting-advertising-job-search-online-shopping-online-services-photo.jpeg" alt="Instagram 5" />
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="footer-links">
//         <ul>
//           <li>Services</li>
//           <li>Workshops</li>
//           <li>Resources</li>
//           <li>Blog</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       {/* Footer Info */}
//       <div className="footer-info">
//         <h3>NFLUENCE</h3>
//         <p>Social Media Strategist</p>
//         <div className="footer-social">
//           <a href="#"><i className="fab fa-facebook-f"></i></a>
//           <a href="#"><i className="fab fa-linkedin-in"></i></a>
//           <a href="#"><i className="fab fa-twitter"></i></a>
//           <a href="#"><i className="fab fa-vimeo-v"></i></a>
//         </div>
//         <p className="footer-description">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//           ad minim veniam, quis nostrud exercitation ullamco.
//         </p>
//       </div>

//       {/* Buy Now Button */}
//       <div className="footer-buy-now">
//         <a href="#">BUY NOW</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Instagram Section */}
      <div className="footer-instagram">
        <h2>ON INSTAGRAM</h2>
        <p>@NFLUENCE777</p>
        <div className="instagram-images">
          <img src="https://i.pinimg.com/736x/25/ba/00/25ba00880939bb921060a0ed6ebb7f37.jpg" alt="Instagram 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS9Z6ml0kV_sj6HXdTKiLGf2WbwhOLlB1qA&s" alt="Instagram 2" />
          <img src="https://static.vecteezy.com/system/resources/previews/039/075/286/large_2x/ai-generated-of-a-beautiful-model-girl-in-beige-clothes-for-advertising-free-photo.jpeg" alt="Instagram 3" />
          <img src="https://plus.unsplash.com/premium_photo-1669950093661-be9dedbda440?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" alt="Instagram 4" />
          <img src="https://static.vecteezy.com/system/resources/previews/039/051/196/non_2x/ai-generated-woman-using-laptop-device-isolated-on-blue-background-smiling-female-model-holding-computer-presenting-advertising-job-search-online-shopping-online-services-photo.jpeg" alt="Instagram 5" />
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="footer-lower">
        {/* Section 1: Navigation Links */}
        <div className="footer-section">
          <ul>
            <li>Services</li>
            <li>Workshops</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Section 2: Social Media Info */}
        <div className="footer-section">
          <h3>NFLUENCE</h3>
          <p>Social Media Strategist</p>
          <div className="footer-social">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Facebook_Logo.png"
              alt="Facebook Logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png"
              alt="Twitter Logo"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Section 3: Description */}
        <div className="footer-section footer-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="footer-buy-now">
        <a href="#">BUY NOW</a>
      </div>
    </footer>
  );
};

export default Footer;

