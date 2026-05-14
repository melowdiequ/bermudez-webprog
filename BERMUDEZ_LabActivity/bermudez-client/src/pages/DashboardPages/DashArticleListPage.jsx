import React, { useState } from 'react';
import { 
  Box, Typography, Button, Card, CardContent, 
  TextField, MenuItem, Chip, Stack, InputAdornment 
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

const initialArticles = [
  { 
    id: 'A77DDD', 
    slug: 'test', 
    title: 'test', 
    paragraphs: 3, 
    preview: 'hbasjhdbashjd aksbdjasbdkja asdaskdaskd', 
    isActive: true 
  }
];

export default function DashArticleListPage() {
  const [articles, setArticles] = useState(initialArticles);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.slug.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === '' || String(article.isActive) === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleStatus = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, isActive: !article.isActive } : article
      )
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'slug', headerName: 'Slug', flex: 1, minWidth: 150 },
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 150 },
    { field: 'paragraphs', headerName: 'Paragraphs', width: 120, type: 'number', align: 'left', headerAlign: 'left' },
    { field: 'preview', headerName: 'Preview', flex: 2, minWidth: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: ({ row }) => (
        <Chip 
          size="small" 
          label={row.isActive ? 'Active' : 'Inactive'} 
          sx={{ 
            backgroundColor: row.isActive ? '#f0fdf4' : '#fffbeb', 
            color: row.isActive ? '#166534' : '#b45309',
            border: `1px solid ${row.isActive ? '#bbf7d0' : '#fde68a'}`,
            fontWeight: 'bold', 
            borderRadius: '0.5rem'
          }} 
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 200,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button 
            size="small" 
            sx={{ 
              color: '#D4AF37', 
              fontWeight: 'bold', 
              '&:hover': { backgroundColor: '#fefce8' } 
            }}
          >
            Edit
          </Button>
          <Button 
            size="small" 
            variant="contained" 
            onClick={() => toggleStatus(row.id)}
            sx={{ 
              backgroundColor: row.isActive ? '#e4e4e7' : '#003366', 
              color: row.isActive ? '#52525b' : '#ffffff',
              borderRadius: '0.5rem',
              boxShadow: 'none',
              fontWeight: 'bold',
              '&:hover': { 
                backgroundColor: row.isActive ? '#d4d4d8' : '#002244',
                boxShadow: 'none'
              }
            }}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: 1 }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: '#003366', letterSpacing: '-0.02em' }}>
          Articles
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#FFD700', 
            color: '#003366',
            boxShadow: '0 4px 10px rgba(255,215,0,0.3)', 
            fontWeight: 'bold', 
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#E5C100', boxShadow: '0 6px 15px rgba(255,215,0,0.4)' }
          }}
        >
          Add Article
        </Button>
      </Box>

      <Card sx={{ border: '1px solid #e0e0e0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', borderRadius: '8px' }} elevation={0}>
        <CardContent sx={{ p: 3 }}>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <TextField
              placeholder="Search Articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#003366' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                flex: 1, 
                '& .MuiOutlinedInput-root': { 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  '&.Mui-focused fieldset': { borderColor: '#003366', borderWidth: '2px' }
                } 
              }}
            />
            
            <TextField
              select
              label="Status Filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              size="small"
              sx={{ 
                minWidth: 180, 
                '& .MuiOutlinedInput-root': { 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  '&.Mui-focused fieldset': { borderColor: '#003366', borderWidth: '2px' }
                },
                '& .MuiInputLabel-root.Mui-focused': { color: '#003366' }
              }}
            >
              <MenuItem value="">All Statuses</MenuItem>
              <MenuItem value="true">Active</MenuItem>
              <MenuItem value="false">Inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
              }}
              sx={{
                border: '1px solid #f0f0f0',
                borderRadius: '8px',
                overflow: 'hidden',
                '& .MuiDataGrid-columnHeaders': { 
                  backgroundColor: '#003366', 
                  color: '#ffffff',
                  borderBottom: 'none',
                },
                '& .MuiDataGrid-iconSeparator': { color: '#ffffff' },
                '& .MuiDataGrid-sortIcon': { color: '#ffffff' },
                '& .MuiDataGrid-menuIconButton': { color: '#ffffff' },
                '& .MuiDataGrid-cell': { 
                  borderBottom: '1px solid #f0f0f0', 
                  color: '#3f3f46' 
                },
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: '#f8fafc',
                }
              }}
            />
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}