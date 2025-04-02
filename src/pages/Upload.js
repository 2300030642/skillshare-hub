import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload a Skill Post 📸🎥</h1>
      <input type="file" onChange={handleFileUpload} className="upload-input" />
      <button onClick={handleSubmit} className="upload-button">Upload</button>
    </div>
  );
};

export default Upload;
