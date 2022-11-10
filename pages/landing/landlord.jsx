import React from "react";
import Layout from "../../components/Layout";
import CreateProperty from "../../components/property/CreateProperty";

function Landlord() {
  return (
    <Layout role={2}>
      <div className="container-fluid">
        <h2 className="row text-center">
          <p>
            This is <b>Landlord</b> Page
          </p>
        </h2>
        <div className="col-md-8 offset-md-2 mb-2">
          <CreateProperty />
        </div>
      </div>
    </Layout>
  );
}

export default Landlord;
