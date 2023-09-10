import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fullName', 'randomsatva')

    try {
      const response = await axios.post('http://localhost:8974/encrypt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className='row'>
        <div className='col-8'>
        <Form >
        <Form.Group>
          <Form.Control
            type='file'
            id="custom-file78976"
            label="Choose a file"
            custom
            onChange={handleFileChange}
            
          />
        </Form.Group>
        </Form>
        </div>
        <div className='col-4'>
        <Button  onClick={handleFileUpload} variant='primary' className='mt-1'>
          Upload
        </Button>
        </div>
        </div>
    </div>
    
  );
};

export default FileUpload;
