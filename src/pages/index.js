import React from "react"
import Header from '../components/pages/index/header/header'
import Body from '../components/pages/index/body/index'
import Footer from '../components/footer/footer'
import Menu from '../components/menu/index'

export default () => {
  return (
    <div>
      <Menu page="index"/>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
