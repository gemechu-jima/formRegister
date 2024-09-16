
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, ServicePage, Landing, UpdateUserData, Login, SignUp } from './pages'
import { MainDashboard, Statistic,Task, Project } from './components/Dashboard'
import AppLayout from './pages/AppLayout'
import Dashboard from './pages/Dashboard'
import FormRegistration from './pages/FormRegistration'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
        index:true,
        element:<Landing/>

        },
        {path:"/demo",
          element:<FormRegistration/>
        },
        {
        path:"/login",
        element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
           },
        {
          path:"/demo/:id",
          element:<UpdateUserData/>
        },
        {
          path:"home",
          element:<HomePage/>
        },
        {
          path:"about",
          element:<AboutPage/>
        },
        {
          path:"contact",
          element:<ContactPage/>
        },
        {
          path:"service",
          element:<ServicePage/>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard/>,
      children:[
        {
        path:"",
        element:<MainDashboard/>
      },
      {
        path:"task",
        element:<Task/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"statistic",
        element:<Statistic/>
      }
    ]
    }
])
function App() {
 
  return <RouterProvider router={router}/>
  
}

export default App
