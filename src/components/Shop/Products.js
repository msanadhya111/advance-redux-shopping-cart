import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ARRAY = [
  {
    title: 'My First Book',
    id: 'book1',
    price: 6,
    Description: 'The first book I ever wrote'
  },
  {
    title: 'My Second Book',
    id: 'book2',
    price: 5,
    Description: 'The second book I ever wrote'
  }
]

const Products = (props) => {
  return (
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
          {DUMMY_ARRAY.map((item) => 
            (
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.Description}
                  />
              )
          )}
        </ul>
      </section>
  );
};

export default Products;
