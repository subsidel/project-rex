import React from 'react';
import StyleSheet from 'react-style';

import Fluxxor from 'fluxxor';
let FluxMixin = Fluxxor.FluxMixin(React);
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

const Style = StyleSheet.create({
  button: {
    display: 'inline-block',
    border: 'black solid 2px',
    margin: 5
  },
  focussed: {
    backgroundColor: 'red'
  },
  notFocussed: {
    backgroundColor: 'blue'
  }
});

function equalCoords(a, b) {
  return (a.x === b.x) && (a.y === b.y);
}

var Button = React.createClass({
  mixins: [
    FluxMixin, StoreWatchMixin('GridStore')
  ],

  getInitialState() {
    return {};
  },

  getStateFromFlux() {
    let focus = this.getFlux().store('GridStore').getState().focus;
    let focussed = equalCoords(this.getCoords(), focus);
    return {focussed};
  },

  getCoords() {
    if(!this.coords) {
      let x = this.props.coordx;
      let y = this.props.coordy;
      this.coords = {x,y};
    }
    return this.coords;
  },

  render() {
    let focusStyle = this.state.focussed ? Style.focussed : Style.notFocussed;

    return (
      <div styles={[Style.button, focusStyle]}>
        <span>{this.props.children}</span>
      </div>
    );
  }

});

export
default Button;
