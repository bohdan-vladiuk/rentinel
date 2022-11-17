import React, { useEffect } from "react";
import Layout from "components/Layout";
import PropertyRent from "components/property/PropertyRent";
import { useDispatch, useSelector } from "store";
import { getContracts } from "store/reducers/contract";

function Tenant() {
  const dispatch = useDispatch();
  const { contracts } = useSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getContracts());
  }, []);

  return (
    <Layout role={1}>
      <div className="container-fluid">
        <h2 className="row text-center">
          <p>
            This is <b>Tenant</b> Page
          </p>
        </h2>
        <div className="row">
          <div className="col-md-6 pe-1">
            <PropertyRent />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Contract List</h4>
              </div>
              <ul className="list-group list-group-flush">
                {contracts.map((contract, index) => (
                  <li className="list-group-item" key={index}>
                    <div className="row">
                      <div className="col-md-4 text-right">
                        <b>PropertyId:</b>
                      </div>
                      <div className="col-md-8">{contract.propertyId}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 text-right">
                        <b>Tenant:</b>
                      </div>
                      <div className="col-md-8">{contract.tenantEmail}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 text-right">
                        <b>From:</b>
                      </div>
                      <div className="col-md-8">{contract.startDate}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 text-right">
                        <b>To:</b>
                      </div>
                      <div className="col-md-8">{contract.endDate}</div>
                    </div>
                    <div className="row mt-3">
                      <button className="btn btn-secondary disabled">
                        Dispute
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tenant;
