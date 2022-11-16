import React from "react";
import Layout from "components/Layout";

function Tenant() {
  return (
    <Layout role={1}>
      <div className="container-fluid">
        <h2 className="row text-center">
          <p>
            This is <b>Tenant</b> Page
          </p>
        </h2>
      </div>
    </Layout>
  );
}

export default Tenant;
