import React, { useEffect } from "react";
import { useDispatch, useSelector } from "store";
import { getContracts } from "store/reducers/contract";

function ContractList() {
  const dispatch = useDispatch();
  const { contracts } = useSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getContracts());
  }, []);

  return (
    <div className="container-fluid">
      <ul className="list-group">
        {contracts.map((contract, index) => {
          <li className="list-group-item" key={index}>
            {contract.propertyId}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default ContractList;
