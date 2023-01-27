import { Link } from 'react-router-dom';
import classes from './AllOrders.module.css';
import { useEffect, useState } from 'react';
import getAllOrders from '../../services/api/getAllOrders';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllOrders();
      if (data) setOrders(data);
    };
    getData();
  }, []);
  return (
    <>
      <h1 className={classes.heading}>Orders</h1>
      <div className={classes.container}>
        {orders.map((order) => {
          return (
            <Link
              key={order.id}
              to={`/orders/${order.id}`}
            >{`${order.PurchaseOrderTypeAbbreviation} - ${order.PurchaseOrderNo}`}</Link>
          );
        })}
      </div>
    </>
  );
};

export default AllOrders;
