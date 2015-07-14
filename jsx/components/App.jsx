import React from 'react';
import ButtonGrid from './ButtonGrid.jsx';
import buttonGridData from './buttonGridData.json';
import Flux from '../flux/Flux';

var App = React.createClass({


  render() {
    return (
      <ButtonGrid flux={Flux} buttonGridData={buttonGridData} />
    );
  }

});

export default App;
