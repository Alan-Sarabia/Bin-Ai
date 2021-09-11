import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
 
} from 'react-icons/fa';
import { RiRecycleFill } from 'react-icons/ri';


function Footer() {
  
  return (
   
  

    

<footer>
  <div class="centered clearfix">
    
    
    <div class="footer-contact">
       <h3><a href="">Contactos</a></h3>
       <p><a href="mailto:">fake@fake.com</a></p>
       <p><a href="tel:">123-456-7890</a></p>
       <p><a href="">123 Fake St<br />Fake, PA 11111</a></p>
    </div>
    <div class="footer-navigation">
      <div class="footer-links-holder">
        <h3><a href="">Section 1</a></h3>
        <ul class="footer-links">
          <li><a href="">Page Title 1</a></li>
          <li><a href="">Page Title 2</a></li>
          <li><a href="">Page Title 3</a></li>
          <li><a href="">Page Title 4</a></li>
        </ul>
      </div>
      <div class="footer-links-holder">
        <h3><a href="">Section 2</a></h3>
        <ul class="footer-links">
          <li><a href="">Page Title 1</a></li>
          <li><a href="">Page Title 2</a></li>
          <li><a href="">Page Title 3</a></li>
          <li><a href="">Page Title 4</a></li>
        </ul>
      </div>
      <div class="footer-links-holder">
        <h3><a href="">Section 3</a></h3>
        <ul class="footer-links">
          <li><a href="">Page Title 1</a></li>
          <li><a href="">Page Title 2</a></li>
          <li><a href="">Page Title 3</a></li>
          <li><a href="">Page Title 4</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bottom-bar">
      All Rights Reserved © 2021 | <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
  </div>
</footer>


    
    
    
  
      
       
  );
}

export default Footer;
