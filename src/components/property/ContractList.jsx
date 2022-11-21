import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "store";
import { getUserContracts } from "store/reducers/contract";
import { addDispute, getDisputes } from "store/reducers/dispute";
import useAuth from "hooks/useAuth";
import { UserRole } from "services/config";

function ContractList() {
  const dispatch = useDispatch();
  const { contracts } = useSelector((state) => state.contract);
  const { disputes } = useSelector((state) => state.dispute);
  const { user } = useAuth();

  const validationSchema = Yup.object().shape({
    amount: Yup.string().required("Dispute Amount is required"),
    description: Yup.string().required("Desciption is required"),
  });

  const status = [
    {
      text: "Claimed",
      btnStyle: "btn-outline-secondary",
    },
    {
      text: "Denied",
      btnStyle: "btn-secondary",
    },
    {
      text: "Approved",
      btnStyle: "btn-success",
    },
  ];
  const contractStatus = disputes.reduce((arr, item) => {
    return { ...arr, [item?.contractId]: item?.status };
  }, {});

  const [show, setShow] = useState(false);
  const [contract, setContract] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      description: "",
      amount: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const handleClose = (errors) => {
    if (!errors?.amount && !errors?.description) setShow(false);
  };

  // Show Dispute Modal
  const handleShow = (contract) => {
    setContract(contract);
    reset();
    setShow(true);
  };

  // Submit Dispute
  const onSubmit = (dispute) => {
    dispute.contractId = contract._id;
    dispute.claimerEmail = user.email;
    dispatch(addDispute(dispute));
  };

  useEffect(() => {
    dispatch(getUserContracts(user));
    dispatch(getDisputes());
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <h5 className="card-header">Contract List</h5>
          <ul className="list-group list-group-flush">
            {contracts.map((contract, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <div className="row">
                    <div className="col-md-9">
                      <div>
                        <b>PropertyId:</b> {contract.propertyId}
                      </div>
                      <div>
                        <b>Tenant:</b> {contract.tenantEmail}
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <b>From:</b>{" "}
                          {String(contract.startDate).substring(0, 10)}
                        </div>
                        <div className="col-md-6">
                          <b>To:</b> {String(contract.endDate).substring(0, 10)}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <Stack gap={2}>
                        {contractStatus[contract._id] === undefined ? (
                          <button
                            className="btn btn-primary w-100"
                            disabled={user.role === UserRole.TENANT}
                            onClick={() => handleShow(contract)}
                          >
                            Dispute
                          </button>
                        ) : (
                          <button
                            className={`btn ${
                              status[contractStatus[contract._id]].btnStyle
                            } w-100`}
                            disabled
                          >
                            {status[contractStatus[contract._id]].text}
                          </button>
                        )}
                      </Stack>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Claim Dispute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="contractId">
              <Form.Label>Contract ID</Form.Label>
              <Form.Control
                type="text"
                name="contractId"
                value={contract._id}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Claimer Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                disabled
              />
            </Form.Group>
            <Form.Group className="w-50" controlId="amount">
              <Form.Label>Dispute Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                {...register("amount")}
                className={`form-control ${errors.amount ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.amount?.message}</div>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("description")}
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.description?.message}
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Select Picture</Form.Label>
              <Form.Control type="file" name="image" {...register("image")} />
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="primary"
                type="submit"
                onClick={() => handleClose(errors)}
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

      {/* <Modal show={show.upload} onHide={closeUpload}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmitPhoto)}>
            <Form.Group className="mb-3" controlId="upload">
              <Form.Label>Select Picture</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={uploadToClient}
                {...register("image")}
              />
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
              <Button
                type="submit"
                variant="primary"
                // onClick={uploadToServer}
                onClick={closeUpload}
                className="ms-auto"
              >
                Upload
              </Button>
              <Button variant="secondary" onClick={closeUpload}>
                Cancel
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default ContractList;
