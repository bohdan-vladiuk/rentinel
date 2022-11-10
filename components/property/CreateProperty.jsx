import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { propertyService, alertService } from "../../services";

function CreateProperty() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    address1: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    zipcode: Yup.string().required("Zip Code is required"),
    deposit: Yup.number().required("Deposit is required"),
    rentAmount: Yup.number().required("Rent Amount is required"),
    // startDate: Yup.date().required("Start Date is required"),
    // endDate: Yup.date().required("End Date is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (property) => {
    return propertyService
      .create(property)
      .then(() => {
        alertService.success("Property created successfully ", {
          keepAfterRouteChange: true,
        });
        // router.push("login");
      })
      .catch(alertService.error);
  };

  return (
    <div className="card">
      <h4 className="card-header">Property Create</h4>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
          </div>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
