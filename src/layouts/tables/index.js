import Card from "@mui/material/Card";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { Author, Function } from "./data/authorsTableData";
import team2 from "assets/images/team-2.jpg";

import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const [supervisors, setSupervisors] = useState(null);
  async function getAllSuperrvisors() {
    const response = await axios.get("http://localhost:8080/api/superviseur/");
    if (response.status === 200) {
      setSupervisors(response.data);
    }
  }

  useEffect(async () => {
    await getAllSuperrvisors();
  }, []);

  const authorsTableData = {
    columns: [
      { name: "author", align: "left" },
      { name: "function", align: "left" },
      { name: "phone", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: supervisors
      ? supervisors.map((supervisor) => ({
          author: <Author image={team2} name={supervisor.nom} email={supervisor.mail} />,
          function: <Function job={supervisor.poste} org="Organization" />,
          phone: (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {supervisor.tel}
            </SoftTypography>
          ),
          action: (
            <SoftTypography
              component="a"
              href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
            >
              Edit
            </SoftTypography>
          ),
        }))
      : [],
  };

  const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Authors table</SoftTypography>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
