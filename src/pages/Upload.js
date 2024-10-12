import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";

function FirebaseImageUpload() {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(storage, `files/${uuidv4()}`);
      uploadBytes(imgRef, img).then((snapshot) => {
        console.log(snapshot);
        getDownloadURL(snapshot.ref).then((url) => {
          setImgUrl((prevUrls) => [...prevUrls, url]);
          setUploadSuccess(true); // Set upload success to true
        });
      });
    } else {
      alert("Please select an image to upload.");
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, "files");
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map((itemRef) => getDownloadURL(itemRef))
      );
      setImgUrl(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Upload and Display Images
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload
          </button>
          {uploadSuccess ? (
            <p className="text-green-500 text-center">Upload successful!</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FirebaseImageUpload;
