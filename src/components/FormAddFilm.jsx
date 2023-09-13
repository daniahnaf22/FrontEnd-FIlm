import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddFilm = () => {
  const [judulFilm, setjudulFilm] = useState("");
  const [deskFilm, setdeskFilm] = useState("");
  const [artisId, setartisId] = useState("");
  const [rumahProduksiId, setrumahProduksiId] = useState("");
  const [tahun, setTahun] = useState("");
  const [negaraId, setnegaraId] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveFilm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/film", {
        judulFilm: judulFilm,
        deskFilm: deskFilm,
        artisId: artisId,
        rumahProduksiId: rumahProduksiId,
        tahun: tahun,
        negaraId: negaraId,
      });
      navigate("/film");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Film</h1>
      <h2 className="subtitle">Tambah Film Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveFilm}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Nama Film</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={judulFilm}
                    onChange={(e) => setjudulFilm(e.target.value)}
                    placeholder="Nama Film"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Deskripsi Film</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={deskFilm}
                    onChange={(e) => setdeskFilm(e.target.value)}
                    placeholder="Deskripsi Film"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Nama artis</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={artisId}
                    onChange={(e) => setartisId(e.target.value)}
                    placeholder="Nama artis"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Nama Rumah Produksi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={rumahProduksiId}
                    onChange={(e) => setrumahProduksiId(e.target.value)}
                    placeholder="Nama Rumah Produksi"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Tahun Film</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                    placeholder="Tahun Film"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Negara</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={negaraId}
                    onChange={(e) => setnegaraId(e.target.value)}
                    placeholder="Negara"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddFilm;
