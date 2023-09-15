import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import image6 from './Shopping-pana.png';
import './BoutiqueHome.css';
import image7 from './Shopping-pana.png';
import image8 from './Thrift shop-bro.png'

function BoutiqueHome() {
    return (
        <>
        <div id="App">
          <header id="App-header">
          <div id="move-top">
          <div id="right-corner">
          <Link to="/login">
          <span id="login-span">Login </span>
          </Link>
          <Link to="/register">
          <span id="signup-span"> Signup</span>
          </Link>
          </div>
          </div>
            <nav id="navbar">
              <div id="nav-container">
                <Link to="/" id="logo">
                  <img alt="logo" src={image7} style={{ width: '50px' }} />
                  <span id="logo-name">Ryzoo</span>
                </Link>
              </div>
            </nav>
            <div id="content">
              <h1 id="title11">Contact Management System</h1>
            </div>
          </header>
          <div id="page">
            <div id="left">
              <img src={image6} style={{width: '400px'}} alt="image" id="moving-image" />
            </div>
            <div id="right">
              <h2 style={{fontSize: "30px"}}>Welcome to Management</h2>
              <p id="text-para-1">
              Welcome to the Contact Management System
              This is the home page of the contact management system.
              Here, you can manage your contacts and keep track of important information.
               Get started by navigating to the {/*<Link to="/" id="home-link">/}Contacts page{/</Link>*/}
              </p>
            </div>
          </div>
          <Outlet />
         <Link to="/register">
         <button id="btn-start">Get Started free</button>
         </Link>
        </div>
        <div id="empty-space"></div>
        <div id="second-para">
         <h1 id="heading-space">
            Build relationships at scale with contact management tools.
         </h1>
         <p id="para-text-2">
         Customers and prospects are the lifeblood of your business. 
         But organizing all of their information can be challenging.
         With Ryzoo's contact management tools, you have everything 
         you need to create, organize, and grow relationships with 
         customers and leads. Create up to 1,000,000 contact and 
         company records, perform and log activities such as emails 
         and calls, and eliminate manual data entry with software 
         that updates your contacts automatically.
         </p>
         </div>
         <div id="App-2">
          <div id="page">
            <div id="left">
              <img id="image-webp" src={image8} style={{width: '400px'}} alt="image" />
            </div>
            <div id="right">
              <h2>Welcome to Management</h2>
              <p id="text-para-1">
              Welcome to the Contact Management System
              This is the home page of the contact management system.
              Here, you can manage your contacts and keep track of important information.
              Get started by navigating to the <Link to="/contacts" id="home-link">Contacts page</Link>.
              </p>
            </div>
          </div>
          <Outlet />
        </div>
        <div id="App-2">
          <div id="page">
            <div id="right">
              <h2 style={{marginLeft:"50px"}}>Welcome to Management</h2>
              <p id="text-para-1" style={{marginLeft:"50px"}}>
              Welcome to the Contact Management System
              This is the home page of the contact management system.
              Here, you can manage your contacts and keep track of important information.
              Get started by navigating to the <Link to="/contacts" id="home-link">Contacts page</Link>.
              </p>
            </div>
            <div id="left">
              <img id="image-webp" src={image8} style={{width: '400px'}} alt="image" />
            </div>
          </div>
          <Outlet />
        </div>
        <div id="empty-space" style={{height: "50px"}}></div>
        <div id="center-qn">
        <div id="number-63">
        <p id="number-center">Have questions? Give us a call and we'll walk you through it.<Link>+916382928789</Link></p>
        
        </div>
        </div>
        </>
        
  );
}

export default BoutiqueHome;