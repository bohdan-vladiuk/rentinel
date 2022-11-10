import React from "react";
import Layout from "../../components/Layout";
import CreateProperty from "../../components/property/CreateProperty";

function Landlord() {
  return (
    <Layout role={2}>
      <div className="container-fluid">
        <h2>
          This is <b>Landlord</b> Page
        </h2>
        <CreateProperty />
      </div>
    </Layout>
  );
}

export default Landlord;
