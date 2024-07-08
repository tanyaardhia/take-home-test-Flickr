import { useState, useEffect } from "react";
import axios from "axios";

function GridphotoFlickr({ photos }) {
  const [fetchedPhotos, setFetchedPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/photoFlickr");
      console.log(response.data, ">>> response grid");
      setFetchedPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const photosToDisplay = photos.length ? photos : fetchedPhotos;
  console.log("photo grid>>>>>>", photosToDisplay);

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl font-bold text-center mb-8">Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photosToDisplay.map((photo) => (
          <div key={photo.link} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={photo.media.m} alt={photo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo.title || "No Description"}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridphotoFlickr;
