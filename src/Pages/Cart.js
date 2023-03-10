import React from 'react'
import Carousel from 'react-multi-carousel';
import ProductData from '../Data/ProductData';

function Cart() {
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
      <div className='container-fluid border-top py-lg-5'>
        <div className='container text-center'>
          <h2>PARTY WEARS</h2>
          <div className='container-fluid py-lg-5'>
            <Carousel responsive={responsive}>
              {ProductData.map((a) => (
                <div className='category text-center'>
                  <img src={a.image} alt="" />
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

export default Cart


