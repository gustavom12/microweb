import React, { useState } from "react";
import CellphonePortfolio from "./cellpronePortfolio";
import ComputerPortfolio from "./computerPortfolio";
import './portfolio.sass'
function Portfolio() {
  const [computerScreen, setComputerScreen] = useState(false);
  return (
    <section className="portfolio">
      <div className="flex mx-auto w-50 my-2 icons">
        <i
          className={`
              fas fa-desktop mx-4 flex textFather iconButton fs-3
              ${computerScreen && "active"}
            `}
            onClick={() => { setComputerScreen(true) }}
        >
        </i>
        <h2 className="text-center">Portfolio</h2>
        <i
          className={`
              fas fa-mobile-alt mx-4 flex textFather iconButton fs-3
              ${!computerScreen && "active"}
            `}
          onClick={() => setComputerScreen(false)}
        >
        </i>
      </div>
      <div className="sitesContainer">
        {computerScreen ? <ComputerPortfolio /> : <CellphonePortfolio/> }
      </div>
    </section>
  )
}
export default Portfolio
