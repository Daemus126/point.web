import { useState } from 'react'
import './App.css'
import Footer from './Compnents/Footer.jsx'
import Performance from './Compnents/Performance.jsx'


function App() {
  const [count, setCount] = useState(0)


  function scrollLearnerTrack() {
    document.getElementById('scrollLearnerTrack').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };

  function scrollAbout() {
    document.getElementById('scrollAbout').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };

  function scrollSupport() {
    document.getElementById('scrollSupport').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };

  function scrollService() {
    document.getElementById('scrollService').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };


  return (





    <>

      <body>
        <div className="site-banner">
          <header className="site-header">


  <img className="eyebrow" src="Pictures/logo.PNG" alt="Monterpoint Logo" />
            <div className="navbar">
              <nav>
                <ul className="nav-links">
                  <li className="nav-item"><a href="#">Home</a></li>
                  <li className="nav-item" onClick={() => { scrollLearnerTrack() }}><a href="#">LearnerTrack</a></li>
                  <li className="nav-item" onClick={() => { scrollAbout() }}><a href="#">About Us</a></li>
                  <li className="nav-item" onClick={() => { scrollSupport() }}><a href="#">Support</a></li>
                  <li className="nav-item" onClick={() => { scrollService() }}><a href="#">Service</a></li>
                </ul>
              </nav>
            </div>
          </header>
        </div>


      <img src="./Adult-education-class.jpg" alt="Adult Education Class"/>
      <div className="sub-banner" >
        <h1>LearnerTrack</h1>
        <h2> a verstatile, secure, cost-effective and reliable cloud based MIS</h2>
        <p> 20 years of continuous development with local authority adult learning services, supporting all DfE
          funding streams.</p>
          </div>
          

        <main>
          <div className="Section-Header">
            <h1 className="header-color">Whate We offer</h1>

            <ul className="feature-list">
              <li> <img src="Pictures/tick.PNG" alt="Tick Mark" /> 25 Years of uninterrupted Service </li>
              <li> A Cloudbased system with zero maintenance overheads </li>
              <li> Secure access from anywhere</li>
              <li> Ideal for subcrontracting with QAR based performance reporting</li>
              <li> Personal Dashboards and self-enrolment for learners online</li>
              <li> Unlimited Users</li>
            </ul>
            <h3 className="header-color">A cloud-based MIS for local authorities</h3>
            <p><strong>LearnerTrack</strong> is a feature rich, cost-effective MIS for local authority adult education services. Designed
              from the start as a cloud based solution, it supports all DfE funding streams.Whether you are an
              administrator, educator, or learner, LearnerTrack
              provides the tools you need to
              manage your educational environment effectively. Explore our features and see how LearnerTrack can
              benefit your institution.
            </p>

          </div>

          <h3 className="info-grid-title" id='scrollLearnerTrack'>Key Features:</h3>
          <div className="info-grid">

            <div className="info-card">Performance Analysis
              <p>Qualification Achievement Rates and demographic Analysis of your ILR
                State of the art QAR, KPI and performance analysis.</p>
            </div>

            <div className="info-card">
              Quick Enrol
              <image src="./QuickEnrol.png" alt="Quick Enrol" />
              <p>Quick Enrol is a suite of functionality that helps your organisation to manage all the course and enrolment information,
                for both staff and public.</p>
            </div>
            <div className="info-card">
              Webenrol
              <p>We are proud to offer a new version of our WebEnrol system, with more functionality and improved user experience.</p>
            </div>
            <div className="info-card">
              Data-Entry
              <p>Data Entry is LearnerTrack's core set of user interfaces for adding, editing and reporting on data in all the key LearnerTrack data structures.</p>
            </div>
            <div className="info-card">
              Xfer
              <p>X-fer enables data from 3rd party MIS to be imported, merging information from multiple subcontracted providers.</p>
            </div>
            <div className="info-card">
              Messaging
              <p>Messaging is a LearnerTrack module that enables you to send messages to learners with ease</p>
            </div>
            <div className="info-card">
              ILR <p>Comprehensive management for ILR data and XML files.</p>
            </div>
            <div className="info-card">
              Finance
              <p>Financial tools for course fees, payments and cash flow</p>
            </div>

          </div>

          <h1 className="header-color" id="scrollAbout">About Monterpoint Technologies</h1>
          <p><strong>Who are we?</strong> We are a web company dedicated to supporting DfE funded learning providers. Our team has been securely hosting local
            authority MI systems for over 20 years. We are determined to bring you support, security and influence over ongoing projects
          </p>
          <p><strong>Technology and Security: </strong>
            LearnerTrack is hosted in a secure, state-of-the-art facility in UK via a diverse-routed resilient multi-Gbps Internet connection.
            LearnerTrack and its data is secured against physical and digital attacks. Your customers data and information is safe and private.
            The product also provides tools and monitoring to help customers implement security with their teams. </p>

            <button className="security-button"> See Specs</button>

          <div className="feature-offer">

            <h2 > What makes us different from other suppliers?</h2>
            <ul className="feature-list">
              <li> Three development cycles per year, that are shaped by you. </li>
              <li> Round the clock support, including non-AI live chat support. </li>
              <li> Completely accessible from anywhere, our whole system can be accessed through a web browser,
                meaning no installations on your end. </li>
              <li> Minimal IT expertise needed.</li>
            </ul>




            <h3 >Development</h3>
            <p className="feature-color"> We always endover to bring you a growing and improved platform that fits your needs. We take request for changes throughut the year running three devlopment cycles.
              that are shaped by you and other councils. We run usergroup meetings and votes to shape our deployments and next steps. Recent changes include new progession measures, deeper analysis options and further work on Webenrol.
              You input is impoptant as it is use our system and we want to make sure it is the best it can be for you.
            </p>


            <h3 >Minimal IT expertise needed</h3>
            <p className="feature-color">  Anyone can use LearnerTrack, we endeavour to make LeanerTrack as user friendly as possible so that anyone is able to use our system.
              We offer free training sessions for SuperUsers, training sessions can be organised at any time and on any particular topic that
              you need more guidnace on.
            </p>

            <h3 id='scrollSupport'>Support </h3>
            <p className="feature-color"><strong>Our Support</strong> is free and provided to all LearnerTrack named Superusers within working hours.
              As well as the comprehensive online, context sensitive user guide, our dedicated support team monitors incoming e-mails,
              providing a rapid response service offering on-the-spot guidance and support and tracking progress of more complex queries.
              We also provide a a live chat system where you will be matched with
              one of our support team members to help you with your query. Along side this we host a forum to connect you with other local authorities for support, adivse and connection.
            </p>

            <p className="feature-color"><strong>Training World</strong> Complete replication of your entire system for Training purposes.
              Training World is a complete replication of your entire LearnerTrack system that you can use for training and other scenarios where you want to 'play' with
              the system without worrying about making accidental changes in your live data. We maintain and support your training system at the same level as your live database
              so it is always available to you.
            </p>

          </div>



          <div className="service-section" id='scrollService'>
            <h2>Services</h2>
            <p>
              LearnerTrack in-house staff are available for all your outsourced data entry requirements. We can provide professional assessments and planning to help you manage your information and data processes.
              Localise your LearnerTrack system to meet your individual business requirements, off the shelf and bespoke training and bespoke Development projects.
            </p>

            <h3>Bureau</h3>
            <p>LearnerTrack Data Entry Bureau.

              LearnerTrack in-house staff are available for all your outsourced data entry requirements. Courses, learners and enrolments can all be processed via our efficient and cost-effective bureau service,</p>

            <h3>Consultancy</h3>
            <p>We can provide professional assessments and planning to help you manage your information and data processes.

              The Monterpoint support team have a wide range of hands-on experience working within the SFA funded sector as well as a detailed working knowledge of LearnerTrack software. We can provide you with guidance and planning to help you manage your information and data processes as well as clear, professional advice and support on a range of operational detail.</p>

            <h3>Training</h3>
            <p>Off the shelf and bespoke training.

              LearnerTrack Training packages are available to support all your key operational staff. Our experienced support team will help your people to get the best from LearnerTrack, each according to their individual job related needs. We can arrange bespoke in-house training packages, particularly suited to initial system implementation. There are also open-house workshops advertised to the network during the year, held in convenient locations. Whatever your LearnerTrack training needs, our team can work with you to meet them.</p>

            <h3>Bespoke Development projects.</h3>
            <p>Bespoke development can be purchased from Monterpoint at any time in the yearly cycle. Our design and development team can work with you on both LearnerTrack development projects and standalone software development. Quotations and delivery schedules are available on a case by case basis.</p>

          </div>


        </main>


      </body >

  <img src="awards/cybersecurity-licence.png" alt="Cybersecurity Licence"/>

      <Footer />




    </>


  )
}

export default App;
