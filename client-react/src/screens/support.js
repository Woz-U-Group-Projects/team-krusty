import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart.js';
import Bakedgoods from './Bakedgoods.js';
import Beverages from './Beverages.js';
import Cafeanddeli from './Cafeanddeli.js';
import Cannedfood from './Cannedfood.js';
import Cleaningandsafety from './Cleaningandsafety.js';
import Condiments from './Condiments.js';
import Dairyproducts from './Dairyproducts.js';
import Frozenfoodsandicecream from './Frozenfoodsandicecream.js';
import Meatandseafood from './Meatandseafood.js';
import Officesupplies from './Meatandseafood.js';
import Produce from './Produce.js';
import Snacks from './Snacks.js';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
    <Router>
        <div>
        <h4><Link to="/">Select Choice</Link></h4>
        <h4><Link to="/cart">Cart</Link></h4>
        <h4><Link to="/bakedgoods">Baked Goods</Link></h4>
        <h4><Link to="/beverages">Beverages</Link></h4>
        <h4><Link to="/cafeanddeli">Cafe &amp; Deli</Link></h4>
        <h4><Link to="/cannedfood">Canned Food</Link></h4>
        <h4><Link to="/cleaningandsafety">Cleaning &amp; Safety</Link></h4>
        <h4><Link to="/condiments">Condiments</Link></h4>
        <h4><Link to="/dairyproducts">Dairy Products</Link></h4>
        <h4><Link to="/frozenfoodsandicecream">Frozen Foods &amp; Ice Cream</Link></h4>
        <h4><Link to="/meatandseafood">Meat &amp; Seafood</Link></h4>
        <h4><Link to="/officesupplies">Office Supplies</Link></h4>
        <h4><Link to="/produce">Produce</Link></h4>
        <h4><Link to="/snacks">Snacks</Link></h4>

        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/bakedgoods" component={Bakedgoods} />
        <Route path="/beverages" component={Beverages} />
        <Route path="/cafeanddeli" component={Cafeanddeli} />
        <Route path="/cannedfood" component={Cannedfood} />
        <Route path="/cleaningandsafety" component={Cleaningandsafety} />
        <Route path="/condiments" component={Condiments} />
        <Route path="/dairyproducts" component={Dairyproducts} />
        <Route path="/frozenfoodsandicecream" component={Frozenfoodsandicecream} />
        <Route path="/meatandseafood" component={Meatandseafood} />
        <Route path="/officesupplies" component={Officesupplies} />
        <Route path="/produce" component={Produce} />
        <Route path="/snacks" component={Snacks} />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));







