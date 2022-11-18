import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Link from "next/link";
import Layout from "components/auth/Layout";

import useAuth from "hooks/useAuth";

function Login() {
  const router = useRouter();
  const { signIn, user } = useAuth();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      router.push("/landing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="card">
        <h4 className="card-header">Log In</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="mt-2 d-flex w-100">
              <button className="btn btn-primary me-2">Log In</button>
              <Link href="/auth/register" className="btn btn-danger">
                Register
              </Link>
              <Link href="/" className="btn btn-secondary ms-auto">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
