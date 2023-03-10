import React from 'react';
import "./posts.css";

function Posts() {
  return (
    <>
      <div className='container-fluid bg-success-subtle py-lg-5'>
        <div className='container px-lg-0 py-lg-5'>
          <div className='d-flex justify-content-around align-items-center gap-lg-5 mb-lg-5'>
            <div className='flex-grow-1'>
              <img className='w-100'src='https://concave.me/shayotheme/wp-content/uploads/2021/09/post1.jpg' alt=''/>
            </div>
            <div className='flex-grow-1'>
              <h3 className='awa mb-lg-5'>AS PEOPLE MOVE OUT OF BIG CITIES, FASHION RETAIL FOLLOWS</h3>
              <p className=''>As someone who has dabbled in women’s jeans, I’d like to share my opinion on several pairs that will work for a man if he is willing to give it a try.</p>
            </div>
          </div>
          <div className='d-flex justify-content-around align-items-center gap-lg-5 my-lg-5'>
            <div className='flex-grow-1'>
              <img className='w-100'src='https://concave.me/shayotheme/wp-content/uploads/2022/05/post2.jpg' alt=''/>
            </div>
            <div className='flex-grow-1'>
              <h3 className='awa mb-lg-5'>AS PEOPLE MOVE OUT OF BIG CITIES, FASHION RETAIL FOLLOWS</h3>
              <p className=''>As someone who has dabbled in women’s jeans, I’d like to share my opinion on several pairs that will work for a man if he is willing to give it a try.</p>
            </div>
          </div>
          <div className='d-flex justify-content-around align-items-center gap-lg-5 mt-lg-5'>
            <div className='flex-grow-1'>
              <img className='w-100'src='https://concave.me/shayotheme/wp-content/uploads/2022/05/post4.jpg' alt=''/>
            </div>
            <div className='flex-grow-1'>
              <h3 className='awa mb-lg-5'>AS PEOPLE MOVE OUT OF BIG CITIES, FASHION RETAIL FOLLOWS</h3>
              <p className=''>As someone who has dabbled in women’s jeans, I’d like to share my opinion on several pairs that will work for a man if he is willing to give it a try.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts
