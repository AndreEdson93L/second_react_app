import React from "react";
import Dog from "../Components/Dog";
import { useEffect, useState } from "react";

function DogPage() {

  const API_URL = "https://dog.ceo/api/breeds/image/random";
  const [dogPictureUrl, setDogPicture] = useState(""); // REACT Hook

  

  useEffect(() => {
    getFromAPI();
  }, []);

  function getFromAPI() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDogPicture(data.message);
        console.log(dogPictureUrl);
      });
  }

  return (
    <>
      <div>DogPage</div>
      <Dog dogPicture={dogPictureUrl} newDogPicture={getFromAPI}/>
    </>
  );
}

export default DogPage;
