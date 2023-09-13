import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditRumahProd = () => {
  const { id } = useParams();
  const [namaRumahProduksi, setnamaRumahProduksi] = useState("");
  const [tahunBerdiri, setTahunBerdiri] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getRumahProduksiById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/rumahproduksi/${id}`
        );
        setnamaRumahProduksi(response.data.namaRumahProduksi);
        setTahunBerdiri(response.data.tahunBerdiri);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRumahProduksiById();
  }, [id]);

  const updateRumahProduksi = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/rumahproduksi/${id}`, {
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
      <h2 className="subtitle">Edit Rumah Produksi</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateRumahProduksi}>
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
                    placeholder="Tahun Berdiri"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditRumahProd;
