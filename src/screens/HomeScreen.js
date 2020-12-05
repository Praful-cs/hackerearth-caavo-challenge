import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Image, Button } from 'react-bootstrap';
import User from '../components/User';
import Message from '../components/Message';
import Loader from '../components/Loader';
import profileImg from '../assets/images/profile.png';
import { listUsers, setFilter } from '../actions/usersActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.usersList);
  const { users, loading, error } = usersList;
  const [selectStatus, setSelectStatus] = useState([]);

  useEffect(() => {
    dispatch(listUsers());
    setSelectStatus(users.map(() => false));
  }, [dispatch]);

  const handleClick = (index) => {
    const newSelectStatus = [...selectStatus];
    newSelectStatus[index] = !selectStatus[index];
    setSelectStatus(newSelectStatus);
  };

  const updateFilter = (val) => {
    dispatch(setFilter(val));
  };

  return (
    <>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
        <>
          <Form>
            <Row>
              <Col md={4}>
                <Form.Group as={Row} controlId="formPlaintextLogo">
                  <Image width="200px" src={profileImg} alt='logo' fluid />
                  <Col sm="10">
                    <Form.Control type="file" placeholder="" />
                  </Col>
                </Form.Group>
              </Col>
              <Col className="mt-5" md={8}>
                <Form.Group as={Row} controlId="formPlaintextName">
                  <Form.Label column>
                Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextDesc">
                  <Form.Label column>
                Description
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}>
              <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column>
              Sort By
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    as="select"
                    onChange={(e) => updateFilter(e.target.value)}
                  >
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {
              users.map((user, id) => (
                <Col onClick={() => handleClick(id)} key={user.id} sm={12} md={6} lg={4} xl={3}>
                  <User
                    handleClick={handleClick}
                    id={id}
                    product={user}
                    selectStatus={selectStatus[id]}
                  />
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col md={2}>
              <Button
                className="btn-block"
                type="button"
              >
                Update
              </Button>
            </Col>
            <Col md={2}>
              <Button
                className="btn-block"
                type="button"
              >
                Remove
              </Button>
            </Col>
          </Row>
        </>
      }
    </>
  );
};

export default HomeScreen;
