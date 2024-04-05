import React, { useState } from "react";
import { Card, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

function CreateAirEntretien() {
  const [air, setAir] = useState({
    equipementair: "",
    superviseur: "",
    date_entretien: "",
    dateperiodesecheur: "",
    nbrhprochain: 0,
    hfonctionnement: 0,
    remarque: "",
    niveauprobleme: "",
    dateajout: "",
    datemodif: "",
    datesuppression: "",
    suppression: false,
  });
  const navigate = useNavigate();

  const handleSetAir = (e) =>
    setAir({
      ...air,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  async function create() {
    const response = await axios.post("http://localhost:8080/api/air-entretiens/", air);
    if (response.status === 201) {
      navigate("/air-entretien/");
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox pt={2} pb={3} px={3}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SoftInput
                    label="Equipment Air"
                    name="equipementair"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Superviseur"
                    name="superviseur"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Date Entretien"
                    name="date_entretien"
                    type="date"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Date Periode Secheur"
                    name="dateperiodesecheur"
                    type="date"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Nombre Heures Prochain"
                    name="nbrhprochain"
                    type="number"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Heures Fonctionnement"
                    name="hfonctionnement"
                    type="number"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SoftInput
                    label="Remarque"
                    name="remarque"
                    multiline
                    rows={4}
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Niveau Problème"
                    name="niveauprobleme"
                    onChange={(event) => handleSetAir(event)}
                  />
                </Grid>
              </Grid>
            </SoftBox>
            <SoftBox mt={1} mb={1} ml={120} alignSelf="end">
              <SoftButton variant="gradient" color="dark" onClick={create}>
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

export default CreateAirEntretien;
