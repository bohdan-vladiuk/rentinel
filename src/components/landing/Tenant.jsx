import React from "react";
import Layout from "components/Layout";

import PropertyRent from "components/property/PropertyRent";
import ContractList from "components/property/ContractList";

function Tenant() {
  return (
    <Layout>
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
            <ContractList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tenant;
