import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FilmList = () => {
  const [films, setFilm] = useState([]);

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = async () => {
    const response = await axios.get("http://localhost:5000/film");
    setFilm(response.data);
  };

  const deleteFilm = async (filmId) => {
    await axios.delete(`http://localhost:5000/film/${filmId}`);
    getFilm();
  };

  return (
    <div>
      <h1 className="title">Film</h1>
      <h2 className="subtitle">List Film</h2>
      <Link to="/film/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Film</th>
            <th>Deskripsi Film</th>
            <th>Nama artis</th>
            <th>Nama Rumah Produksi</th>
            <th>Tahun Film</th>
            <th>Negara</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film, index) => (
            <tr key={film.id}>
              <td>{index + 1}</td>
              <td>{film.judulFilm}</td>
              <td>{film.deskFilm}</td>
              <td>{film.artisId}</td>
              <td>{film.rumahProduksiId}</td>
              <td>{film.tahun}</td>
              <td>{film.negaraId}</td>
              <td>
                <Link
                  to={`/film/edit/${film.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteFilm(film.id)}
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

export default FilmList;
