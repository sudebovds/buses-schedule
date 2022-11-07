const App = () => {
  
  return (
    <div className="mainWrapper">
      <header className="flex justify-between items-center w-full px-[2rem] py-[2.5rem]">
        <section className="flex justify-between w-[40vw] items-center">
          <div className="logo">
            <img src="./assets/images/logo.svg" alt="Virta" />
          </div>
          <div className="name">
            <span className="text-[20px] font-bold">Buses arriving to</span>
          </div>
        </section>
        <section>
          <div className="time">
            <span className="titleText">11:47</span>
          </div>
        </section>
      </header>
      <main className="main">
        <h1 className="titleText">Energia-aukio</h1>
        <section className="content mt-[64px]">
          <ul>
            <li className="item">
              <div className="itemContent">
                <div>
                  <img src="./assets/images/bus.svg" alt="bus-icon" />
                  <span>15</span>
                </div>
                <div>
                  <span>In 1 minute / 11:48</span>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="itemContent">
                <div>
                  <img src="./assets/images/bus.svg" alt="bus-icon" />
                  <span>15</span>
                </div>
                <div>
                  <span>In 1 minute / 11:48</span>
                </div>
              </div>              
            </li>
            <li className="item">
            <div className="itemContent">
              <div>
                  <img src="./assets/images/bus.svg" alt="bus-icon" />
                  <span>15</span>
                </div>
                <div>
                  <span>In 1 minute / 11:48</span>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="itemContent late">
                <div>
                  <img src="./assets/images/bus.svg" alt="bus-icon" />
                  <span>15</span>
                </div>
                <div>
                  <span>In 1 minute / 11:48</span>
                </div>
              </div>              
            </li>
            <li className="item">
            <div className="itemContent">
              <div>
                  <img src="./assets/images/bus.svg" alt="bus-icon" />
                  <span>15</span>
                </div>
                <div>
                  <span>In 1 minute / 11:48</span>
                </div>
              </div>              
            </li>
          </ul>
        </section>
      </main>
      <footer className="flex justify-end items-baseline w-full max-h-[300px]">
        <img className="hidden md:flex max-w-full max-h-full" src="./assets/images/footer.svg" alt="footer-image" />
      </footer>
    </div>
  )
}

export default App
