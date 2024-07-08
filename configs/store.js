import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from '@/reducers'
import { thunk } from 'redux-thunk'
const composeEnhancers = composeWithDevTools({
  name: 'job',
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
