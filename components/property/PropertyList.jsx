import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../store";
import { getProperties } from "../../store/reducers/property";

function PropertyList() {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <div className="container-fluid">
      {properties.map((prop, index) => (
        <div className="card mb-3" key={index}>
          <h5 className="card-header">{prop._id}</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-right">
                <b>Owner:</b>
              </div>
              <div className="col-md-8">{prop.email}</div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <b>Deposit:</b>
              </div>
              <div className="col-md-8">{prop.deposit}</div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <b>Rent Amount:</b>
              </div>
              <div className="col-md-8">{prop.rentAmount}</div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <b>Start Date:</b>
              </div>
              <div className="col-md-8">{prop.startDate}</div>
            </div>
            <div className="row">
              <div className="col-md-4 text-right">
                <b>End Date:</b>
              </div>
              <div className="col-md-8">{prop.endDate}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
