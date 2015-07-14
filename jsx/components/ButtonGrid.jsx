import React from 'react';
import Button from './Button.jsx';
import StyleSheet from 'react-style';
import EventListener from 'react-event-listener';
import Keycodes from '../lib/keycodes';

import Fluxxor from 'fluxxor';
let FluxMixin = Fluxxor.FluxMixin(React);
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

const Style = StyleSheet.create({
  row: {
    display: 'block'
  }
});

function equalCoords(a, b) {
  return (a.x === b.x) && (a.y === b.y);
}

var ButtonGrid = React.createClass({
  mixins: [
    EventListener, FluxMixin, StoreWatchMixin('GridStore')
  ],

  listeners: {
    document: {
      keydown: 'onKeyDown'
    }
  },

  onKeyDown(e) {
    e.preventDefault();
    e.stopPropagation();

    switch (e.which) {
    case Keycodes.Left :
      this.getFlux().actions.moveLeft();
      break;
    case Keycodes.Right :
      this.getFlux().actions.moveRight();
      break;
    case Keycodes.Up :
      this.getFlux().actions.moveUp();
      break;
    case Keycodes.Down :
      this.getFlux().actions.moveDown();
      break;
    }
  },

  getInitialState() {
    return {};
  },

  getStateFromFlux() {
    return this.getFlux().store('GridStore').getState();
  },

  render() {
    let coord = {
      x: 0,
      y: 0
    };

    let buttonRows = this.props.buttonGridData.map((buttonRowData) => {
      let buttonRow = buttonRowData.map((buttonData) => {
        let focus = equalCoords(coord, this.state.focussed);

        let key = coord.x + ':' + coord.y;
        coord.x++;

        return (
          <Button focus={focus} key={key}>{buttonData.label}</Button>
        )
      });

      let key = 'row' + coord.y;
      coord.y++;
      coord.x = 0;

      return (
        <div key={key} styles={[Style.row]}>{buttonRow}</div>
      );
    });

    return (
      <div>
        {buttonRows}
      </div>
    );
  }

});

export
default ButtonGrid;
