import React, { useRef } from "react";
import styled from 'styled-components';
import config from "../config";

const Label = styled.label`
  display: block;
  margin-top: 8px;
`;

const Button = styled.button`
  margin: 8px 0;
`;

const PostingForm = (props) => {
  const { onPostAd = () => {} } = props;
  const formRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch(config.api_ads, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then(() => {
        onPostAd();
        formRef.current.reset();
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleOnSubmit} ref={formRef}>
      <h2>Post New Ad</h2>
      <Label htmlFor="title">
        Title:
        <input id="title" name="title" type="text" required />
      </Label>
      <Label htmlFor="price">
        Price:
        <input id="price" type="number" name="price" step="0.01" required />
      </Label>
      <Label htmlFor="description">
        Description:
        <textarea id="description" name="description" required />
      </Label>
      <Label htmlFor="ad_image">
        Image:
        <input id="ad_image" name="ad_image" type="file" required />
      </Label>
      <Button type="submit">Post</Button>
    </form>
  );
};

export default PostingForm;
