import React from 'react'
import Carousel from 'react-multi-carousel';
import ProductData from '../Data/ProductData';
import "./shop.css"

function Shop() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className='container-fluid bg-body-secondary mb-lg-5 py-lg-5'>
                <div className='container mb-lg-5 pt-lg-5'>
                    <div className='text-center mb-5'>
                        <h2 className='cali1'>ALL PRODUCTS</h2>
                    </div>
                    <div className='mt-5'>
                        <Carousel responsive={responsive}>
                            {ProductData.map((a) => (
                                <div className='category text-center pods'>
                                    <img src={a.image} className='wewwx' alt="" />
                                    <h5 className='mt-4 just'>{a.title}</h5>
                                    <p className='den'>${a.price}</p>
                                    <p>
                                        <button className='muc rounded'>
                                            BUY NOW
                                        </button>
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Shop
