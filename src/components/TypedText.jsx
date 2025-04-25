import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Designer",
        "Web Developer",
        "Front End Developer",
        "Apps Designer",
        "Apps Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return <h4 className="typed-text-output d-inline-block text-light" ref={el} />;
};

export default TypedText;
