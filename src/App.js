import React from "react";
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Item1 from './components/item1'
import Banner1 from './components/banner1'
import Item2 from './components/item2'
import Banner2 from './components/banner2'
import SocialSites from './components/socialSites'
import Links from './components/links'
import Footer from './components/footer'
import "./components/style.css"
const App = () => {
  return <>
    <div className="container">
      <Navbar />
      <Showcase />
      <Item1/>
      <Banner1/>
      <Item2/>
      <Banner2/>
      <SocialSites/>
      <Links/>
      <Footer/>
    </div>

  </>
}
export default App;