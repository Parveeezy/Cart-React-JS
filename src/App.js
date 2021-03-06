import React from 'react';
import Goods from './Goods';
import './App.css';
import goodsArr from './goods.json'
import Cart from './Cart';

class App extends React.Component {

  addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = this.state.cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    // cartTemp++;
    this.setState({ cart: cartTemp });
    let count = this.state.count;
    count++;
    this.setState({ 'count': count })
  }

  constructor(props) {
    super();
    this.state = {
      cart: {},
      count: 0
    }
  }
  render() {
    let showCart;
    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
    }
    else {
      showCart = 'Empty';
    }
    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={this.addToCart}>
          {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image}
            article={item.article} key={item.article} />)}
        </div>
        {showCart}

      </div>
    );
  }
}

export default App;
