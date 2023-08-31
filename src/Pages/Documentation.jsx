import React from 'react'

export const Documentation = () => {
  return (
    <div className='container'>
      <h2 className='text-center fw-bold mb-3 mb-lg-4 text-danger'>Project Summary</h2>
      <p>Having acquired proficiency in React, I took the initiative to apply my acquired knowledge, resulting in the creation of Netcommerce. This web application was crafted using ReactJS for the frontend, while Local Storage facilitated data management.</p>
      <p>Incorporating React Query, I efficiently fetched APIs from <a href="https://fakestoreapi.com/products">fakestore api</a> and employed it for data caching. The application's routing was handled through React Router.</p>
      <p>To ensure effective state management of data and functions, I harnessed the power of the useContext hook, while the useState hook also played a pivotal role in the project.</p>
      <p>For a visually appealing user interface, Bootstrap coupled with custom CSS was employed. Additionally, React Icons were utilized to design the cart icon, providing a seamless user experience.</p>
    </div>
  )
}
