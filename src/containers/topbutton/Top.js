import React, { useRef, useEffect } from "react";
import "./Top.scss";

export default function Top() {
  const topButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButtonRef.current.style.visibility = "visible";
      } else {
        topButtonRef.current.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTopClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <button
      onClick={handleTopClick}
      ref={topButtonRef}
      id="topButton"
      title="Go to top"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}