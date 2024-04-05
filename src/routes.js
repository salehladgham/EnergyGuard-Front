import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";

import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AirEntretien from "layouts/airEntretien";

import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreateAirEntretien from "layouts/airEntretien/components/CreateAirEntretien";
import CreateAirEquipment from "layouts/airEquipment/components/CreateAirEquipment";
import AirEquipment from "layouts/airEquipment";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Superrvisor",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Air entretien",
    key: "air-entretien",
    route: "/air-entretien",
    component: <AirEntretien />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Create Air entretien",
    key: "air-entretien-create",
    route: "/air-entretien-create",
    icon: <Document size="12px" />,
    component: <CreateAirEntretien />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Air equipment",
    key: "air-equipment",
    route: "/air-equipment",
    component: <AirEquipment />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Create Air equipment",
    key: "air-equipment-create",
    route: "air-equipment-create",
    icon: <Document size="12px" />,
    component: <CreateAirEquipment />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
