import { createBrowserRouter } from 'react-router';
import App from './App';
import ERPCRMPage from './components/services/ERPCRMPage';
import CloudPage from './components/services/CloudPage';
import CiberseguridadPage from './components/services/CiberseguridadPage';
import DesarrolloPage from './components/services/DesarrolloPage';
import EcommercePage from './components/services/EcommercePage';
import PesajePage from './components/services/PesajePage';
import MicrosipPage from './components/services/MicrosipPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/servicios/erp-crm',
    element: <ERPCRMPage />,
  },
  {
    path: '/servicios/cloud',
    element: <CloudPage />,
  },
  {
    path: '/servicios/ciberseguridad',
    element: <CiberseguridadPage />,
  },
  {
    path: '/servicios/desarrollo',
    element: <DesarrolloPage />,
  },
  {
    path: '/servicios/ecommerce',
    element: <EcommercePage />,
  },
  {
    path: '/servicios/pesaje',
    element: <PesajePage />,
  },
  {
    path: '/servicios/microsip',
    element: <MicrosipPage />,
  },
]);
