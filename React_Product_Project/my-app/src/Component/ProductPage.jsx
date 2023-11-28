
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Features/ProductSlice';
import { addProduct } from '../Features/CartSlice';
import { Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductPage.css'; 

const ProductPage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const productsData = useSelector((state) => state.product.data);
  const loading = useSelector((state) => state.product.status === 'loading');
  const cart = useSelector((state) => state.cart.products);


  const products = productsData && productsData.products ? productsData.products : [];

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="product-page">
      <h2>ggg</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h1 className="text-center mb-4">Products</h1>
      <Grid container spacing={3} className="product-list">
        {!loading &&
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="product-card d-flex flex-column h-100">
                <img className="product-thumbnail" src={product.thumbnail} alt={product.title} />
                <CardContent>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Discount: {product.discountPercentage}%</p>
                  <p>Rating: {product.rating}</p>
                </CardContent>
                <CardActions className="mt-auto justify-content-center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleAddToCart(product);
                      console.log('Product added to cart:', product);
                      console.log('Updated Cart:', cart); 
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      {loading && <p className="text-center mt-4">Loading products...</p>}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center mt-4">No matching products found.</p>
      )}
    </div>
  );
};

export default ProductPage;
