// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MeteoCard from "./components/watherCard";

// Billing page components
import { Card } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import MaintenanceHoursChart from "layouts/dashboard/Maintenance";

const API_KEY = 'fynctw2s67bvisdtc8fvbxdtxyjq3meb6pwnl70h';
const API_URL = 'https://www.meteosource.com/api/v1/free';

function AirEntretien() {
  const [airEntretiens, setAirEntretiens] = useState(null);
  async function getAllAirEntretiens() {
    const response = await axios.get("http://localhost:8080/api/air-entretiens/");
    if (response.status === 200) {
      setAirEntretiens(response.data);
    }
  };

  const exportExcel = () => {
    axios.get('http://localhost:8080/api/air-entretiens/failed/export-excel', { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        console.log(url);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'aireE.xlsx');
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const authorsTableData = {
    columns: [
      { name: "date_entretien", align: "center" },
      { name: "dateperiodesecheur", align: "center" },
      { name: "nbrhprochain", align: "center" },
      { name: "hfonctionnement", align: "center" },
      { name: "remarque", align: "left" },
      { name: "niveauprobleme", align: "left" },
    ],

    rows: airEntretiens,
  };
  useEffect(async () => {
    await getAllAirEntretiens();
  }, []);


  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData() {
    try {
      const findPlacesResponse = await axios.get(`${API_URL}/find_places`, {
        params: {
          text: "Tunis",
          key: API_KEY
        }
      });

      const placeId = findPlacesResponse.data.find(place => place.country === 'Tunisian Republic').place_id;

      const pointResponse = await axios.get(`${API_URL}/point`, {
        params: {
          place_id: placeId,
          sections: 'current',
          timezone: 'UTC',
          language: 'en',
          units: 'metric',
          key: API_KEY
        }
      });

      setWeatherData(pointResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(async () => {

    await fetchWeatherData();
  }, []);




  console.log("data", weatherData);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
            {weatherData && (<Card><SoftBox><SoftTypography variant="h6">Weather Information</SoftTypography>
           
            <SoftTypography variant="body1">Summary: {weatherData.current.summary}
            </SoftTypography>
            <SoftTypography variant="body1">Temperature: {weatherData.current.temperature}°C</SoftTypography>            
            </SoftBox>
            </Card>)}

            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">AirEntretien</SoftTypography>
              <SoftBox mt={4} mb={1}>
                <Link to="/air-entretien-create">
                  <SoftButton variant="gradient" color="info" fullWidth>
                    Create
                  </SoftButton>
                </Link>
                <SoftButton variant="gradient" color="success" fullWidth onClick={exportExcel}>
                  Export to Excel
                </SoftButton>
              </SoftBox>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={authorsTableData.columns || []} rows={authorsTableData.rows || []} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <MaintenanceHoursChart data={airEntretiens} />
      <Footer />
    </DashboardLayout>
  );
}

export default AirEntretien;