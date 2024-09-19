import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, ServicePage, Landing, UpdateUserData, Login, SignUp } from './pages';
import { MainDashboard, Statistic, Task, Project } from './components/Dashboard';
import AppLayout from './pages/AppLayout';
import Dashboard from './pages/Dashboard';
import FormRegistration from './pages/FormRegistration';
import Protective from './components/Protective';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/demo", element: <FormRegistration /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/demo/:id", element: <UpdateUserData /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "service", element: <ServicePage /> }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <Protective>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path="" element={<MainDashboard />} />
            <Route path="task" element={<Task />} />
            <Route path="project" element={<Project />} />
            <Route path="statistic" element={<Statistic />} />
          </Route>
        </Routes>
      </Protective>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
