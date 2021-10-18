
import React from "react"
import { PageNotFound } from "../Components/404"
import { Route, Switch } from "react-router-dom"
import ProfileComponent from "../Components/profile"
import HomeComponent from "../Components/home"
import MySkillsComponent from "../Components/skills"
import ContactUsComponent from "../Components/contact"
import WorkComponent from "../Components/work"
import AboutComponent from "../Components/about"


const routesArr = [
  {
    path: '/',
    component:HomeComponent ,
    exact: true,
  },
  {
    path: '/myprofile',
    component: HomeComponent
  },
  {
    path: '/profile',
    component: ProfileComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/skills',
    component: MySkillsComponent
  },
    {
    path: '/contact',
    component: ContactUsComponent
  },
  {
    path: '/work',
    component: WorkComponent
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const RouteWithSubRoutes = (
  route,
) => {
  return (
    <Route
      path={route.path}
      exact={true}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const Routes = () => {
  return (
    <Switch>
      {routesArr.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}

export default Routes
