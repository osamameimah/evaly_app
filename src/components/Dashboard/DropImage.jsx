import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropImage = ({ image, onDrop }) => {
  // const [image, setImage] = useState(null);

  // const onDrop = useCallback((acceptedFiles) => {
  // // Assuming you want to handle only one image, you can set the first file in the state.
  //   if (acceptedFiles.length > 0) {
  //     const file = acceptedFiles[0];
  //     setImage(file);
  //   }
  // }, []);
  const ss = useCallback(onDrop)
  
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropzoneStyle = {
    border: isDragActive ? '2px dashed blue' : '2px dashed #ccc',
    padding: '15px',
    borderRadius: '4px',
    // textAlign: 'center',
    cursor: "pointer",
    background: "white",

  };

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p style={{ color: "#8b909a",fontSize:"14px",fontWeight:"bold" }}>Drag and drop an image, or click to select files</p>
      )}
      {image && (
        <div>
          {/* <p style={{color:"#df9494"}}>Selected Image:</p> */}
          {/* <img src={URL.createObjectURL(image)} alt="Selected" width="50" /> */}
          <p style={{ color: "#e08181", fontSize: "13px", marginTop: "8px" }}>{image.name}</p>
        </div>
      )}
    </div>
  );
};

export default DropImage;
