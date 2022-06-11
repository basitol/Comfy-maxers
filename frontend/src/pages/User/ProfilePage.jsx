import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loader, FormContainer } from "../../components";
import { getUserDetails } from "../../actions/userAction";

import "./login.scss";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, errorMsg, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    //Check if password and confirm password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    } else {
      setMessage(null);

      //Dispatch Update Profile
      // dispatch(
      //     updateProfile(name, email, password)
      // );
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message ? <Message variant="danger">{message}</Message> : null}
        {errorMsg ? <Message variant="danger">{errorMsg}</Message> : null}
        {loading && <Loader />}
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

          <Form.Group controlId="password">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a valid password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a valid password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
      </Col>
    </Row>
  );
};

export default ProfilePage;
