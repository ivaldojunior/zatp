import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>ZATP!</h1>
    <p>API de integração com o ZOOM</p>
    <p>Em breve documentação :-)</p>
  </div>
);

export default connect()(Home);
