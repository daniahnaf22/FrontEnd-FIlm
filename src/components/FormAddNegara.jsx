import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddNegara = () => {
  const [namaNegara, setnamaNegara] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveNegara = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/negara", {
        namaNegara: namaNegara,
      });
      navigate("/negara");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Negara</h1>
      <h2 className="subtitle">Tambah Negara Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveNegara}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Nama Negara</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaNegara}
                    onChange={(e) => setnamaNegara(e.target.value)}
                    placeholder="Nama Negara"
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

export default FormAddNegara;
