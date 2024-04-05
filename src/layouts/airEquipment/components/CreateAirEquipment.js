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

function CreateAirEquipment() {
  const [equipment, setEquipment] = useState({
    marque: "",
    modele: "",
    nom: "",
    puissance_max: 0,
    debit: 0,
    puissancemoteur: 0,
    nserie: 0,
    pressioncharge: 0,
    pressiondecharge: 0,
    anneefabrication: 0,
    type: "",
    alertentretien: "",
    dossier: "",
    adresseip: "",
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

  const handleSetEquipment = (e) =>
    setEquipment({
      ...equipment,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  async function create() {
    const response = await axios.post("http://localhost:8080/api/air-equipment/", equipment);
    if (response.status === 201) {
      navigate("/air-equipment/");
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
                    label="Marque"
                    name="marque"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Modèle"
                    name="modele"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Nom"
                    name="nom"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Puissance Max"
                    name="puissance_max"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Débit"
                    name="debit"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Puissance Moteur"
                    name="puissancemoteur"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Numéro de Série"
                    name="nserie"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Pression de Charge"
                    name="pressioncharge"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Pression de Décharge"
                    name="pressiondecharge"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Année de Fabrication"
                    name="anneefabrication"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Type"
                    name="type"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Alerte Entretien"
                    name="alertentretien"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Dossier"
                    name="dossier"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Adresse IP"
                    name="adresseip"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Equipement Air"
                    name="equipementair"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Superviseur"
                    name="superviseur"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Date Entretien"
                    name="date_entretien"
                    type="date"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Date Période Sécheur"
                    name="dateperiodesecheur"
                    type="date"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Nombre d'Heures Prochain"
                    name="nbrhprochain"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Heures de Fonctionnement"
                    name="hfonctionnement"
                    type="number"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Remarque"
                    name="remarque"
                    onChange={(event) => handleSetEquipment(event)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SoftInput
                    label="Niveau Problème"
                    name="niveauprobleme"
                    onChange={(event) => handleSetEquipment(event)}
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

export default CreateAirEquipment;
