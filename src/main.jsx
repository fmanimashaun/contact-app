import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import Home from './routes/Home';
import rootLoader from './utils/rootLoader';
import rootAction from './utils/rootAction';
import Contact from './routes/Contact';
import contactLoader from './utils/contactLoader';
import contactAction from './utils/contactAction';
import EditContact from './routes/EditContact';
import editAction from './utils/editAction';
import deleteAction from './utils/deleteAction';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            {
              path: 'contacts/:contactId',
              element: <Contact />,
              loader: contactLoader,
              action: contactAction,
            },
            {
              path: 'contacts/:contactId/edit',
              element: <EditContact />,
              loader: contactLoader,
              action: editAction,
            },
            {
              path: 'contacts/:contactId/delete',
              action: deleteAction,
              errorElement: <div>Oops! There was an error.</div>,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/contact-app',
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
