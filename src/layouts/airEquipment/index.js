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
import DataVisualization from "layouts/dashboard/PuissanceMaxModel";
import PressureChargevsPressureDecharge from "layouts/dashboard/PuissanceChargeVSDecharge";
import PowerOverYear from "layouts/dashboard/PowerOverYear";

function AirEquipment() {
  const [airEquipments, setAirEquipments] = useState(null);
  async function getAllAirEquipments() {
    const response = await axios.get("http://localhost:8080/api/air-equipment/");
    if (response.status === 200) {
      setAirEquipments(response.data);
    }
  }

  const authorsTableData = {
    columns: [
      { name: "marque", align: "center" },
      { name: "nom", align: "center" },
      { name: "nserie", align: "center" },
      { name: "modele", align: "center" },
      { name: "puissance_max", align: "center" },
      { name: "anneefabrication", align: "left" },
      { name: "type", align: "left" },
    ],

    rows: airEquipments,
  };
  useEffect(() => {
    const fetchData = async () => {
      await getAllAirEquipments();
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">AirEquipment</SoftTypography>
              <SoftBox mt={4} mb={1}>
                <Link to="/air-equipment-create">
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
      <DataVisualization data={airEquipments} />
      <PressureChargevsPressureDecharge data={airEquipments} />
      <Footer />
    </DashboardLayout>
  );
}

export default AirEquipment;
