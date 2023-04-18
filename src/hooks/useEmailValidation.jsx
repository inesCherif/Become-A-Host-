import { useState } from "react";

const useEmailValidation = () => {
  //verifiying email
  const [formData, setFormData] = useState({
    email: "",
    isEmailValid: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      isEmailValid: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
    });
  };

  return { formData, handleChange };
};

export default useEmailValidation;
