import { Link } from "react-router-dom";
import React from "react";

function Table({ data, deletionModal, link, name = "name" }) {
  return (
    <div className="table-responsive mb-3">
      <table className="border table table-light table-striped">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th className="function-col text-right" />
          </tr>
        </thead>
        <tbody className="table-light">
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link to={`/${link}/${item.id}`}>{item[name]}</Link>
                </td>
                <td className="d-flex align-items-center justify-content-end">
                  <div>
                    <button
                      className="btn btn-outline-dark"
                      type="button"
                      onClick={() => deletionModal(item)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
