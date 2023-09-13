import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ArtisList = () => {
  const [artis, setArtis] = useState([]);

  useEffect(() => {
    getArtis();
  }, []);

  const getArtis = async () => {
    const response = await axios.get("http://localhost:5000/artis");
    setArtis(response.data);
  };

  const deleteArtis = async (artisId) => {
    await axios.delete(`http://localhost:5000/artis/${artisId}`);
    getArtis();
  };

  return (
    <div>
      <h1 className="title">Artis</h1>
      <h2 className="subtitle">List Artis</h2>
      <Link to="/artis/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Artis</th>
            <th>Tahun Lahir</th>
            <th>Asal Negara</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artis.map((artis, index) => (
            <tr key={artis.id}>
              <td>{index + 1}</td>
              <td>{artis.namaArtis}</td>
              <td>{artis.tahunLahir}</td>
              <td>{artis.kewarganegaraan}</td>
              <td>
                <Link
                  to={`/artis/edit/${artis.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteArtis(artis.id)}
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

export default ArtisList;
