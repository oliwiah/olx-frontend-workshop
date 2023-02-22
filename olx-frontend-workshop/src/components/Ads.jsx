import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 16px;
`;

const Ads = (props) => {
  const { ads = [], onDeleteAd = () => {} } = props;

  return (
    <>
      <h2>All Ads</h2>

      <UnorderedList>
        {ads?.map((ad) => {
          return (
            <ListItem key={ad.id}>
              <Card style={{ width: 240 }}>
                <Card.Img src={ad.ad_image ?? null} />
                <Card.Body>
                  <Card.Title>{ad.title}</Card.Title>
                  <Card.Subtitle>{ad.description}</Card.Subtitle>
                  <Card.Text>Price: {ad.price}</Card.Text>
                  <Card.Text>ID: {ad.id}</Card.Text>
                  <Button variant="secondary" onClick={() => onDeleteAd(ad.id)}>
                    Delete ad
                  </Button>
                </Card.Body>
              </Card>
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
};

export default Ads;
