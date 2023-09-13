import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NegaraList = () => {
  const [negaras, setNegara] = useState([]);

  useEffect(() => {
    getNegaras();
  }, []);

  const getNegaras = async () => {
    const response = await axios.get("http://localhost:5000/negara");
    setNegara(response.data);
  };

  const deleteNegara = async (negaraId) => {
    await axios.delete(`http://localhost:5000/negara/${negaraId}`);
    getNegaras();
  };

  return (
    <div>
      <h1 className="title">Negara</h1>
      <h2 className="subtitle">List Negara</h2>
      <Link to="/negara/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Negara</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {negaras.map((negara, index) => (
            <tr key={negara.id}>
              <td>{index + 1}</td>
              <td>{negara.namaNegara}</td>
              <td>
                <Link
                  to={`/negara/edit/${negara.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteNegara(negara.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NegaraList;
