import React from "react";
import useAuth from "hooks/useAuth";

import Landlord from "./landlord";
import Tenant from "./tenant";
import Adjuster from "./adjuster";

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
