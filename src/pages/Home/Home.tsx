import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Announcement } from '../../components/Announcement';
import { Categories } from '../../components/Categories';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Newsletter } from '../../components/Newsletter';
import { Products } from '../../components/Products';
import { Slider } from '../../components/Slider';
import { getNewProducts } from '../../redux/apiCalls';

export const Home: React.FC = React.memo(
  () => {
    const products = useSelector((state: any) => state.product.products);
    const dispatch = useDispatch();
    const [newProducts, setNewProducts] = useState<Product[]>([]);

    useEffect(() => {
      getNewProducts(dispatch);
    }, [dispatch]);

    useEffect(() => {
      setNewProducts([...products]);
    }, [products]);

    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products products={newProducts} />
        <Newsletter />
        <Footer />
      </div>
    )
  }
)