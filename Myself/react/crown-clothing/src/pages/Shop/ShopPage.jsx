import React, { Component } from 'react';
import SHOP_DATA from './collections'
import CollectionPreview from '../../components/PreviewCollection/CollectionPreview';

class Shop extends Component {

  state = {
    collections : SHOP_DATA
  }

  render() { 

    const { collections } = this.state

    return (
      <div className="shop-page">
        {
        collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)
        }        
      </div>
    );
  }
}

export default Shop;