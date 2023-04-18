import React, { useState, useRef, useCallback } from "react";
import "./DragAndDropComponent .css";
import Upload from "../../assets/images/photo-requirements/upload.png";

const DragAndDropComponent = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const inputElement = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setUploadedPhotos((prevPhotos) => [...prevPhotos, ...imageFiles]);
  };

  const handleFileInputChange = useCallback((e) => {
    // Use useCallback to memoize the function
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setUploadedPhotos((prevPhotos) => [...prevPhotos, ...imageFiles]);
  }, []);

  const handleRemovePhoto = (index) => {
    setUploadedPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  // Update inputElement ref only when component mounts
  React.useEffect(() => {
    inputElement.current =
      inputElement.current || document.createElement("input");
  }, []);

  return (
    <div>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <img src={Upload} alt="" />
        <p>
         <span className="drop-zone-title">Drag your photos here</span>  <br /> 
         <span className="drop-zone-second-title">&nbsp;&nbsp;&nbsp;Add at least 7 photos </span> 
        </p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          ref={inputElement}
        />
        <button onClick={() => inputElement.current.click()} className="draging-photos-link">Upload from your device</button>
      </div>
      <div className="uploaded-photos">
        {uploadedPhotos.map((photo, index) => (
          <div key={index} className="uploaded-photo">
            <img
              src={URL.createObjectURL(photo)}
              alt={`Uploaded photo ${index}`}
            />
            <button onClick={() => handleRemovePhoto(index)}>Remove</button>
          </div>
        ))}
      </div>
      {uploadedPhotos.length < 7 && uploadedPhotos.length > 0 && (
        <p className="drop-zone-title">You have to add at least 7 photos.</p>
      )}
    </div>
  );
};

export default DragAndDropComponent;
