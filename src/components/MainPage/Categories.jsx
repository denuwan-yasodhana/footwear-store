import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Sneakers",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Flat Sadals",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Dress Shoes",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        
      </div>
    </>
  )
}

export default Categories
