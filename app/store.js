import { createStore } from 'redux';
import rootReducer from  './reducers/reducers';

const Store = createStore(rootReducer)

export default Store
