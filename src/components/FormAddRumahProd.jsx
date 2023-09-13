import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddRumahProd = () => {
  const [namaRumahProduksi, setnamaRumahProduksi] = useState("");
  const [tahunBerdiri, setTahunBerdiri] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveRumahProduksi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/rumahproduksi", {
        namaRumahProduksi: namaRumahProduksi,
        tahunBerdiri: tahunBerdiri,
      });
      navigate("/rumahproduksi");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Rumah Produksi</h1>
      <h2 className="subtitle">Tambah Rumah Produksi Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveRumahProduksi}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Nama Rumah Produksi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaRumahProduksi}
                    onChange={(e) => setnamaRumahProduksi(e.target.value)}
                    placeholder="Nama Rumah Produksi"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Tahun Berdiri</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tahunBerdiri}
                    onChange={(e) => setTahunBerdiri(e.target.value)}
                    placeholder="Tahun berdiri"
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

export default FormAddRumahProd;
