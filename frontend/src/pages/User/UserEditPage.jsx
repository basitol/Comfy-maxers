import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loader, FormContainer } from "../../components";
import { getUserDetails, updateUser } from "../../actions/userAction";
import { USER_UPDATE_RESET } from "../../constants/userConstants";

import "./login.scss";

const UserEditPage = () => {
  const { id } = useParams(); // get userId from url
  const navigate = useNavigate(); // navigate is a hook that we can use to navigate to other pages

  const [name, setName] = useState(""); // set name to empty string
  const [email, setEmail] = useState(""); // set email to empty string
  const [isAdmin, setIsAdmin] = useState(false); // set isAdmin to false

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, errorMsg, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading: loadingUpdate, errorMsg: errorUpdate, success } = userUpdate;

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    }
    if (!user.name || user._id !== id) {
      // if user is not logged in or user is not the same as the userId in the url
      dispatch(getUserDetails(id));
    } else {
      setName(user.name); // set the name to the user's name
      setEmail(user.email); // set the email to the user's email
      setIsAdmin(user.isAdmin); // set the isAdmin to the user's isAdmin
    }
  }, [user, dispatch, id, success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: id, name, email, isAdmin }));
  };

  return (
    <>
      <Link to="/admin/userlist">Back to users</Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message>{errorUpdate}</Message>}
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
