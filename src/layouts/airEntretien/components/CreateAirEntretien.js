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
  const [message, setMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [error, setError] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/air-entretiens/generatewithchat/${message}`);
      setBotResponse(response.data.description);
      setError('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setError('Désolé, une erreur s\'est produite lors de l\'envoi du message.');
      setBotResponse('');
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
        
          <div>
          <div style={{  alignItems: 'center', justifyContent: 'center', marginBottom: '3px' }} >
    <input
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', flex: '1', marginRight: '10px' }}
        type="text"
        placeholder="Entrez votre message sur l'air..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />
    <button
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
        onClick={sendMessage}
    >
        Envoyer
    </button>
</div>
{error && (
    <div style={{ backgroundColor: '#ffdddd', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
        <p style={{ color: '#cc0000', fontSize: '16px', margin: '0' }}>{error}</p>
    </div>
)}
{botResponse && (
    <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
        <p style={{ color: '#333', fontSize: '16px', margin: '0' }}>{botResponse}</p>
    </div>
)}



      {/* <div>
        <input
          type="text"
          placeholder="Entrez votre message sur l'air..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div> */}
      {/* {error && <p>{error}</p>}
      {botResponse && <p>{botResponse}</p>} */}
    </div>
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
