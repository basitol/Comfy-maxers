import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loader } from "../../components";
import { allOrderList } from "../../actions/orderActions";

import { FaTimes } from "react-icons/fa";

const OrderListPage = () => {
  const dispatch = useDispatch(); // dispatch is the dispatch function from useDispatch
  const navigate = useNavigate(); // navigate is a hook that we can use to navigate to other pages

  const orderListAll = useSelector((state) => state.orderListAll);
  const { loading, error, orders } = orderListAll;

  console.log(orderListAll);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      // if user is logged in and is an admin
      dispatch(allOrderList()); // get all orders
    } else {
      navigate("/login"); // if user is not logged in or is not an admin, navigate to login page
    }
  }, [dispatch, userInfo, navigate]); // run this effect only when userInfo changes

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>TOTAL PRICE</th>
              <th>DATE</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.totalPrice}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="outline-primary" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListPage;
