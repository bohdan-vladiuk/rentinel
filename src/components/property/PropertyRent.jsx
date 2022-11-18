import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";

import { useDispatch, useSelector } from "store";
import { useForm } from "react-hook-form";
import { getProperties } from "store/reducers/property";
import { addContract } from "store/reducers/contract";
import useAuth from "hooks/useAuth";

function PropertyRent() {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const [property, setProperty] = useState({});
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const handleClose = () => setShow(false);

  const handleShow = (prop) => {
    setProperty(prop);
    reset();
    setShow(true);
  };

  const onSubmit = (contract) => {
    contract.propertyId = property._id;
    contract.tenantEmail = user.email;
    dispatch(addContract(contract));
  };

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <>
      <div className="container-fluid">
        {properties.map((prop, index) => (
          <div className="card mb-3" key={index}>
            <h5 className="card-header d-flex justify-content-between">
              <div>{prop._id}</div>
            </h5>
            <div className="card-body">
              <div>
                <b>Owner:</b> {prop.email}
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-sm-6">
                      <b>Deposit:</b> {prop.deposit}
                    </div>
                    <div className="col-sm-6">
                      <b>Rent Amount:</b> {prop.rentAmount}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <b>Start Date:</b>{" "}
                      {String(prop.startDate).substring(0, 10)}
                    </div>
                    <div className="col-sm-6">
                      <b>End Date:</b> {String(prop.endDate).substring(0, 10)}
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleShow(prop)}
                  >
                    Rent
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Rent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Landlord Email</Form.Label>
              <Form.Control
                type="email"
                name="landlordEmail"
                value={property.email}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Tenant Email</Form.Label>
              <Form.Control
                type="email"
                name="tenantEmail"
                value={user.email}
                disabled
              />
            </Form.Group>
            <div className="row mb-3">
              <div className="col-md-6">
                <Form.Group controlId="startDate">
                  <Form.Label>Rent From</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    {...register("startDate")}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="endDate">
                  <Form.Label>Rent To</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    {...register("endDate")}
                  />
                </Form.Group>
              </div>
            </div>
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="primary"
                type="submit"
                onClick={handleClose}
                className="ms-auto"
              >
                Save
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PropertyRent;
