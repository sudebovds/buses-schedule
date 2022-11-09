import React from 'react'
import Clock from './Clock'
import './style.css'

const Header = () => {
  return (
    <header className="mainHeader">
        <section className="headerLeftSection">
        <div className="logo">
            <img src="./assets/images/logo.svg" alt="Virta" />
        </div>
        <div className="name">
            <span className="text-[20px] font-bold">Buses arriving to</span>
        </div>
        </section>
        <section>
          <Clock />
        </section>
    </header>
  )
}

export default Header