import { Link } from 'react-router-dom';
import classes from './AllOrders.module.css';

const AllOrders = () => {
  const orders = [
    {
      PurchaseOrderTypeAbbreviation: 'P0',
      PurchaseOrderNo: 2,
      PurchaseOrderId: 89
    },
    {
      PurchaseOrderTypeAbbreviation: 'P1',
      PurchaseOrderNo: 3,
      PurchaseOrderId: 88
    },
    {
      PurchaseOrderTypeAbbreviation: 'P2',
      PurchaseOrderNo: 5,
      PurchaseOrderId: 8
    },
    {
      PurchaseOrderTypeAbbreviation: 'P3',
      PurchaseOrderNo: 6,
      PurchaseOrderId: 45
    },
    {
      PurchaseOrderTypeAbbreviation: 'P4',
      PurchaseOrderNo: 7,
      PurchaseOrderId: 82
    },
    {
      PurchaseOrderTypeAbbreviation: 'P5',
      PurchaseOrderNo: 8,
      PurchaseOrderId: 1
    },
    {
      PurchaseOrderTypeAbbreviation: 'P6',
      PurchaseOrderNo: 7,
      PurchaseOrderId: 9
    }
  ];
  return (
    <>
      <h1 className={classes.heading}>Orders</h1>
      <ul className={classes.container}>
        {orders.map((order) => {
          return (
            <li key={order.PurchaseOrderId}>
              <Link
                to={`/orders/${order.PurchaseOrderId}`}
              >{`${order.PurchaseOrderTypeAbbreviation} - ${order.PurchaseOrderNo}`}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllOrders;
