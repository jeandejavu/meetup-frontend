import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import history from '~/routes/history'
import rootReducer from './ducks'
import rootSaga from './sagas'

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
    : compose(applyMiddleware(...middlewares))

const store = createStore(rootReducer(history), composer)

sagaMiddleware.run(rootSaga)

export default store
