import React from "react";
import useAuth from "hooks/useAuth";

import Landlord from "components/landing/Landlord";
import Tenant from "components/landing/Tenant";
import Adjuster from "components/landing/Adjuster";
import Admin from "components/landing/Admin";
import { UserRole } from "services/config";

function Landing() {
  const { user } = useAuth();

  return (
    <>
      {user?.role === UserRole.ADMIN && <Admin />}
      {user?.role === UserRole.LANDLORD && <Landlord />}
      {user?.role === UserRole.TENANT && <Tenant />}
      {user?.role === UserRole.ADJUSTER && <Adjuster />}
    </>
  );
}

export default Landing;
