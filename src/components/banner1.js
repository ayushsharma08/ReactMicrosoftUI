import React from 'react'

const banner1 = () => {
    return (

       <>
        <div className="banner" style={{ background: "url('../img/xbox.png') no-repeat center center/cover" }}>
            <h2>
                Xbox Game Pass Ultimate
            </h2>
            <p style={{textAlign:"start"}}>
                Xbox Game Pass Ultimate Xbox Live Gold and over 100 high- <br/> quality console and PC games. Play
                together with friends and <br/>
                 discover your next favorite game.


            </p>
            <a href="#" className="btn">LEARN MORE <i className="fas fa-chevron-right"></i></a>
        </div>
        </>

    )
}

export default banner1