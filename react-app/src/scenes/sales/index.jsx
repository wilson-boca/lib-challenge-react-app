import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { field: "invoice", headerName: "Nota Fiscal" },
    {
      field: "client_name",
      headerName: "Cliente",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "seller_name",
        headerName: "Vendedor",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "date_fmt",
        headerName: "Data da Venda",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "total",
        headerName: "Valor Total",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "id",
        headerName: "",
        flex: 1,
        renderCell: ({ row: { id } }) => {
          return (
            <Box
              display="flex"
              justifyContent="center"
            >
              <DeleteIcon />
            </Box>
          );
        },
      },
  
  ];


const Sales = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      fetch("http://127.0.0.1:8000/api/sales/")
      .then((data) => data.json())
      .then((data) => {
        setTableData(data);
        setLoading(false);
      })
  }, [])

  return (
    <Box m="20px">
      <Header title="Vendas Realizadas" />
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
        <DataGrid rows={tableData} columns={columns} loading={loading}/>
      </Box>
    </Box>
  );
};

export default Sales;
