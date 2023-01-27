import { useParams } from 'react-router-dom';
import classes from './Order.module.css';

const Order = () => {
  const params = useParams();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Order {params.orderId}</h1>
      <ul className={classes.info}>
        <li>
          <span className={classes['info-key']}>Order Address:</span>
          <span className={classes['info-value']}>123'fdfdlk</span>
        </li>
        <li>
          <span className={classes['info-key']}>Contact Person:</span>
          <span className={classes['info-value']}>123'fdfdlk</span>
        </li>
        <li>
          <span className={classes['info-key']}>Order Status:</span>
          <span className={classes['info-value']}>123'fdfdlk</span>
        </li>
      </ul>
      <table className={classes.table}>
        <caption className={classes['table-caption']}>
          Purchase Order Details
        </caption>
        <thead>
          <th className={classes['table-head']}>Product SKU</th>
          <th className={classes['table-head']}>Quantity Ordered</th>
          <th className={classes['table-head']}>Unit Price</th>
          <th className={classes['table-head']}>Total Amount</th>
        </thead>
        <tbody>
          <tr>
            <td className={classes['table-cell']}>PRODUCT_8</td>
            <td className={classes['table-cell']}>8</td>
            <td className={classes['table-cell']}>164</td>
            <td className={classes['table-cell']}>1312</td>
          </tr>
          <tr>
            <td className={classes['table-cell']}>PRODUCT_8</td>
            <td className={classes['table-cell']}>8</td>
            <td className={classes['table-cell']}>164</td>
            <td className={classes['table-cell']}>1312</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
