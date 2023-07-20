import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './sevices/api';


function App() {
  const fileInputRef = useRef()
  const [file, setFile] = useState('')
  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"

  const onUpload = () => {
    fileInputRef.current.click()
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

       let responce=await uploadFile(data)
      }
    }
    getImage();
  }, [file])
  console.log(file)
  return (

    <div className="container">
      <img src={logo} alt="banner" />
      <div className='wrapper'>

        <h1>Simple File Share!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUpload()}>Upload</button>
        <input type='file'
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files)}
        />
      </div>
    </div>
  );
}

export default App;
