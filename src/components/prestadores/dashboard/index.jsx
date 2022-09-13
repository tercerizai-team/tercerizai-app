import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'customerName',
    headerName: 'Cliente',
    width: 150,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Data',
    type: 'date',
    width: 110,
    editable: false,
  },
  {
    field: 'service',
    headerName: 'Serviço',
    type: 'string',
    width: 110,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Descrição',
    type: 'string',
    width: 250,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 110,
    editable: false,
  },
  
  
];

const rows = [
    { id: 1, customerName: 'João da Silva', date: "05/11/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
    { id: 2, customerName: 'Maria Fernandes', date: "04/11/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Pendente"  },
    { id: 3, customerName: 'Roberto Filho', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado"  },
    { id: 4, customerName: 'Fiuk', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
    { id: 5, customerName: 'Elaine Fagundes', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
    { id: 6, customerName: 'Milton da Cruz', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado"},
    { id: 7, customerName: 'Elias Jr.', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
    { id: 8, customerName: 'Neymar Jr.', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
    { id: 9, customerName: 'Jair Messias', date: "05/10/2022", service: "Encanador", description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", status: "Confirmado" },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}