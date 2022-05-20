import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [btn, setBtn] = useState(false);

  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add("leftImg");
  };

  const setRightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };

  const clearImg = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
      refWolverine.current.classList.remove("leftImg");
    } else {
      refWolverine.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
        <Link className="btn-welcome" to="/signup">
          Inscription
        </Link>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
        <Link to="/login" className="btn-welcome">
          Connexion
        </Link>
      </div>
    </>
  );

  return (
    <main className="welcomePage" ref={refWolverine}>
      {displayBtn}
    </main>
  );
};

export default Landing;