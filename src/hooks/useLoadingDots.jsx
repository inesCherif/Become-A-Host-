import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoadingDots() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const navigate = useNavigate();

  // set up timer that updates the active dot index every second.
  useEffect(() => {
    const dotTimer = setInterval(() => {
      setActiveDotIndex((activeDotIndex) => (activeDotIndex + 1) % 3); // % :modulo 3 --> wrap the value back to 0 when it reaches 3
    }, 1000);

    return () => clearInterval(dotTimer);
  }, []);

  useEffect(() => {
    if (activeDotIndex === 2) {
      setTimeout(() => navigate("/profileInformation"), 1000); // Wait 1 second before navigating to 'profileInformation'
    }
  }, [activeDotIndex, navigate]);

  return { activeDotIndex };
}
