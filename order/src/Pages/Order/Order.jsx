import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getOrderById from '../../services/api/getOrderById';
import classes from './Order.module.css';

const Order = () => {
  const params = useParams();
  const [orderAddress, setOrderAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderDetails, setOrderDetails] = useState([]);
  const navigate = useNavigate();

  const clickBackButtonHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getData = async () => {
      const orderData = await getOrderById(params.orderId);
      setOrderAddress(orderData.PurchaseOrderAddress);
      setContactPerson(orderData.PurchaseOrderContactPerson);
      setOrderStatus(orderData.PurchaseOrderStatus);
      setOrderDetails(orderData.PurchaseOrderDetails);
    };
    getData();
  }, [params]);
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Order {params.orderId}</h1>
      <ul className={classes.info}>
        <li>
          <span className={classes['info-key']}>Order Address:</span>
          <span className={classes['info-value']}>{orderAddress}</span>
        </li>
        <li>
          <span className={classes['info-key']}>Contact Person:</span>
          <span className={classes['info-value']}>{contactPerson}</span>
        </li>
        <li>
          <span className={classes['info-key']}>Order Status:</span>
          <span className={classes['info-value']}>{orderStatus}</span>
        </li>
      </ul>
      <table className={classes.table}>
        <caption className={classes['table-caption']}>
          Purchase Order Details
        </caption>
        <thead>
          <tr>
            <th className={classes['table-head']}>Product SKU</th>
            <th className={classes['table-head']}>Quantity Ordered</th>
            <th className={classes['table-head']}>Unit Price</th>
            <th className={classes['table-head']}>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((info) => {
            return (
              <tr key={info.PurchaseOrderRowDetailID}>
                <td className={classes['table-cell']}>
                  {info.PurchaseOrderRowProductSKU}
                </td>
                <td className={classes['table-cell']}>
                  {info.PurchaseOrderRowQuantity}
                </td>
                <td className={classes['table-cell']}>
                  {info.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}
                </td>
                <td className={classes['table-cell']}>
                  {info.PurchaseOrderRowTotalAmount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className={classes['back-btn']}
        type="button"
        onClick={clickBackButtonHandler}
      >
        Back
      </button>
    </div>
  );
};

export default Order;
