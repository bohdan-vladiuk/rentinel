import React from "react";
import useAuth from "hooks/useAuth";

import Landlord from "components/landing/Landlord";
import Tenant from "components/landing/Tenant";
import Adjuster from "components/landing/Adjuster";

function Landing() {
  const { user } = useAuth();

  return (
    <>
      {user?.role === 0 && <Landlord />}
      {user?.role === 1 && <Tenant />}
      {user?.role === 2 && <Adjuster />}
    </>
  );
}

export default Landing;
