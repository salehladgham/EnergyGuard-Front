// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import { Card } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import MaintenanceHoursChart from "layouts/dashboard/Maintenance";

function AirEntretien() {
  const [airEntretiens, setAirEntretiens] = useState(null);
  async function getAllAirEntretiens() {
    const response = await axios.get("http://localhost:8080/api/air-entretiens/");
    if (response.status === 200) {
      setAirEntretiens(response.data);
    }
  }

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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">AirEntretien</SoftTypography>
              <SoftBox mt={4} mb={1}>
                <Link to="/air-entretien-create">
                  <SoftButton variant="gradient" color="info" fullWidth>
                    Create
                  </SoftButton>
                </Link>
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
