import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { store } from './stores/store'
import { Provider } from 'react-redux'
import './App/index.module.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
