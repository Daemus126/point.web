import { useState } from 'react'
import './App.css'
import Footer from './Compnents/Footer.jsx'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Logo from './Pictures/Monterpoint_logo.jpg'
import LTlogo from './Pictures/LTlogo.png'
import Gauge from './Pictures/gauge-chart.png'
import QEIMG from './Pictures/QEIMG.png'
import WEBIMG from './Pictures/enroll.png'
import AttendanceIMG from './Pictures/Attendance.jpg'
import Dentry from './Pictures/Dentry.png'
import Xfers from './Pictures/Xfers.png'
import messaging from './Pictures/messaging.png'
import folder from './Pictures/folder.png'
import investment from './Pictures/investment.png'
import performaceAnalysisIMG from './Pictures/performanceAnalysis.jpg'
import quickEnrolIMG from './Pictures/quickenrol.jpg'
import webenrolIMG from './Pictures/webenrol.jpg'
import dentryimg from './Pictures/dentryimg.jpg'
import interconection from './Pictures/interconection.png'
import WSmycourses from './Pictures/westsussexmycourses.JPG'


function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isWebenrolVisible, setIsWebenrolVisisble] = useState(false)

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

  function scrollwebenrol() {
    document.getElementById('scrollwebenrol').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };

  function scrollfooter() {
    document.getElementById('scrollfooter').scrollIntoView({
      behavior: 'smooth'
    });
    console.log("clcikScroll")
  };

  function scrollUnder() {
    document.getElementById('scrollUnder').scrollIntoView({
      behavior: 'smooth'
    });
  }

  function ShowSecurity() {
    setIsVisible(!isVisible)
    console.log("isVisible", isVisible)
  }

  function ShowWebenrol() {
    setIsWebenrolVisisble(!isWebenrolVisible)
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
          <img className='perfomimg' src={performaceAnalysisIMG} alt="Performance Analysis" />
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
          <img className='quickEnrol' src={quickEnrolIMG} alt="Quick Enrol" />
        </div>
      </>


    )
  }



  function RollCall() {
    return (
      <>
        <div className="feature-offer">
          <h2>RollCall</h2>
          <p>RollCall records individual learner attendances via web registers. Ideal for both administrators and tutors, RollCall helps automate the recording
            of ILR completions and withdrawals from register data, streamlining this process and highlighting both attendance and ILR audit issues.</p>
          <ul>
            <li>Tracks attendance simply and effectively</li>
            <li>User-friendly register view and update</li>
            <li>Automates and validates ILR completions and withdrawals process</li>
            <li>Alerting of badly attended courses etc.</li>
            <li>Printed registers</li>
          </ul>
          <img src={AttendanceIMG} alt="Attendance" />

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
          <img className='denty' src={dentryimg} alt="dentryimg" />
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
          <h2>ILR & Buisness Rules</h2>
          <p> ILR manager.
            Comprehensive management for ILR data and XML files.</p>
          <ul>
            <li>ILR generation in seconds</li>
            <li>support for all DfE funding streams</li>
            <li>View individual ILR data entities</li>
            <li>download XML ILR files for subcontractors</li>
          </ul>

          <p>FIS</p>
          <p> Conection to FIS to track your ILR warnings and errors</p>
           <p> In-built LearnerTrack warnng an error systems to keep your data in order</p>
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
            <img className="logo" src={Logo} alt="Monterpoint Logo" />
          </header>
        </div>


        <div className="navbar">
          <nav>
            <ul className="nav-links">
              <li className="nav-item" onClick={() => { scrollHome() }}> Home</li>
              <li className="nav-item" onClick={() => { scrollLearnerTrack() }}>LearnerTrack</li>
              <li className="nav-item" onClick={() => { scrollwebenrol() }}>Webenrol</li>
              <li className="nav-item" onClick={() => { scrollAbout() }}>About Us</li>
              <li className="nav-item" onClick={() => { scrollSupport() }}>Support</li>
              <li className="nav-item" onClick={() => { scrollService() }}>Service</li>
              <li className="nav-item" onClick={() => { scrollfooter() }}>Contact us</li>
            </ul>
          </nav>
        </div>


        <div className="sub-banner" >
          <h1>LearnerTrack</h1>
          <h2> a verstatile, secure, cost-effective and reliable cloud based MIS</h2>
          <p> 20 years of continuous development with local authority adult learning services, supporting all DfE
            funding streams.</p>
        </div>


        <main>
          <div className='center-items'>
            <div className="Section-Header">

              <img className='Ltlogo' src={LTlogo} alt="learnerTrack logo" />
              <h2 className="header-color">A cloud-based MIS for local authorities</h2>
              <p><strong>LearnerTrack</strong> is a feature rich, cost-effective MIS for local authority adult education services. Designed
                from the start as a cloud based solution, it supports all DfE funding streams.Whether you are an
                administrator, educator, or learner, LearnerTrack
                provides the tools you need to
                manage your educational environment effectively. Explore our features and see how LearnerTrack can
                benefit your institution.
              </p>


              <h1 className="header-color">What We offer</h1>

              <ul className="feature-list">
                <li >  25 Years of uninterrupted Service </li>
                <li > A Cloudbased system with zero maintenance overheads </li>
                <li > Secure access from anywhere</li>
                <li > Ideal for subcrontracting with QAR based performance reporting</li>
                <li > Personal Dashboards and self-enrolment for learners online</li>
                <li> Unlimited Users</li>

              </ul>


            </div>
            <div className='scrolldiv' id='scrollLearnerTrack'></div>

            <h3 className="info-grid-title" >Key Features:</h3>


            <BrowserRouter>
              <nav>
                <div className="info-grid">
                  <div className="info-card" onClick={scrollUnder}>
                    <div className="container">
                      <img className="img-gauge" src={Gauge} alt="gauge" />
                    </div>
                    <NavLink to="/performance" className="nav-item">
                      <h3>Performance Analysis</h3>
                      <p>QAR, KPI and performance reporting.</p>
                    </NavLink >
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-enrol" src={QEIMG} alt="Enrol" />
                    </div>
                    <NavLink to="/quickenrol">
                      <h3> Quick Enrol</h3>
                      <p>Manage all the course and enrolment information in one place</p>
                    </NavLink >
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-webenrol" src={WEBIMG} alt="web Enrol" />
                    </div>
                    <NavLink to="/RollCall">
                      <h3>RollCall</h3>
                      <p>Online class register and attendance monitoring</p>
                    </NavLink >
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-dentry" src={Dentry} alt="data entry" />
                    </div>
                    <NavLink to="/dataEntry">
                      <h3>Data-Entry</h3>
                      <p>Control over all your data</p>
                    </NavLink>
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-Xfer" src={Xfers} alt="Xfers" />
                    </div>
                    <NavLink to="/xfer">
                      <h3>Xfer</h3>
                      <p>Enables data from 3rd party MIS to be imported, perfect for subcontacter merging</p>

                    </NavLink>
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-messaging" src={messaging} alt="messaging" />
                    </div>
                    <NavLink to="/messaging">
                      <h3>Messaging</h3>
                      <p>Send messages to learners with ease</p>
                    </NavLink>
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-folder" src={folder} alt="folder" />
                    </div>
                    <NavLink to="/ilr">
                      <h3>ILR</h3>
                      <p>Data quality is central to LearnerTrack</p>
                    </NavLink>
                  </div>

                  <div className="info-card" onClick={scrollUnder}>
                    <div class="container">
                      <img className="img-investment" src={investment} alt="investment" />
                    </div>
                    <NavLink to="/finance">
                      <h3>Finance</h3>
                      <p>Financial tools for course fees, payments and cash flow</p>
                    </NavLink>

                    <div id="scrollUnder"></div>
                  </div>
                </div>


              </nav>
              <Routes>
                <Route path="/performance" element={<Performance />} />
                <Route path="/quickenrol" element={<QuickEnrol />} />
                <Route path="/RollCall" element={<RollCall />} />
                <Route path="/dataEntry" element={<DataEntry />} />
                <Route path="/xfer" element={<Xfer />} />
                <Route path="/messaging" element={<Messaging />} />
                <Route path="/ilr" element={<ILR />} />
                <Route path="/finance" element={<Finance />} />
              </Routes>
            </BrowserRouter>

          </div>

          <div id="scrollUnder"></div>

          <div className="webenrol" id='scrollwebenrol'>
            <div className="webenrolcard">
              <div className='webenroltext'>
                <h1> Webenrol V2</h1>
                <h2> We are proudly launching our new webenrol system that gives you more flexibility and greater support for your learners</h2>
                <p> Our new version of webenrol goes above and beyond to bring you all the functionality you need to make your Users have a peaceful and informative
                  experince. With new personal dashboards to store course information, personal calanders and Target setting functionality, you users will have acess to
                  all the information they need to support their learning.
                </p>
                <button className="seemore" onClick={ShowWebenrol}> See More </button>
              </div>

            </div>
            <div className="webenrolcard">
              <img className='webenrolimg' src={webenrolIMG} alt="webenrol" />
            </div>
          </div>
          {isWebenrolVisible &&
            <div className="webenrolfeatures">
              <div className="webenrolfeaturescard">
                <div className='webenroltext'>
                  <h1>More For you</h1>
                  <h3>
                    WebEnrol publishes course information as a comprehensive online Prospectus that can be integrated with your corporate web site:
                    Fully synchronised with your MIS, Learners can enrol, see upcoming courses and manage their classes with a personalised dashboard.</h3>
                  <ul>
                    <li> Public web site automatically generated from your live MIS data</li>
                    <li>Connection to learners tools like, google classroom and BKSB</li>
                    <li>Personalised calenders and Course Information</li>
                    <li>Both Sitewide and individual alert systems</li>
                    <li>Feeds web based enquiries directly into your MIS</li>
                    <li>Documents center for ILP's, LAGS and eligibility information</li>
                    <li>Highest standards for Access by those with disabilities</li>
                    <li>No site maintenance - automatically published from your MIS data</li>
                    <li>Design templates for easy integration with your own web site </li>
                    <li>Bespoke design and integration service also available</li>
                    <li>Certified to the PCIDSS security standards introduced by Visa and MasterCard to ensure cardholders details are securely protected </li>
                  </ul>
                </div>
              </div>
              <div className="webenrolfeaturescard">
                <img className='WSmycourses' src={WSmycourses} alt="My-courses section" />
              </div>
            </div>
          }





          <div className='scrolldiv' id="scrollAbout"></div>
          <div className='center-items'>
            <div className="aboutSection">
              <h1 className="header-color" >About Monterpoint Technologies</h1>
              <p>Monterpoint Technologies is one of the UK’s
                largest providers of DfE/ILR oriented software
                as a service (SASS) with over 20 local authority
                customers and over 1,000 active users. Our
                flagship product, LearnerTrack, was the first pure
                web based DfE MIS in the UK and we have been
                building on it’s features and capability for 20 years. </p>
              <p>
                Monterpoint Technologies as an organisation
                specialises exclusively in the support and
                maintenance of LearnerTrack MIS and so all of
                our creative energy is focused on improving
                and building on it’s features.
                By continually investing in our people,
                partnerships and technologies, we have
                continually evolved LearnerTrack to meet
                the ever increasing demands for online adult
                education services and the changing needs
                of our customers. Our Cloud-first strategy
                is enabling our customers to realise cost
                efficiencies and meet the challenges of
                delivering online education services head on.
              </p>
              <p>
                Our feature development priorities are wholly
                set by our active usergroup of Local Authority
                adult education services and we continually
                strive to improve the service through regular
                communication with our customers.
              </p>
              <p><strong>Technology and Security: </strong>
                LearnerTrack is hosted in a secure, state-of-the-art facility in UK via a diverse-routed resilient multi-Gbps Internet connection.
                LearnerTrack and its data is secured against physical and digital attacks. Your customers data and information is safe and private.
                The product also provides tools and monitoring to help customers implement security with their teams. </p>

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
            </div>
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


              <div className='scrolldivsupport' id="scrollSupport"></div>

              <h3 >Minimal IT expertise needed</h3>
              <p className="feature-color">  Anyone can use LearnerTrack, we endeavour to make LeanerTrack as user friendly as possible so that anyone is able to use our system.
                We offer free training sessions for SuperUsers, training sessions can be organised at any time and on any particular topic that
                you need more guidnace on.
              </p>

              <h3 >Support </h3>
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
          </div>

          <div className='pageDivideDiv'>
            <div className="pageDivide">
              <div className='center-items'>
                <p className='pagedivtext'>
                  "The inexorable, gravitational pull
                  of remote working practices and
                  online learning
                  has made us all more
                  connected than ever."
                </p>
                <p>Over two decades learnerTrack MIS has built interconnectivity to facillitate remote partnership working.
                  You can give access to your centralised systems to partner providers, each having strictly controlled
                  access to their own data and reporting. A network of web services manage connections to DfE, LRS,
                  Google Classroom, BKSB, payment card services, Royal Mail addressing, email verification systems and SMS
                  messaging via GOV.UK Notify.</p>
              </div>
            </div>
            <div className='interconectiviityBanner'>
              <div className='center-items'>
                <img className='interconectiviity' src={interconection} alt="Interconectiviity" />
              </div>
            </div>
          </div>


        </main>


      </body >

  {/*
      <div className='verify' id='scrollfooter'>
        <h2> Verified By</h2>
        <img className='securityimg' src={cyberessencial} alt="security liecence" />
      </div>
        */}
      <Footer />





    </>


  )
}

export default App;
