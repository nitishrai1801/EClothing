import React from "react";

import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.commponent";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            // <div key={item.id}>{item.name} </div>
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
