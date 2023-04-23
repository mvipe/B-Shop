import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { getUserDetails,updateUserProfile } from "../actions/userActions";

import FormContainer from "../components/FormContainer";
import {USER_PROFILE_UPDATE_RESET} from '../constants/userConstants'
function ProfileScreen() {
  let search = useLocation().search;
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
          dispatch({type:USER_PROFILE_UPDATE_RESET})
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, dispatch, user,success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      setMessage("Password do not match");
    } else {
      dispatch(updateUserProfile({
          'id':user._id,
          'name':name,
          'email':email,
          'password':password
      }))
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>

       

        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>

            <Form.Group controlId="password">
              <Form.Label>Pasword</Form.Label>
              <Form.Control
               
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmpassword">
              <Form.Label>Confirm Pasword</Form.Label>
              <Form.Control
                
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
