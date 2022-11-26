import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';




const Commission = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: "id", headerName: "Cód." },
    {
      field: "name",
      headerName: "Vendedor",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "total_items",
        headerName: "Total de Vendas",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "total_commission",
        headerName: "Total de Comissões",
        flex: 1,
        cellClassName: "name-column--cell",
    },  
  ];
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/commission/")
    .then((data) => data.json())
    .then((data) => {
      setTableData(data.data);
      setLoading(false);
    })
  }, [])  

  return (
    <Box m="20px">
      <Header title="Relatório de Comissões" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
        rows={tableData} 
        columns={columns} 
        loading={loading} />
      </Box>
    </Box>
  );
};

export default Commission;
