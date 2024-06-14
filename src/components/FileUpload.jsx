import React, { useState, useRef } from 'react';
import axios from 'axios';
import Buttons from './Buttons';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
      alert('Failed to upload file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
    inputRef.current.value = ''; // Reset input value
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputRef}
        style={{ display: 'none' }}
      />
      {/*<button onClick={handleUpload} disabled={!file}>Upload</button>*/}
      <Buttons text={"Upload"} condition={!file} callBack={handleUpload} />
      {isDesktopDevice() && (
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          style={{
            border: dragActive ? '2px dashed #000' : '2px solid #ccc',
            padding: '20px',
            marginTop: '20px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          {dragActive ? (
            <p>Drop the file here...</p>
          ) : file ? (
            <div>
              <p>File ready to upload: {file.name}</p>
              <Buttons text={"Remove File"} callBack={handleRemoveFile}/>
            </div>
          ) : (
            <p>Drag and drop a file here or click to select a file</p>
          )}
        </div>
      )}
    </div>
  );
};

const isDesktopDevice = () => {
  return !('ontouchstart' in window || navigator.maxTouchPoints);
};

export default FileUpload;
