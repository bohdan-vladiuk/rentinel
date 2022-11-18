import React from "react";
import Layout from "components/Layout";
import CreateProperty from "components/property/CreateProperty";
import ContractList from "components/property/ContractList";

function Landlord() {
  return (
    <Layout>
      <div className="container-fluid">
        <h2 className="row text-center">
          <p>
            This is <b>Landlord</b> Page
          </p>
        </h2>
        <div className="row">
          <div className="col-md-7">
            <CreateProperty />
          </div>
          <div className="col-md-5 ps-1">
            <ContractList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Landlord;
