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
      this.moveLeft();
      break;
    case Keycodes.Right :
      this.moveRight();
      break;
    case Keycodes.Up :
      this.moveUp();
      break;
    case Keycodes.Down :
      this.moveDown();
      break;
    }
  },

  moveXCorrection(){
    if(this.state.focus.x > (this.getRowWidth(this.state.focus.y) - 1)) {
      this.moveLeft();
      this.moveXCorrection();
    }
    if(this.state.focus.x < 0) {
      this.moveRight();
      this.moveXCorrection();
    }

  },

  moveLeft(){
    this.getFlux().actions.moveLeft();
    this.moveXCorrection();
  },
  moveRight(){
    this.getFlux().actions.moveRight();
    this.moveXCorrection();
  },
  moveUp(){
    if(this.state.focus.y === 0) {
      return;
    }
    this.getFlux().actions.moveUp();
    this.moveXCorrection();
  },
  moveDown(){
    if(this.state.focus.y === (this.getHeight() - 1)) {
      return;
    }
    this.getFlux().actions.moveDown();
    this.moveXCorrection();

  },

  getInitialState() {
    return {};
  },

  getRowWidth(rowNumber) {
    return this.props.buttonGridData[rowNumber].length;
  },

  getHeight() {
    return this.props.buttonGridData.length;
  },

  getStateFromFlux() {
    return this.getFlux().store('GridStore').getState();
  },

  render() {
    let x = 0;
    let y = 0;


    let grid = this.props.buttonGridData.map(buttonRowData => {
      let buttonRow = buttonRowData.map(buttonData => {

        let key = `${x}:${y}`;
        return (
          <Button coordx={x++} coordy={y} key={key}>{buttonData.label}</Button>
        );
      });

      let key = `row${y}`;
      y++;
      x = 0;

      return (
        <div key={key} styles={[Style.row]}>{buttonRow}</div>
      );
    });

    return (
      <div>
        {grid}
      </div>
    );
  }

});

export
default ButtonGrid;
