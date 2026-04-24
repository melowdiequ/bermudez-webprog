import React from 'react';
import { Typography, Box, Card, CardContent, Avatar, Divider, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Group, TableView } from '@mui/icons-material';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 }, { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 }, { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }, { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 }, { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  { field: 'fullName', headerName: 'Full name', sortable: false, width: 200, valueGetter: (v, r) => `${r.firstName || ''} ${r.lastName || ''}` },
  { field: 'status', headerName: 'Account Status', width: 150, renderCell: (p) => {
      const act = p.row.age !== null; 
      return <Chip label={act ? "Active" : "Pending Info"} size="small" sx={{ bgcolor: act ? '#e8f5e9' : '#fff3e0', color: act ? '#6da158' : '#f6a059', fontWeight: 'bold', borderRadius: '0.5rem' }} />;
  }}
];

export default function UsersPage() {
  const cardSx = { borderRadius: '1.5rem', border: '2px solid transparent', bgcolor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out', '&:hover': { borderColor: '#92c57a', transform: 'translateY(-5px)', boxShadow: '0 15px 30px rgba(146,197,122,0.2)' } };
  const iconSx = { bgcolor: '#e8f5e9', color: '#6da158', width: 48, height: 48, mr: 2 };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, bgcolor: '#fdfbf7', minHeight: '100vh', borderRadius: '2rem' }}>

      {/* Header Banner */}
      <Box sx={{ mb: 4, p: 4, borderRadius: '1.5rem', bgcolor: '#1b2e22', color: 'white', boxShadow: '0 15px 30px rgba(27, 46, 34, 0.2)', display: 'flex', alignItems: 'center', gap: 3 }}>
        <Avatar sx={{ bgcolor: '#92c57a', color: '#1b2e22', width: 64, height: 64 }}><Group fontSize="large" /></Avatar>
        <Box><Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>User Management</Typography><Typography variant="body1" sx={{ color: '#92c57a' }}>View, edit, and manage all registered system accounts.</Typography></Box>
      </Box>

      <Card sx={cardSx} elevation={0}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><Avatar sx={iconSx}><TableView /></Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>Registered Users Database</Typography></Box>
          <Divider sx={{ mb: 3 }} />
          
          <Box sx={{ height: 450, width: '100%' }}>
            <DataGrid
              rows={rows} columns={columns}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              pageSizeOptions={[5, 10]} checkboxSelection disableRowSelectionOnClick
              sx={{
                border: 'none',
                '& .MuiDataGrid-columnHeaders': { bgcolor: '#fdfbf7', color: '#1b2e22', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #e8f5e9' },
                '& .MuiDataGrid-cell': { color: '#3f3f46', borderBottom: '1px solid #fdfbf7' },
                '& .MuiDataGrid-row:hover': { bgcolor: '#e8f5e9' },
                '& .MuiDataGrid-footerContainer': { borderTop: '2px solid #e8f5e9', bgcolor: '#fdfbf7' },
                '& .MuiCheckbox-root.Mui-checked': { color: '#6da158' }
              }}
            />
          </Box>
        </CardContent>
      </Card>

    </Box>
  );
}