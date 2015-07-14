import Fluxxor from 'fluxxor';
import GridConstants from '../constants/GridConstants';

let GridStore = Fluxxor.createStore({
  initialize() {
      this.focus = {
        x: 0,
        y: 0
      };

      this.bindActions(GridConstants.UPDATE_FOCUS, this.onUpdate,
        GridConstants.MOVE_UP, this.onMoveUp,
        GridConstants.MOVE_DOWN, this.onMoveDown,
        GridConstants.MOVE_LEFT, this.onMoveLeft,
        GridConstants.MOVE_RIGHT, this.onMoveRight);
    },

    onUpdate(payload) {
      this.focus = payload;
      this.emit('change');
    },

    onMoveUp() {
      let coord = this.focus;

      this.focus = {
        x: coord.x,
        y: --coord.y
      }
      this.emit('change');
    },

    onMoveDown() {
      let coord = this.focus;

      this.focus = {
        x: coord.x,
        y: ++coord.y
      }
      this.emit('change');
    },

    onMoveLeft() {
      let coord = this.focus;

      this.focus = {
        x: --coord.x,
        y: coord.y
      }
      this.emit('change');
    },

    onMoveRight() {
      let coord = this.focus;
      this.focus = {
        x: ++coord.x,
        y: coord.y
      }
      this.emit('change');
    },

    getState() {
      let focussed = this.focus;
      return {
        focussed
      }
    }
});

export default GridStore;
