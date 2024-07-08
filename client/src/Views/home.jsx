import { useState } from "react";
import GridphotoFlickr from "../components/grid";
import Navbar from "../components/navbar";
import SearchBar from "../components/search";

function Home() {
  const [photos, setPhotos] = useState([]);

  const handleSearch = (searchResults) => {
    setPhotos(searchResults);
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <GridphotoFlickr photos={photos} />
    </div>
  );

}

export default Home;
