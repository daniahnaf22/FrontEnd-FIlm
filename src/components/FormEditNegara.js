import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditNegara = () => {
  const [namaNegara, setnamaNegara] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getNegaraById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/negara/${id}`);
        setnamaNegara(response.data.namaNegara);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getNegaraById();
  }, [id]);

  const updateNegara = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/negara/${id}`, {
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
      <h2 className="subtitle">Edit Negara</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateNegara}>
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

export default FormEditNegara;
