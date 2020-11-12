import React from 'react';
import logoPapo from '../assets/logo-img.png';

import '../styles/startpage.css';

function StartPage() {
  return (
    <div className="start-landing">
      <div className="header-start">
        <img src={logoPapo} alt="Papo Watch Party" />
        <h1>Let's get started!</h1>
      </div>
      <div className="link-container">
        <input type="text" placeholder="http://party.privoce.com/ky.dUHASL3u1jm0KAASI3ASASW23" />
        <h2>That's your party link. Go share it!</h2>
        <label>
          <input type="checkbox" name="control" id="control-checker" /> Only I have control
        </label>
        <button>Start the Party!</button>
      </div>
      <div className="terms-service">
        <h3>Our Terms of Service</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae maxime commodi, est quaerat recusandae dicta quos
          molestiae impedit facilis cupiditate expedita inventore quia deleniti adipisci sint dolore laudantium quas culpa necessitatibus.
          Facere illum excepturi velit doloribus similique veritatis molestias saepe. Soluta, consequatur impedit accusamus perspiciatis ea
          eius praesentium sequi.
        </p>
      </div>
      <footer>© Privoce 2020</footer>
    </div>
  );
}

export default StartPage;
