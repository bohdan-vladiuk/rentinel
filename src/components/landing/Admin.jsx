import React, { useEffect } from "react";
import { Container, Row, Col, Stack, Card, Table } from "react-bootstrap";
import Layout from "components/Layout";

import { useDispatch, useSelector } from "store";
import { getUsers } from "store/reducers/user";
import { getProperties } from "store/reducers/property";
import { getContracts } from "store/reducers/contract";
import { getDisputes } from "store/reducers/dispute";
import { UserRole, DisputeStatus } from "services/config";

function Admin() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { properties } = useSelector((state) => state.property);
  const { contracts } = useSelector((state) => state.contract);
  const { disputes } = useSelector((state) => state.dispute);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getProperties());
    dispatch(getContracts());
    dispatch(getDisputes());
  }, []);

  const getUserRole = (role) =>
    role == UserRole.LANDLORD
      ? "landlord"
      : role == UserRole.TENANT
      ? "tenant"
      : "adjuster";

  const getDisputeStatus = (status) =>
    status == DisputeStatus.CLAIMED
      ? "Claimed"
      : status == DisputeStatus.DENIED
      ? "Denied"
      : "Approved";

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center">
              This is <b>Admin</b> Page
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Stack gap={3}>
              <Card>
                <Card.Header as="h5">User List</Card.Header>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{getUserRole(user.role)}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.firstname} {user.lastname}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
              <Card>
                <Card.Header as="h5">Contract List</Card.Header>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ContractId</th>
                      <th>Tenant</th>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((contract, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contract._id}</td>
                        <td>{contract.tenantEmail}</td>
                        <td>{String(contract.startDate).substring(0, 10)}</td>
                        <td>{String(contract.endDate).substring(0, 10)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Stack>
          </Col>
          <Col xs={12} sm={6}>
            <Stack gap={3}>
              <Card>
                <Card.Header as="h5">Property List</Card.Header>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>PropertyId</th>
                      <th>Landlord</th>
                      <th>Deposit</th>
                      <th>Rent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((prop, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{prop._id}</td>
                        <td>{prop.email}</td>
                        <td>{prop.deposit}</td>
                        <td>{prop.rentAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
              <Card>
                <Card.Header as="h5">Dispute List</Card.Header>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ContractId</th>
                      <th>Claimer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {disputes.map((dispute, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dispute.contractId}</td>
                        <td>{dispute.claimerEmail}</td>
                        <td>{dispute.amount}</td>
                        <td>{getDisputeStatus(dispute.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Admin;
