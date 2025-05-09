"use client";
import HomePage from '../compenents/HomePage';
import Login from '../compenents/login';
import { useState, useImperativeHandle} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  const [isLogin, setLogin] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>{isLogin ? "Home" : "Login"}</title>
      </head>
      <body>
        {isLogin ? <HomePage setLogin={setLogin} /> : <Login setLogin={setLogin} />}
      </body>
    </html>
  );
}