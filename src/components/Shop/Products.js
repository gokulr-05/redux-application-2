import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="p2"
          title="Test1"
          price={10}
          description="This is a Second product - Excellent!"
        />
        <ProductItem
          id="p3"
          title="Test2"
          price={20}
          description="This is a Second product - Wonderful!"
        />
      </ul>
    </section>
  );
};

export default Products;
