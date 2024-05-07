import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow,
  Typography,
  CardContent,
  Card,
  Grid,
  Paper,
  styled,
  Button,
} from "@mui/material";

const tableData = [
  { name: "John Doe", age: 30, city: "New York", country: "USA" },
  { name: "Jane Smith", age: 25, city: "Los Angeles", country: "USA" },
  { name: "Alice Johnson", age: 35, city: "London", country: "UK" },
  { name: "Bob Brown", age: 40, city: "Sydney", country: "Australia" },
];

const additionalRows = [
  { name: "Alice", age: 25, city: "London", country: "UK" },
  { name: "Bob", age: 35, city: "Paris", country: "France" },
];

// Table headings
const tableHeadings = [
  { label: "Notification", startDate: "2024-05-01", endDate: "2024-05-31" },
  { label: "My Deal Grid", startDate: "2024-06-01", endDate: "2024-06-30" },
  { label: "Deal Stage", startDate: "2024-07-01", endDate: "2024-07-31" },
  { label: "Current Phase", startDate: "2024-08-01", endDate: "2024-08-31" },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DealSpace = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {/* Table Row */}
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ marginTop: "30px" }}
            >
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Deal Space (Dashboard)
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ fontWeight: "bold" }}>
                            <Typography variant="h5" gutterBottom>
                              Notification
                            </Typography>
                            <Box variant="contained">
                              &nbsp;{/* Start Date: heading.startDate */}
                            </Box>
                            <Box variant="contained">
                              &nbsp;{/* End Date: heading.endDate */}
                            </Box>
                          </TableCell>
                          <TableCell style={{ fontWeight: "bold" }}>
                            <Typography variant="h5" gutterBottom>
                              My Deal Grid
                            </Typography>
                            <Box variant="contained">
                              Description:
                            </Box>
                            <Box variant="contained">
                              Type:
                            </Box>
                          </TableCell>
                          <TableCell style={{ fontWeight: "bold" }}>
                            <Typography variant="h5" gutterBottom>
                              Deal Stage
                            </Typography>
                            <Box variant="contained">
                              Start Date:
                            </Box>
                            <Box variant="contained">
                              End Date:
                            </Box>
                          </TableCell>
                          <TableCell style={{ fontWeight: "bold" }}>
                            <Typography variant="h5" gutterBottom>
                              Current Phase
                            </Typography>
                            <Box variant="contained">
                              Start Date:
                            </Box>
                            <Box variant="contained">
                              End Date:
                            </Box>
                          </TableCell>
                          {/* {tableHeadings.map((heading, index) => (
                            <TableCell
                              key={index}
                              style={{ fontWeight: "bold" }}
                            >
                              <h5>{heading.label}</h5>
                              <div>
                                <Box variant="contained">
                                  Start Date: {heading.startDate}
                                </Box>
                                <Box variant="contained">
                                  End Date: {heading.endDate}
                                </Box>
                              </div>
                            </TableCell>
                          ))} */}
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {/* Table data */}
                        {tableData.map((row, index) => (
                          <StyledTableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.country}</TableCell>
                          </StyledTableRow>
                        ))}
                        {/* Additional rows */}
                        {additionalRows.map((rowData, index) => (
                          <StyledTableRow key={index}>
                            <TableCell>{rowData.name}</TableCell>
                            <TableCell>{rowData.age}</TableCell>
                            <TableCell>{rowData.city}</TableCell>
                            <TableCell>{rowData.country}</TableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DealSpace;
