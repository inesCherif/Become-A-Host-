import { Box, Modal, Slider, Button } from "@mui/material";
import "./Cropper.css";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { TbPhotoUp } from "react-icons/tb";
import Profile from "../../assets/images/profile.png";

// Styles
const boxStyle = {
  width: "400px",
  height: "400px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};
const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Modal
const CropperModal = ({ src, modalOpen, setModalOpen, setPreview }) => {
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);

  //handle save
  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      setModalOpen(false);
    }
  };

  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: "100%", height: "100%" }}
          border={50}
          borderRadius={150}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 10}
          rotate={0}
        />

        {/* MUI Slider */}
        <Slider
          min={10}
          max={50}
          sx={{
            margin: "0 auto",
            width: "80%",
            color: "var(--secondarybrand)",
            height: "10px", // set the height to a larger value
            "& .MuiSlider-thumb": {
              width: "24px",
              height: "24px",
            },
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e) => setSlideValue(e.target.value)}
        />

        <Box
          sx={{
            display: "flex",
            padding: "10px",
            border: "3px solid white",
            background: "black",
          }}
        >
          <Button
            size="small"
            sx={{ marginRight: "10px", color: "white", borderColor: "white" }}
            variant="outlined"
            onClick={(e) => setModalOpen(false)}
          >
            cancel
          </Button>
          <Button
            sx={{ background: "#5596e6" }}
            size="small"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Container
const Cropper = () => {
  // image src
  const [src, setSrc] = useState(null);

  // preview
  const [preview, setPreview] = useState(null);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // ref to control input element
  const inputRef = useRef(null);

  // handle Click
  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  // handle Change
  const handleImgChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };

  return (
    <>
      <main>
        <div className="img-container">
          <img
            src={preview || Profile}
            alt=""
            width="250"
            height="250"
            className="img-avatar"
          />
        </div>
        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        <a href="/" onClick={handleInputClick} className="upload-profile-photo">
          <TbPhotoUp className="add-icon" />
          <small className="body">Upload Picture</small>
        </a>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
          className="input-upload-avatar"
        />
      </main>
    </>
  );
};

export default Cropper;
