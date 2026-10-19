import { useState } from 'react'
import './App.css'
import Footer from './Compnents/Footer.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Logo from './Pictures/logo.PNG'
import Gauge from './Pictures/gauge-chart.png'
import QEIMG from './Pictures/QEIMG.png'
import WEBIMG from './Pictures/enroll.png'
import Dentry from './Pictures/Dentry.png'
import Xfers from './Pictures/Xfers.png'
import messaging from './Pictures/messaging.png'
import folder from './Pictures/folder.png'
import investment from  './Pictures/investment.png'
import performaceAnalysis from './Pictures/performanceAnalysis.jpg'
import quickEnrol from './Pictures/quickenrol.jpg'
import webenrol from './Pictures/webenrol.jpg'
import webenroltwo from './Pictures/webenroltwo.jpg'
import dentryimg from './Pictures/dentryimg.jpg'
import securityimg from './Pictures/securityimg.png'
import cyberessencial from './Pictures/cyberessencial.png'
import AdultEducationClass from './Pictures/Adult-education-class.jpg'


function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  function scrollHome() {
    document.getElementById('scrollHome').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };


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


  function ShowSecurity() {
    setIsVisible(!isVisible)
    console.log("isVisible", isVisible)
  }

  function Performance() {
    return (
      <>
      <div className="feature-offer">
      <h2>Performance Analysis</h2>
        <p> Qualification Achievement Rates and demographic Analysis of your ILR State of the art QAR, KPI and performance analysis. </p>
        <h3> Features </h3>
        <ul>
          <li>KPI dashboard</li>
          <li>RAG views by key ILR dimensions</li>
          <li>Interactive Analysis CUBE querying</li>
          <li>reporting on ASL provision</li>
          <li>localised SAR and KPI target setting</li>
          <li>DfE Funding reports</li>
          <li>pdf report summaries by subcontracted partner</li>
          <li>optional bespoke SAR reporting</li>
          <li>OFSTED reports</li>
        </ul>
        <img className='perfomimg' src={performaceAnalysis} alt="Performance Analysis" />
        </div>
      </>
    )
  }


  function QuickEnrol() {
    return (
      <>
      <div className="feature-offer">
      <h2>Quick Enrolment</h2><p>  Streamlined rapid enrolment and publishing tools
        QuickEnrol is a suite of functionality that helps your organisation to manage all the course and enrolment information, for both staff and public.
        QuickEnrol increases the volume of enrolments that you can manage in a short space of time.
      </p>
        <ul>
          <li>Quick.Enrol interface for frontline staff</li>
          <li>Queue and enquiry management</li>
          <li>Printed enrolment confirmations with learner account statements</li>
          <li>Course information sheets</li>
          <li>Marketing brochure design support</li>
          <li>Fully integrated with LearnerTrack Web Enrol</li>
        </ul>
        <img className='quickEnrol' src={quickEnrol} alt="Quick Enrol" />
        </div>
      </>


    )
  }



  function WebEnrol() {
    return (
       <>
       <div className="feature-offer">
        <h2>Web Enrolment</h2>
        <p> Online Prospectus and public enrolment system.
          Web.Enrol publishes course information as a comprehensive online Prospectus that can be integrated with your corporate web site:
          Fully synchronised with your MIS, the public can make enquiries and enrol in a live environment.
          Our Web.Enrol product is certified to the prestigious PCIDSS security standards introduced by Visa and MasterCard to ensure cardholders details are securely protected.</p>
<ul>
 <li> Public web site automatically generated from your live MIS data</li>
 <li>Comprehensive keyword and text search facility</li>
 <li>Search by course category, location and time/day</li>
 <li>Feeds web based enquiries directly into your MIS</li>
 <li>View availability of places, live from MIS data</li>
 <li>Highest standards for Access by those with disabilities</li>
 <li>No site maintenance - automatically published from your MIS data</li>
<li>Design templates for easy integration with your own web site </li>
 <li>We are working towards a fully documented API for developers and designers</li>
 <li>Bespoke design and integration service also available</li>
</ul>
 <img className='webenrolimg' src={webenrol} alt="webenrol" />
 <img className='webenrolimg' src={webenroltwo} alt="webenrol" />
</div>
      </>
    )
  }

  function DataEntry() {
    return (
      <>
      <div className="feature-offer">
      <h2>Data Entry</h2>
      <p>Direct entry and management of core MIS data.

Data Entry is LearnerTrack's core set of user interfaces for adding, editing and reporting on data in all the key LearnerTrack data structures. This module includes all the main searching and reporting facilities that your organisation needs to manage a fast and accurate data entry team.</p>
      <ul> 
     <li>  Add and edit all your data via object managers</li>
<li>Fast and user friendly search facilities</li>
<li>Integrated lookups for LARA Learning Aims, Royal Mail Postcode data</li>
<li>Instant DfE business rule validation</li>
      </ul>
       <img className='webenrolimg' src={dentryimg} alt="dentryimg" />
      </div>
      </>
    )
  }

  function Xfer() {
    return (
      <>
       <div className="feature-offer">
      <h2>Xfer</h2>
      <p>X-fer enables data from 3rd party MIS to be imported into LearnerTrack.
X-fer enables data from 3rd party MIS to be imported, merging information from multiple subcontracted providers. X-fer offers import paths to transfer data from 3rd party systems such as your own legacy database systems and from sub-contracted providers own MIS. Data transfer can be one-off or set up as an automated service that synchronises data from your own system, enabling you to keep your existing MIS and simultaneously implement the LearnerTrack Web Enrol or Analysis to add value to your legacy MIS.</p>
   <ul>
   <li> upload portal with feedback and reporting </li>
   <li>transfer data to and from subcontrating partners</li>
   <li>provider contract management reporting</li>
   </ul>
   </div>
   </>
    )
  }

  function Messaging() {
    return (
      <>
       <div className="feature-offer">
      <h2>Messaging</h2>
      <p>
LearnerTrack internal communications system.
The Messages module allows users to send and receive messages within LearnerTrack; so you do not need to send personal data over email. You can send a message to individuals or a named group. .
      </p>
      <ul>
        <li>group subscriptions</li>
        <li>notifications</li>
        <li>removes need to send personal data over email</li>
        <li>get updates on the system and pending changes</li>
        <li>pass information to groups within our organisation</li>
        <li>very easy to use</li>
      </ul>
<h2>Internal </h2>
<p>Internal and external communications system.
The Messaging modules combine the power of email and SMS messaging to make sure everyone has the information they need, when they need it, automatically.</p>
<ul>
 <li> Automated SMS and email warnings to staff and learners when courses are cancelled, Bad Attendance, Enrolemnt information ect.</li>
 <li> A user interface for texting Ad hoc messages to individuals and groups</li>
</ul>
</div>
      </>
    )
  }

  function ILR() {
    return (
      <>
       <div className="feature-offer">
      <h2>ILR</h2>
      <p> ILR manager.
Comprehensive management for ILR data and XML files.</p>
<ul>
  <li>ILR generation in seconds</li>
  <li>support for all DfE funding streams</li>
  <li>View individual ILR data entities</li>
  <li>download XML ILR files for subcontractors</li>
</ul>
</div>
      </>
    )
  }

  function Finance() {
    return (
      <>
       <div className="feature-offer">
      <h2>Finance</h2>
      <p>
        Financial tools for course fees, payments and cash flow.
Fees module provides you with basic financial management tools to track all the fee income relating to your courses as well as payments relating to examination fees, materials, overheads and any other ad-hoc charges you need to record against learner or course accounts.
      </p>
      <ul>
        <li>Individual learner accounts</li>
        <li>Course accounts</li>
        <li>Fully editable nominal accounts</li>
        <li>Cash flow and fee income summaries</li>
        <li>Creditor and debtor lists</li>
        <li>Comprehensive audit trails</li>
      </ul>
      </div>
      </>
    )
  }



  return (

    <>



      <body>
        <div className="site-banner">
          <header className="site-header" id='scrollHome'>


           
            <div className="navbar">
               <img className="logo" src={Logo} alt="Monterpoint Logo" />
              <nav>
                <ul className="nav-links">
                  <li className="nav-item" onClick={() => { scrollHome() }}><a href="#"> Home</a></li>
                  <li className="nav-item" onClick={() => { scrollLearnerTrack() }}><a href="#">LearnerTrack</a></li>
                  <li className="nav-item" onClick={() => { scrollAbout() }}><a href="#">About Us</a></li>
                  <li className="nav-item" onClick={() => { scrollSupport() }}><a href="#">Support</a></li>
                  <li className="nav-item" onClick={() => { scrollService() }}><a href="#">Service</a></li>
                </ul>
              </nav>
            </div>
          </header>
        </div>


       
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
              <li >  25 Years of uninterrupted Service </li>
              <li > A Cloudbased system with zero maintenance overheads </li>
              <li > Secure access from anywhere</li>
              <li > Ideal for subcrontracting with QAR based performance reporting</li>
              <li > Personal Dashboards and self-enrolment for learners online</li>
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


          <BrowserRouter>
            <nav>
              <div className="info-grid">
                <div className="info-card">

                  <NavLink to="/performance" className="nav-item"> Performance Analysis
                  <br></br>
                <img  className="img-gauge" src={Gauge} alt="gauge" /> 
                    <p>Qualification Achievement Rates and demographic Analysis of your ILR
                      State of the art QAR, KPI and performance analysis.</p>
                  </NavLink >
                </div>

                <div className="info-card">
                  <NavLink to="/quickenrol">
                    Quick Enrol
                    <br></br>
                   <img  className="img-enrol"  src={QEIMG} alt="Enrol" /> 
                    <p>Quick Enrol is a suite of functionality that helps your organisation to manage all the course and enrolment information,
                      for both staff and public.</p>
                  </NavLink >
                </div>
                <div className="info-card">
                  <NavLink to="/webenrol">
                    Webenrol
                    <br></br>
                    <img  className="img-webenrol"  src={WEBIMG} alt="web Enrol" /> 
                    <p>We are proud to offer a new version of our WebEnrol system, with more functionality and improved user experience.</p>
                  </NavLink >
                </div>
                <div className="info-card">
                  <NavLink to="/dataEntry">
                    Data-Entry
                    <br></br>
                    <img  className="img-dentry" src={Dentry} alt="data entry" /> 
                    <p>Data Entry is LearnerTrack's core set of user interfaces for adding, editing and reporting on data in all the key LearnerTrack data structures.</p>
                  </NavLink>
                </div>
                <div className="info-card">
                  <NavLink to="/xfer">
                    Xfer
                    <br></br>
                    <img  className="img-Xfer" src={Xfers} alt="Xfers" /> 
                    <p>X-fer enables data from 3rd party MIS to be imported, merging information from multiple subcontracted providers.</p>
                  </NavLink>
                </div>
                <div className="info-card">
                  <NavLink to="/messaging">
                    Messaging
                    <br></br>
                    <img  className="img-messaging" src={messaging} alt="messaging" /> 
                    <p>Messaging is a LearnerTrack module that enables you to send messages to learners with ease</p>
                  </NavLink>
                </div>
                <div className="info-card">
                  <NavLink to="/ilr">
                    ILR
                     <br></br>
                    <img  className="img-folder" src={folder} alt="folder" /> 
                    <p>Comprehensive management for ILR data and XML files.</p>
                  </NavLink>
                </div>
                <div className="info-card">
                  <NavLink to="/finance">
                    Finance
                    <br></br>
                    <img  className="img-investment" src={investment} alt="investment" /> 
                    <p>Financial tools for course fees, payments and cash flow</p>
                  </NavLink>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/performance" element={<Performance />} />
              <Route path="/quickenrol" element={<QuickEnrol />} />
              <Route path="/webenrol" element={<WebEnrol />} />
              <Route path="/dataEntry" element={<DataEntry />} />
              <Route path="/xfer" element={<Xfer />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/ilr" element={<ILR />} />
              <Route path="/finance" element={<Finance />} />
            </Routes>
          </BrowserRouter>


          <div className="aboutSection">
          <h1 className="header-color" id="scrollAbout">About Monterpoint Technologies</h1>
          <p><strong>Who are we?</strong> We are a web company dedicated to supporting DfE funded learning providers. Our team has been securely hosting local
            authority MI systems for over 20 years. We are determined to bring you support, security and influence over ongoing projects
          </p>
          <p><strong>Technology and Security: </strong>
            LearnerTrack is hosted in a secure, state-of-the-art facility in UK via a diverse-routed resilient multi-Gbps Internet connection.
            LearnerTrack and its data is secured against physical and digital attacks. Your customers data and information is safe and private.
            The product also provides tools and monitoring to help customers implement security with their teams. </p>
            </div>
          <button className="security-button" onClick={ShowSecurity}> See Specs</button>
          {isVisible &&
            <><div>
              <h2>Technology</h2>
              <p>LearnerTrack is hosted in a secure dedicated server farm connected to a super-fast secure network.</p>

              <h3>Hosting Environment</h3>
              <ul>
                <li>Prime Tier III UK data centre location</li>
                <li>ISO 27001 accreditation for IT security</li>
                <li>Diverse N+1 power supply</li>
                <li>On-site diesel generators</li>
                <li>24/7 on-site security and support</li>
                <li>48+ cameras with 90 day minimum recordings</li>
                <li>Multiple redundant cooling systems</li>
                <li>Multiple diverse network connections</li>
              </ul>
              <h2>Security Specifications</h2>
              <p>
                LearnerTrack and its data is secured against physical and digital attacks. Your customers data and information is safe and private. The product also provides tools and monitoring to help customers implement security with their teams.
              </p>
              <h3>Physical Security</h3>
              <p>
                Security personnel guard the co-location sites 24 hours a day seven days a week. In addition intruder detection systems, CCTV, and card access systems control access both internally and externally.
              </p>
              <h3>Access Provision</h3>
              <p>
                The precise location of our physically secure hosting site is kept confidential. Access to the LearnerTrack Servers is limited to authorized Monterpoint engineers, by special arrangement once a thorough identity confirmation procedure has been passed.
              </p>
              <h3>Power Supply</h3>
              <p>
                The electrical supply to both remote access and power management devices, and hence to the LearnerTrack Servers is via an uninterruptible power supply (UPS), it will continue to run in the event of an external power supply failure with no disruption to the LearnerTrack Service.
              </p>
              <h3>Environment</h3>
              <p>
                A constant ambient temperature of 22° Celsius (plus/minus 2° Celsius) and a relative humidity of 30% to 70% are maintained.
              </p>
              <h3>Fire Detection and Prevention</h3>
              <p>
                The fire detection system will provide the earliest possible warning and covers all areas, including under false floors.
              </p>
              <h3>Back-up/Restore and Disaster Recovery</h3>
              <ul>
                <li>Daily Back-up of Entire Database</li>
                <li>Daily back-ups rotated on weekly cycle</li>
                <li>Weekly Back-up of Entire Database</li>
                <li>Full Data roll back to any point during the previous 2 months</li>
              </ul>


            </div></>
          }

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

<div className='verify'>
      <h2> Verified By</h2>
      <img className='securityimg' src={securityimg} alt="security liecence" />
       <img className='securityimg' src={cyberessencial} alt="security liecence" />
</div>
      <Footer />




    </>


  )
}

export default App;
