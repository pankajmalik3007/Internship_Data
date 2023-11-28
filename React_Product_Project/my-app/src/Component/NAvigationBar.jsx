import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import '../Component/NavigationBar.css';

const NavigationBar = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <div className="AppBar">
      <AppBar position="sticky">
        <Toolbar>
          <Link to="/" className="Brand">My App</Link>
          <Button color="inherit" component={Link} to="/" className="Button">Home</Button>
          <Button color="inherit" component={Link} to="/about" className="Button">About</Button>
          <Button color="inherit" component={Link} to="/cart" className="Button">Cart</Button>
          <Button color="inherit" component={Link} to="/my-bag" className="Button">My Bag ({totalItems})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
