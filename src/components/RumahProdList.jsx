import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RumahProdList = () => {
  const [rumahprduksis, setRumahProduksi] = useState([]);

  useEffect(() => {
    getRumahProduksi();
  }, []);

  const getRumahProduksi = async () => {
    const response = await axios.get("http://localhost:5000/rumahproduksi");
    setRumahProduksi(response.data);
  };

  const deleteRumahProduksi = async (rumahproduksiId) => {
    await axios.delete(
      `http://localhost:5000/rumahproduksi/${rumahproduksiId}`
    );
    getRumahProduksi();
  };

  return (
    <div>
      <h1 className="title">Rumah Produksi</h1>
      <h2 className="subtitle">List Rumah Produksi</h2>
      <Link to="/rumahproduksi/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Rumah Produksi</th>
            <th>Tahun Berdiri</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rumahprduksis.map((rumahprduksi, index) => (
            <tr key={rumahprduksi.id}>
              <td>{index + 1}</td>
              <td>{rumahprduksi.namaRumahProduksi}</td>
              <td>{rumahprduksi.tahunBerdiri}</td>
              <td>
                <Link
                  to={`/rumahproduksi/edit/${rumahprduksi.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRumahProduksi(rumahprduksi.id)}
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

export default RumahProdList;
