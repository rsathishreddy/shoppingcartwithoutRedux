import React, { Component } from "react";
import Axios from "axios";
import "./styles.css";

import Products from "./Components/Products";
import AddedCartItems from "./Components/AddedCartItems";

class App extends Component {
  state = {
    items: [],
    cartItems: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        items: res.data
      });
      console.log(res.data);
    });
  }

  handleAddToCart = (e, items) => {
    this.setState({
      cartItems: items.name
    });
  };

  render() {
    return (
      <div className="App">
        <header className="HeaderPart">Ecommerce shopping cart!!</header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Items List</h1>
                <hr />
                <Products
                  items={this.state.items}
                  handlerAddToCart={this.handleAddToCart}
                />
              </div>
              <div className="cold-md-4">
                <h1>shopping cart</h1>
                <AddedCartItems cartItems={this.state.cartItems.name} />
                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
