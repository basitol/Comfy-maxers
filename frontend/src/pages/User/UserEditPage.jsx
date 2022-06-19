import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loader, FormContainer } from "../../components";
import { getUserDetails } from "../../actions/userAction";

import "./login.scss";

const UserEditPage = () => {
  const { id } = useParams(); // get userId from url
  console.log(id);

  const [name, setName] = useState(""); // set name to empty string
  const [email, setEmail] = useState(""); // set email to empty string
  const [isAdmin, setIsAdmin] = useState(false); // set isAdmin to false

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails); // userDetails is the state slice of userReducer
  const { loading, errorMsg, user } = userDetails;

  console.log(user);
  useEffect(() => {
    if (!user.name || user._id !== id) {
      // if user is not logged in or user is not the same as the userId in the url
      dispatch(getUserDetails(id));
    } else {
      setName(user.name); // set the name to the user's name
      setEmail(user.email); // set the email to the user's email
      setIsAdmin(user.isAdmin); // set the isAdmin to the user's isAdmin
    }
  }, [user, dispatch, id]); // run this effect only when userId changes

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to="/admin/userlist">Back to users</Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : errorMsg ? (
          <Message variant="danger">{errorMsg}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin" className="check">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                placeholder="Enter a valid password"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
              {/* <Form.Label>Is Admin</Form.Label> */}
            </Form.Group>

            <Button variant="primary" type="submit" className="btn">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditPage;
