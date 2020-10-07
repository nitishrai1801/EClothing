import React, { Component } from "react";
import shopData from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shopPage">
        {collections.map(({ id, ...otheCollectionProps }) => (
          <CollectionPreview key={id} {...otheCollectionProps} />
        ))}
      </div>
    );
  }
}
