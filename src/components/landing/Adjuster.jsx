import React, { useEffect } from "react";
import Layout from "components/Layout";

import { useDispatch, useSelector } from "store";
import { getDisputes, handleDispute } from "store/reducers/dispute";
import useAuth from "hooks/useAuth";

import { Stack } from "react-bootstrap";

function Adjuster() {
  const dispatch = useDispatch();
  const { disputes } = useSelector((state) => state.dispute);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getDisputes());
  }, []);

  return (
    <Layout>
      <div className="container-fluid">
        <h2 className="row text-center">
          <p>
            This is <b>Adjuster</b> Page
          </p>
        </h2>
        <div className="row">
          <div className="col-md-6 pe-1">
            <div className="card border-primary">
              <h5 className="card-header">Dispute List</h5>
              <ul className="list-group list-group-flush">
                {disputes.map((dispute, index) => {
                  if (dispute.status === 0)
                    return (
                      <li className="list-group-item" key={index}>
                        <div className="row">
                          <div className="col-md-9">
                            <div>
                              <b>ContractId:</b> {dispute.contractId}
                            </div>
                            <div className="row">
                              <b>Description:</b>
                              <div className="ps-5">{dispute.description}</div>
                            </div>
                            <div className="row">
                              <div className="col-md-8">
                                <b>Claimer:</b> {dispute.claimerEmail}
                              </div>
                              <div className="col-md-4">
                                <b>Amount:</b> {dispute.amount}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <Stack gap={1}>
                              <button
                                className="btn btn-primary w-100"
                                onClick={handleDispute(
                                  dispute._id,
                                  true,
                                  user.email
                                )}
                              >
                                Approve
                              </button>
                              <button
                                className="btn btn-secondary w-100"
                                onClick={handleDispute(
                                  dispute._id,
                                  false,
                                  user.email
                                )}
                              >
                                Disapprove
                              </button>
                            </Stack>
                          </div>
                        </div>
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-primary">
              <h5 className="card-header">Handled List</h5>
              <ul className="list-group list-group-flush">
                {disputes.map((dispute, index) => {
                  if (dispute.status !== 0)
                    return (
                      <li className="list-group-item" key={index}>
                        <div className="row">
                          <div className="col-md-9">
                            <div>
                              <b>ContractId:</b> {dispute.contractId}
                            </div>
                            <div className="row">
                              <b>Description:</b>
                            </div>
                            <div className="row ps-5">
                              {dispute.description}
                            </div>
                            <div className="row">
                              <div className="col-md-8">
                                <b>Claimer:</b> {dispute.claimerEmail}
                              </div>
                              <div className="col-md-4">
                                <b>Amount:</b> {dispute.amount}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            {dispute.status === 2 ? (
                              <button
                                className="btn btn-primary w-100"
                                disabled
                              >
                                Approved
                              </button>
                            ) : (
                              <button
                                className="btn btn-secondary w-100"
                                disabled
                              >
                                Disapproved
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Adjuster;
