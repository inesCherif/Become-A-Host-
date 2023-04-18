import { useRef, useState } from "react";

const useCropper = (initialSrc) => {
  const [src, setSrc] = useState(initialSrc);
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);

  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      setModalOpen(false);
    }
  };

  const handleInputClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleImgChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleSlideChange = (e, value) => {
    setSlideValue(value);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return {
    src,
    preview,
    modalOpen,
    slideValue,
    cropRef,
    handleSave,
    handleInputClick,
    handleImgChange,
    handleSlideChange,
    handleClose,
  };
};

export default useCropper;
