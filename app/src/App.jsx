import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (



    <>

      <body>
        <div className="site-banner">
          <header className="site-header">



            <div className="navbar">
              <nav>
                <ul className="nav-links">
                  <li  className="nav-item"><a href="#">Home</a></li>
                  <li className="nav-item"><a href="#">About Us</a></li>
                  <li className="nav-item"><a href="#">LearnerTrack</a></li>
                  <li className="nav-item"><a href="#">Support</a></li>
                  <li className="nav-item"><a href="#">Service</a></li>
                  <li className="nav-item"><a href="#">Contact Us</a></li>
                </ul>

              </nav>
            </div>


            <img className="eyebrow" src="Pictures/monterpoint.logo.blue.pdf" alt="Monterpoint Logo" />
            <h1>LearnerTrack</h1>
            <h2> a verstatile, secure, cost-effective and reliable cloud based MIS</h2>
            <p> 20 years of continuous development with local authority adult learning services, supporting all DfE
              funding streams.</p>
          </header>
        </div>

<main>
        <div className="Section-Header">
          <h1 className="header-color">Welcome to LearnerTrack</h1>
          <h3 className="header-color">A cloud-based MIS for local authorities</h3>
          <p><strong>LearnerTrack</strong> is a feature rich, cost-effective MIS for local authority adult education services. Designed
            from the start as a cloud based solution, it supports all DfE funding streams.Whether you are an
            administrator, educator, or learner, LearnerTrack
            provides the tools you need to
            manage your educational environment effectively. Explore our features and see how LearnerTrack can
            benefit your institution.
          </p>


          <h2 className="header-color"> What makes us different from other suppliers?</h2>
          <ul className="feature-list">
            <li> Three development cycles per year, that are shaped by you. </li>
            <li> Round the clock support, including non-AI live chat support. </li>
            <li> Completely accessible from anywhere, our whole system can be accessed through a web browser,
              meaning no installations on your end. </li>
            <li> Minimal IT expertise needed.</li>
          </ul>
        </div>


        <h3 className="info-grid-title">Key Features:</h3>
        <div className="info-grid">

          <button className="info-card"  > <a href="app/Pages/Performance.html">Performance Analysis </a> </button>

          <div className="info-card">
            Quick Enrol
          </div>
          <div className="info-card">
            Webenrol
          </div>
          <div className="info-card">
            Data-Entry
          </div>
          <div className="info-card">
            Xfer
          </div>
          <div className="info-card">
            Messaging
          </div>
          <div className="info-card">
            Community lead updates
          </div>
          <div className="info-card">
            Finance
          </div>
        </div>
 </main>




      </body>





      <footer>



      </footer>

    </>


  )
}

export default App;
