import Fluxxor from 'fluxxor';
import GridStore from '../stores/GridStore';
import GridActions from '../actions/GridActions';

let stores = {
  GridStore: new GridStore()
};

let flux = new Fluxxor.Flux(stores, GridActions);

flux.on('dispatch', function(type) {
  console.log('[Dispatch]', type);
});

export default flux;
