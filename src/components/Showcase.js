import React from 'react'
import "./style.css"

const showcase = () => {
  return (
    <>
    <header className="showcase" style ={ { background: "url('../img/slide1.png') no-repeat center center/cover" } }>
            <h2>Surface Deals</h2>
            <p>
                Select Surfaces are on sale now - save
                while supplies last
            </p>
            <a href="" className="btn">
                Shop Now <i className="fas fa-chevron-right"></i>
            </a>
        </header>
    </>
  )
}

export default showcase