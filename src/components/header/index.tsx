import React from 'react'
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
        <div className="time">
            <span className="text-[24px] sm:text-[54px] titleText">11:47</span>
        </div>
        </section>
    </header>
  )
}

export default Header