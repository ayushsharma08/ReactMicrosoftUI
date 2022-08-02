import React from 'react'
import "./style.css"

const item1 = () => {
  return (
    <>
     <div class="group1">
            <div class="item">
                <img src={"img/card1.png"} alt="" />
                <p class="description">
                    New Surface Pro 7
                </p>
                <p>
                    See how Katie Sowers, Asst. Coach
                    for the 49ers, uses Surface Pro 7 to
                    put her plans into play.
                </p>
                <a href="#" class="btn2">
                    LEARN MORE <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div class="item">
                <img src={"img/card2.png"} alt=""/>
                <p class="description">
                    New Surface Laptop 3
                </p>
                <p>
                    Express yourself powerfully with a
                    thin, light, and elegant design, faster
                    performance, and up to 11.5 hours
                    battery life.
                </p>
                <a href="#" class="btn2">
                    LEARN MORE <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div class="item">
                <img src={"img/card3.png"} alt=""/>
                <p class="description">
                    Save $150 + free controller
                </p>
                <p>
                    Buy an Xbox One X console and
                    double your fun with a free select
                    extra controller. Starting at $349.
                </p>
                <a href="#" class="btn2">
                    LEARN MORE <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div class="item">
                <img src={"img/card4.png"} alt=""/>
                <p class="description">
                    The new Microsoft Edge
                </p>
                <p>
                    Expect more. World class
                    performance, with more privacy,
                    more productivity, and more value.
                </p>
                <a href="#" class="btn2">
                    LEARN MORE <i class="fas fa-chevron-right"></i>
                </a>
            </div>

        </div>
    </>
  )
}

export default item1