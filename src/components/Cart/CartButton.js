import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { actions } from '../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartNumber = useSelector(state => state.items.cartNumber);
  const cartHandler = () => {
    dispatch(actions.toggle());
  }
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;
