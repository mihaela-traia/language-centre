import React from "react";

export default function Instructions() {
  return (
    <div className="row col col-12 d-flex justify-content-center p-5">
      <p className="info col-12 montserrat-sans-p px-5 pt-0 pb-2">
        <b>Înainte să începi: </b>
      </p>
      <ul className="instructions row col-12 montserrat-sans-p px-5">
        <li className="col-12">
          Trebuie să completezi testul <b>într-o sesiune</b>, asigură-te că ai o
          conexiune stabliă la internet pentru a evita întreruperlie în timpul
          testului.
        </li>
        <li className="col-12">
          Testul poate dura aproximativ <b>20-30 de minute</b>. Asigură-te că ai
          suficient timp pentru a-l finaliza fără grabă.
        </li>
        <li className="col-12">
          Odată ce ai trecut la următoarea întrebare,
          <b> nu vei mai putea reveni la întrebările anterioare</b>. Te rugăm să
          te asiguri că ești mulțumit de răspunsul ales înainte de a merge mai
          departe.
        </li>
        <li className="col-12">
          Acest test este conceput pentru a evalua
          <b> nivelul tău real de engleză</b>. Răspunde la întrebări pe baza
          cunoștințelor tale, fără ajutor din exterior.
        </li>
        <li className="col-12">
          Testul va consta în întrebări cu <b>variante multiple de răspuns</b>.
          Citește fiecare întrebare cu atenție.
        </li>
        <li className="col-12">
          Relaxează-te și abordează testul cu o minte clară. Acesta este doar un
          instrument de evaluare pentru a te ajuta să-ți îmbunătățești
          abliitățlie.
        </li>
      </ul>
    </div>
  );
}
