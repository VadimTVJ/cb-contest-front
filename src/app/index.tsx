import compose from 'compose-function';
import { createRoot } from 'react-dom/client';

import { Routes } from '../pages';
import { withQuery, withTmaSdk, withUi } from './providers';

const App = compose(withTmaSdk, withQuery, withUi)(Routes);
createRoot(document.getElementById('root')!).render(
  <App />
);
