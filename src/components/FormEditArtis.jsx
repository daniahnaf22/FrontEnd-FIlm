import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditArtis = () => {
  const { id } = useParams();
  const [namaArtis, setNamaArtis] = useState("");
  const [tahunLahir, setTahunLahir] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getArtisById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/artis/${id}`);
        setNamaArtis(response.data.namaArtis);
        setTahunLahir(response.data.tahunLahir);
        setKewarganegaraan(response.data.kewarganegaraan);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getArtisById();
  }, [id]);

  const updateArtis = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/artis/${id}`, {
        namaArtis: namaArtis,
        tahunLahir: tahunLahir,
        kewarganegaraan: kewarganegaraan,
      });
      navigate("/artis");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Artis</h1>
      <h2 className="subtitle">Edit Artis</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateArtis}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Nama Artis</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaArtis}
                    onChange={(e) => setNamaArtis(e.target.value)}
                    placeholder="Nama Artis"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Tahun Lahir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tahunLahir}
                    onChange={(e) => setTahunLahir(e.target.value)}
                    placeholder="Tahun Lahir"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Asal Negara</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kewarganegaraan}
                    onChange={(e) => setKewarganegaraan(e.target.value)}
                    placeholder="Asal Negara"
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

export default FormEditArtis;
