import React, { useRef } from 'react';
import { Typography, Box, Card, CardContent, Avatar, Divider, Stack, Button } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { DataGrid } from '@mui/x-data-grid';
import { Assessment, Timeline, PieChart as PieIcon, Speed, TableView, Print, FilterAlt, AutoAwesome } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  { field: 'fullName', headerName: 'Full name', sortable: false, width: 200, valueGetter: (v, r) => `${r.firstName || ''} ${r.lastName || ''}` },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 }, { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 }, { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }, { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 }, { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ReportsPage() {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map((node) => node.outerHTML).join('');
    const exportedAt = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>System Report - Export</title>
          ${headMarkup}
          <style>
            @page { size: A4; margin: 16mm; }
            /* Force exact colors to print so the theme survives */
            * { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            body { margin: 0; font-family: 'Inter', Arial, sans-serif; background: #fff; color: #1b2e22; }
            
            .report-header { margin-bottom: 30px; padding-bottom: 16px; border-bottom: 3px solid #e8f5e9; }
            .report-header h1 { margin: 0 0 8px; font-size: 32px; font-weight: 800; color: #1b2e22; }
            .report-header p { margin: 0; font-size: 14px; color: #6da158; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
            
            /* Override MUI Cards to look like our beautiful Lab 5 design in the PDF */
            .report-content .MuiCard-root { border: 2px solid #e8f5e9 !important; box-shadow: none !important; border-radius: 1.5rem !important; margin-bottom: 24px !important; break-inside: avoid; page-break-inside: avoid; }
            .report-content .MuiCardContent-root { padding: 24px !important; }
            .report-content svg { max-width: 100%; }
            
            /* Fix DataGrid height for printing so it doesn't get cut off */
            .MuiDataGrid-root { height: auto !important; }
            .MuiDataGrid-main { overflow: visible !important; }
            .MuiDataGrid-virtualScroller { overflow: visible !important; height: auto !important; }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <h1>System Analytics Report</h1>
              <p>Generated on ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  const pal = ['#6da158', '#92c57a', '#1b2e22', '#f6a059'];
  const cardSx = { borderRadius: '1.5rem', border: '2px solid transparent', bgcolor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', '&:hover': { borderColor: '#92c57a', transform: 'translateY(-5px)', boxShadow: '0 15px 30px rgba(146,197,122,0.2)' } };
  const iconSx = { bgcolor: '#e8f5e9', color: '#6da158', width: 48, height: 48, mr: 2 };

  const ReportCard = ({ icon, title, desc, children }) => (
    <Card sx={{ ...cardSx, flex: 1 }} elevation={0}>
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}><Avatar sx={iconSx}>{icon}</Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>{title}</Typography></Box>
        <Typography variant="body2" sx={{ color: '#71717a', mb: 3, ml: 8 }}>{desc}</Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>{children}</Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, bgcolor: '#fdfbf7', minHeight: '100vh', borderRadius: '2rem' }}>

      <Box sx={{ mb: 4, p: 4, borderRadius: '1.5rem', bgcolor: '#1b2e22', color: 'white', boxShadow: '0 15px 30px rgba(27, 46, 34, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar sx={{ bgcolor: '#92c57a', color: '#1b2e22', width: 64, height: 64 }}><Assessment fontSize="large" /></Avatar>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>Analytics & Reports</Typography>
            <Typography variant="body1" sx={{ color: '#92c57a' }}>Report analytics overview, category breakdown, and performance.</Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" sx={{ bgcolor: '#92c57a', color: '#1b2e22', fontWeight: 'bold', borderRadius: '2rem', px: 3, textTransform: 'none', '&:hover': { bgcolor: '#6da158', color: 'white' } }}><AutoAwesome sx={{ mr: 1, fontSize: 18 }}/> Generate</Button>
          <Button variant="contained" onClick={handlePrint} sx={{ bgcolor: '#ffffff', color: '#1b2e22', fontWeight: 'bold', borderRadius: '2rem', px: 3, textTransform: 'none', '&:hover': { bgcolor: '#e8f5e9' } }}><Print sx={{ mr: 1, fontSize: 18 }}/> Export PDF</Button>
          <Button variant="outlined" sx={{ borderColor: '#92c57a', color: '#92c57a', fontWeight: 'bold', borderRadius: '2rem', px: 3, textTransform: 'none', '&:hover': { borderColor: '#fff', color: '#fff' } }}><FilterAlt sx={{ mr: 1, fontSize: 18 }}/> Filter</Button>
        </Stack>
      </Box>

      <Stack ref={printRef} spacing={4}>
        
        <ReportCard icon={<Timeline />} title="Monthly Report Output" desc="Compares how many reports were generated and how many were completed across the last four months.">
          <BarChart colors={pal} series={[{ data: [18, 24, 20, 27], label: 'Generated' }, { data: [12, 19, 17, 23], label: 'Completed' }]} height={300} xAxis={[{ data: ['January', 'February', 'March', 'April'], scaleType: 'band', label: 'Months' }]} />
        </ReportCard>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ width: '100%' }}>
          <ReportCard icon={<PieIcon />} title="Report Category Share" desc="Distribution of report requests by category for the current reporting period.">
            <PieChart colors={pal} series={[{ data: [{ id: 0, value: 14, label: 'Sales' }, { id: 1, value: 10, label: 'Users' }, { id: 2, value: 8, label: 'Inventory' }, { id: 3, value: 6, label: 'Finance' }] }]} height={250} margin={{ right: 5 }} />
          </ReportCard>
          
          <ReportCard icon={<Speed />} title="Completion Rate" desc="Highlights the current percentage of reports completed on time based on the latest cycle.">
            <Gauge width={200} height={200} value={78} sx={{ '& .MuiGauge-valueArc': { fill: '#6da158' } }} />
          </ReportCard>
        </Stack>

        <ReportCard icon={<TableView />} title="Detailed Records" desc="Raw data representation of current statistics.">
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid 
              rows={rows} columns={columns} 
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} 
              pageSizeOptions={[5]} checkboxSelection disableRowSelectionOnClick
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
        </ReportCard>

      </Stack>
    </Box>
  );
}