import { createStore } from 'redux';

const state = { hello: true, world: 1 };

const store = createStore((e) => e, state);

export default store;
