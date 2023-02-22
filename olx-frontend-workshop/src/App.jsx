import { useState, useEffect } from "react";
import styled from "styled-components";
import PostingForm from "./components/PostingForm";
import Ads from "./components/Ads";
import config from "./config";

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 16px 16px 16px;
  margin: auto;
`;

const AppHeader = styled.header`
  text-align: center;
`;

function App() {
  const [ads, setAds] = useState([]);

  const fetchAllAds = () => {
    fetch(config.api_ads)
      .then((res) => res.json())
      .then((response) => setAds(response.data))
      .catch((err) => console.error(err));
  };

  const handleOnDelete = (adId) => {
    if (!adId) {
      return;
    }
    fetch(`${config.api_ads}/${adId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((response) => fetchAllAds())
      .catch((err) => console.error(err));
  };

  const handleOnPostAd = () => {
    fetchAllAds();
  };

  useEffect(() => {
    fetchAllAds();
  }, []);

  return (
    <Wrapper>
      <AppHeader>
        <h1>OLX Mini App</h1>
      </AppHeader>
      <main>
        <PostingForm onPostAd={handleOnPostAd} />
        <hr />
        <Ads ads={ads} onDeleteAd={handleOnDelete} />
      </main>
    </Wrapper>
  );
}

export default App;
