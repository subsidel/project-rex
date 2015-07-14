import GridConstants from '../constants/GridConstants';

let GridActions = {
  updateGrid(payload) {
    this.dispatch(GridConstants.UPDATE_GRID, payload);
  },

  moveLeft(){
    this.dispatch(GridConstants.MOVE_LEFT);
  },
  moveRight(){
    this.dispatch(GridConstants.MOVE_RIGHT);
  },
  moveUp(){
    this.dispatch(GridConstants.MOVE_UP);
  },
  moveDown(){
    this.dispatch(GridConstants.MOVE_DOWN);
  }
};

export default GridActions;
