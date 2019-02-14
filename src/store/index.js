import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

const persistedReducer = persistReducer(persistConfig, reducers)

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(persistedReducer, initialState, enhancer)
}


const store = configureStore({})
let persistor = persistStore(store)
export default {store, persistor}