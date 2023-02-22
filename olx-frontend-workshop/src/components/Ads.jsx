import React from "react";
import styled from 'styled-components';
// import { Card } from "antd";
// import { DeleteFilled } from "@ant-design/icons";

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 16px;
`;

const { Meta } = Card;

const Ads = (props) => {
  const { ads = [], onDeleteAd = () => {} } = props;

  return (
    <>
      <h2>All Ads</h2>

      <UnorderedList>
        {ads?.map((ad) => {
          return (
            <ListItem key={ad.id}>
              {/* <Card
                style={{ width: 240 }}
                cover={
                  ad.ad_image ? <img alt="example" src={ad.ad_image} /> : null
                }
                // actions={[
                //   <DeleteFilled
                //     key={"delete-ad"}
                //     onClick={() => onDeleteAd(ad.id)}
                //   />,
                // ]}
              >
                <Meta title={ad.title} description={ad.description} />
                <p>Price: {ad.price}</p>
                <p>ID: {ad.id}</p>
              </Card> */}
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
};

export default Ads;