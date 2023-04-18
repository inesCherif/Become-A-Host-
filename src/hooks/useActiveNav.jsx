import { useState } from "react";

const useActiveNav = (initialNavItem, nextNavItem) => {
  // Initialize the selectedNavItem state with the initialNavItem value
  const [selectedNavItem, setSelectedNavItem] = useState(initialNavItem);

  // update the selectedNavItem state
  const handleContinueClick = () => {
    setSelectedNavItem(nextNavItem);
  };

  return {
    selectedNavItem,
    handleContinueClick,
  };
};

export default useActiveNav;
