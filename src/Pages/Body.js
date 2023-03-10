import React from 'react'
import { Link } from 'react-router-dom';
import "./body.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "./imgty/img1.jpg"
import img4 from "./imgty/img4.jpg"
import ProductData from '../Data/ProductData';


function Body() {
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
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='container-fluid bg-secondary h position-relative'>
                            <img src={img1} className='ima' alt="" />
                            <div className='position-absolute para'>
                                <h5 className='mb-4'>LUNAR ACCESSORIES PRESENTS</h5>
                                <p className='mb-4'>
                                    <div class='black'>
                                        REDEFINING<br />
                                        <span className="ora">ORANMENTS</span>
                                    </div>
                                </p>
                                <p className='mb-5'>
                                    From the new trench to statement overshirts, it’s definitely<br />
                                    time to embrace jwelery season.
                                </p>
                                <div className='btn click px-lg-4 py-lg-2'>
                                    <Link to='/shop'><AiOutlineCheckCircle /> SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container-fluid bg-secondary h position-relative'>
                            <img src={img4} className='imag' alt="" />
                            <div className='position-absolute para'>
                                <h5 className='mb-4'>LUNAR ACCESSORIES PRESENTS</h5>
                                <p className='mb-4'>
                                    <div className='black'>
                                        REDEFINING<br />
                                        <span className="ora">ORANMENTS</span>
                                    </div>
                                </p>
                                <p className='mb-5'>
                                    From the new trench to statement overshirts, it’s definitely<br />
                                    time to embrace jwelery season.
                                </p>
                                <div className='btn click px-lg-4 py-lg-2'>
                                    <Link to='/shop'><AiOutlineCheckCircle /> SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid px-lg-5 py-lg-5 text-center mb-lg-5'>
                <div className='mt-5'>
                    <p className='in mb-4'>INFLATION IS HIGH, OUR PRICES ARE LOW</p>
                    <h2 class='insp'> WE ARE RENOWNED FOR DELIVERING THE <br /><span className='sins'>" SEASON’S
                        MOST WANTED PIECES"</span><br />TO MILLIONS OF PEOPLE <br />WORLDWIDE.
                    </h2>
                </div>
            </div>
            <div className='container-fluid bg-body-secondary mb-lg-5 py-lg-5'>
                <div className='container mb-lg-5 pt-lg-5'>
                    <div className='text-center mb-5'>
                        <p className='cali'>TOP SELLING THIS WEEK</p>
                        <h2 className='cali1'>FEATURED PRODUCTS</h2>
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
            <div className='container-fluid my-lg-5 p-0'>
                <div className='container text-center my-lg-3'>
                    <p className='ita'>
                        A CONSCIOUS COLLECTION MADE ENTIRELY FROM <br />FOOD CROP WASTE, RECYCLED COTTON, OTHER MORE SUSTAINABLE MATERIALS.
                    </p>
                </div>
                <div className='d-flex justify-content-between mt-lg-5'>
                    <div className='flex-grow-1 text-end'>
                        <img class="seu" src="https://concave.me/shayotheme/wp-content/uploads/2022/04/slider1.jpg" alt="" />
                    </div>
                    <div className='flex-grow-1 position-relative'>
                        <img class="seu" src="https://s3.envato.com/files/360124582/IMG7045c4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
