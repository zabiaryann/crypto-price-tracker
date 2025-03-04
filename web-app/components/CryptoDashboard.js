import React, { useState } from "react";
import { useCryptoPrices } from "../context/useCryptoPrices";
import { CircularProgress, TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";

const CryptoDashboard = () => {
  const { data, error, refetch, isLoading } = useCryptoPrices();
  const [search, setSearch] = useState("");

  if (isLoading) return <CircularProgress sx={{ display: "block", margin: "50px auto" }} />;
  if (error) return <Typography color="error">Error loading prices</Typography>;

  const filteredData = Object.entries(data).filter(([key]) =>
    key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Search Bar and Refresh Button */}
      <div style={styles.searchContainer}>
        <TextField
          label="Search Crypto"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchBar}
        />
        <Button variant="contained" color="primary" onClick={refetch} style={styles.refreshButton}>
          Refresh Prices
        </Button>
      </div>

      {/* Crypto Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredData.map(([key, value]) => (
          <Grid item key={key} xs={12} sm={6} md={4} lg={2}>
            <Card style={styles.card}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
                  {key}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 1, fontWeight: "bold", color: "#007bff" }}>
                  ${value.usd}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// Custom Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  searchBar: {
    width: "300px",
  },
  refreshButton: {
    height: "56px",
  },
  card: {
    minWidth: 200,
    padding: "20px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
};

export default CryptoDashboard;
