import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  // Kirim data token ke server untuk verifikasi atau pembuatan sesi.
  console.log(response);
};

const LoginPage = () => {
  return (
    <div>
      <h1>Halaman Login</h1>
      <GoogleLogin
        clientId="809715145192-29tk2de9840dojcu77nh4rtjigu37nn8.apps.googleusercontent.com
        "
        buttonText="Masuk dengan Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginPage;
