// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import { Card } from "@mui/material";

import axios from "axios";
import { useState } from "react";

import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";

function CreateAirEquipment() {
  const [equipment, setEquipment] = useState(true);
  const navigate = useNavigate();

  const handleSetequipment = (e) =>
    setEquipment({
      ...equipment,
      [e.target.name]: e.target.value,
    });

  async function create() {
    const response = await axios.post("http://localhost:8080/api/air-equipment/", equipment);
    if (response.status === 201) {
      navigate("/equipment-entretien/");
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox pt={2} pb={3} px={3}>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="date_entretien"
                    name="date_entretien"
                    type="date"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="dateperiodesecheur"
                    name="dateperiodesecheur"
                    type="date"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="remarque"
                    name="remarque"
                    type="text"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="niveauprobleme"
                    name="niveauprobleme"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="nbrhprochain"
                    name="nbrhprochain"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="hfonctionnement"
                    name="hfonctionnement"
                    onChange={(event) => {
                      handleSetequipment(event);
                    }}
                  />
                </SoftBox>
              </SoftBox>
            </SoftBox>
            <SoftBox mt={1} mb={1} ml={120} align-self="end">
              <SoftButton variant="gradient" color="dark" onClick={() => create()}>
                Create
              </SoftButton>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateAirEquipment;
