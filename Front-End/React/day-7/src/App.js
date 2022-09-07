import './App.css';
import React, { useState } from 'react'
import SearchBox from './components/SearchBox';
import ImageGrid from './components/ImageGrid';

function App() {

  const [imgs, setImgs] = useState([])

  const fetchImages = async (searchTerm) => {
    const unSplashRes = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=ErYe3QDouaA9hX6a5GWTMGNCgF39md9dSV3dwSP7Bys`)
    const imagesData = await unSplashRes.json()
    console.log(imagesData)
    setImgs(imagesData.results)
  }

  return (
    <>
      <SearchBox fetchImages={fetchImages} />
      <ImageGrid images={imgs} />
    </>
  )
}

export default App;
