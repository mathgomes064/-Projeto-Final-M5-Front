import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import json from "../../../assets/dashboard_animation.json";

const DashboardAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: json,
      width: 100,
      heigth: 100
    });

    return () => lottie.destroy();
  }, []);

  return <div className="container" ref={container} />;
};

export default DashboardAnimation;