import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch } from "../../store";
import { addProperty } from "../../store/reducers/property";

function CreateProperty() {
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    address1: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    zipcode: Yup.string().required("Zip Code is required"),
    deposit: Yup.number()
      .typeError("Deposit must be a number")
      .required("Deposit is required"),
    rentAmount: Yup.number()
      .typeError("Rent amount must be a number")
      .required("Rent Amount is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (property) => {
    dispatch(addProperty(property));
  };

  return (
    <div className="card">
      <h4 className="card-header">Property Create</h4>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Landlord Email</label>
                <input
                  name="email"
                  type="email"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Address 1</label>
                <input
                  name="address"
                  type="text"
                  {...register("address1")}
                  className={`form-control ${
                    errors.address1 ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.address1?.message}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Address 2</label>
                <input
                  name="city"
                  type="text"
                  {...register("address2")}
                  className={`form-control`}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">State</label>
                <input
                  name="state"
                  type="text"
                  {...register("state")}
                  className={`form-control ${errors.state ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.state?.message}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">City</label>
                <input
                  name="city"
                  type="text"
                  {...register("city")}
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.city?.message}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Country</label>
                <input
                  name="country"
                  type="text"
                  {...register("country")}
                  className={`form-control ${
                    errors.country ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.country?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Zip Code</label>
                <input
                  name="zipcode"
                  type="text"
                  {...register("zipcode")}
                  className={`form-control ${
                    errors.zipcode ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.zipcode?.message}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Deposit</label>
                <input
                  name="deposit"
                  type="text"
                  {...register("deposit")}
                  className={`form-control ${
                    errors.deposit ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.deposit?.message}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="mt-2">Rent Amount</label>
                <input
                  name="rentAmount"
                  type="text"
                  {...register("rentAmount")}
                  className={`form-control ${
                    errors.rentAmount ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.rentAmount?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <h5>Availability From</h5>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="startDate">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  {...register("startDate")}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  {...register("endDate")}
                />
              </Form.Group>
            </div>
          </div>
          <div className="mt-2">
            <button className="btn btn-primary me-2">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProperty;
