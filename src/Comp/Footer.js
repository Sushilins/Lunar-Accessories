import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaPinterestP, FaInstagram, } from 'react-icons/fa'
import "./footer.css"

function Footer() {
  return (
    <>
      <div className='container-fluid border-top pt-lg-5 my-lg-5'>
        <div className='container'>
        <div className='d-flex gap-5'>
          <div className='d-flex justify-content-between flex-grow-1'>
            <div className=''>
              <h4 className='mb-lg-4'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>GENERAL</a></h4>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Payment Methods</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Partners</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI'target='_blank'>Affiliates</a></p>
            </div>
            <div className=''>
              <h4 className='mb-lg-4'><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>IMPORTANT LINKS</a></h4>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Privacy Policy</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Terms & Conditions</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Shipping Policy</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Refunds</a></p>
              <p><a rel="noreferrer" href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI' target='_blank'>Track Order</a></p>
            </div>
          </div>
          <div className='d-flex px-lg-4 justify-content-between flex-grow-1 border-start'>
            <div className=''>
              <h4 className='mb-lg-4'>ADDRESS:</h4>
              <p>Lunar Accessories, General Business</p>
              <p>Traders, Office 786, Floor 1, CIVIL MALL,<br/>NEPAL.</p>
              <p className='mt-lg-4'>24/7 Online Assistance:</p>
              <p>+9923-453-8940</p>
            </div>
              <div className=''>
                <h4 className='mb-lg-4'>WORK HOURS:</h4>
                <p>Monday – Friday 9:00 – 19:00</p>
                <p>Sunday 9:00 – 13:00</p>
                <p className='mt-lg-5'>KTM Central Time</p>
                <div className='d-flex gap-4 justify-content-between'>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI"><FaFacebookF className='icon fb' /></a>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI"><FaTwitter className='icon tw' /></a>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI"><FaPinterestP className='icon pin' /></a>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI"><FaYoutube className='icon you' /></a>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI"><FaInstagram className='icon ins' /></a>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className='container-fluid bg-body-secondary mt-lg-5 pt-lg-5 pb-lg-4'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <p>© 2022, Shayo WordPress. All Rights Reserved.</p>
            </div>
            <div className=''>
              <a href='https://www.google.com'>
                <img src='https://concave.me/shayotheme/wp-content/uploads/2021/09/payment.png' width="250" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
