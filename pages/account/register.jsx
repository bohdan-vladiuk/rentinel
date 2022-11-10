import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Link from "next/link";
import Layout from "../../components/account/Layout";
import { userService, alertService } from "../../services";

function Register() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    role: Yup.string().required("User Role is required"),
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (user) => {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  };

  return (
    <Layout>
      <div className="card">
        <h4 className="card-header">Register</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="me-5">Role</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="userRole1"
                  value="1"
                  {...register("role")}
                />
                <label className="form-check-label" htmlFor="userRole1">
                  Tenant
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="userRole2"
                  value="2"
                  {...register("role")}
                />
                <label className="form-check-label" htmlFor="userRole2">
                  Landlord
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="userRole3"
                  value="3"
                  {...register("role")}
                />
                <label className="form-check-label" htmlFor="userRole3">
                  Adjuster
                </label>
              </div>
              <div className="invalid-feedback">{errors.role?.message}</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">First Name</label>
                  <input
                    name="firstname"
                    type="text"
                    {...register("firstname")}
                    className={`form-control ${
                      errors.firstname ? "is-invalid" : ""
                    }`}
                  />
                </div>
                <div className="invalid-feedback">
                  {errors.firstname?.message}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">Last Name</label>
                  <input
                    name="lastname"
                    type="text"
                    {...register("lastname")}
                    className={`form-control ${
                      errors.lastname ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.lastname?.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mt-2">Email Address</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">Address</label>
                  <input
                    name="address"
                    type="text"
                    {...register("address")}
                    className={`form-control`}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">City</label>
                  <input
                    name="city"
                    type="text"
                    {...register("city")}
                    className={`form-control`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">Country</label>
                  <input
                    name="country"
                    type="text"
                    {...register("country")}
                    className={`form-control`}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mt-2">Zip Code</label>
                  <input
                    name="zipcode"
                    type="text"
                    {...register("zipcode")}
                    className={`form-control`}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mt-2">Password</label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
              <label className="mt-2">Confirm Password</label>
              <input
                name="password2"
                type="password"
                {...register("password2")}
                className={`form-control ${
                  errors.password2 ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.password2?.message}
              </div>
            </div>
            <div className="mt-2">
              <button className="btn btn-primary me-2">Register</button>
              <Link href="/account/login" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
