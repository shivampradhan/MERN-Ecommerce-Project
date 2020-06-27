import React, {useEffect } from 'react';
import { Link } from 'react-router-dom'
//import data from '../data';
//import axios from 'axios';
import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions'
import { detailsProduct } from '../actions/productActions';


function HomeScreen(props) {
const [qty, setQty] = useState(1);
const productList =useSelector(state=> state.productList);
const{products,loading,error}=productList;
const dispatch = useDispatch();






//const [qty, setQty] = useState(1);


useEffect(()=>{dispatch(listProducts());
  // console.log('Props kya hai', props) 
  // dispatch(detailsProduct(props.match.params.id));
   return()=>{
     //
   };
  },[])

  const handleAddToCart = (productId) => {
    props.history.push("/cart/" + productId + "?qty=" + 1)
  }


return loading? <div>Loading...</div>:
   error? <div>{error}</div>:
<ul className="products">
  {
    products.map(product =>
      <li key ={product._id}> 
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img className="product-image" src={product.image} alt="product" />

          </Link>
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          <div className="product-category">{product.category}</div>
          <div className="product-price">${product.price}</div>
          <li>
                  {product.countInStock > 0 && <button onClick={()=>handleAddToCart(product._id)} className="button primary" >Add to Cart</button>
                  }
                </li>

 

        </div>
    </li>
    )
}
  </ul>
}
  
export default HomeScreen;