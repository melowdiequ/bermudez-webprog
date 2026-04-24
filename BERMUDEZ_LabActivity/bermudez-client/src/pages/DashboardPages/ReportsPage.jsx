import React from 'react';
import { Typography, Box, Card, CardContent, Avatar, Divider, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Assessment, Speed, Storage, Timeline, PieChart as PieIcon, Public } from '@mui/icons-material';

export default function ReportsPage() {
  const pal = ['#6da158', '#92c57a', '#1b2e22'];
  const cardSx = { borderRadius: '1.5rem', border: '2px solid transparent', bgcolor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', '&:hover': { borderColor: '#92c57a', transform: 'translateY(-5px)', boxShadow: '0 15px 30px rgba(146,197,122,0.2)' } };
  const iconSx = { bgcolor: '#e8f5e9', color: '#6da158', width: 48, height: 48, mr: 2 };

  const ReportCard = ({ icon, title, children }) => (
    <Card sx={{ ...cardSx, flex: 1 }} elevation={0}>
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><Avatar sx={iconSx}>{icon}</Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>{title}</Typography></Box>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>{children}</Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#fdfbf7', minHeight: '100vh', borderRadius: '2rem' }}>

      <Box sx={{ mb: 4, p: 4, borderRadius: '1.5rem', backgroundColor: '#1b2e22', color: 'white', boxShadow: '0 15px 30px rgba(27, 46, 34, 0.2)', display: 'flex', alignItems: 'center', gap: 3 }}>
        <Avatar sx={{ bgcolor: '#92c57a', color: '#1b2e22', width: 64, height: 64 }}><Assessment fontSize="large" /></Avatar>
        <Box><Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>Analytics & Reports</Typography><Typography variant="body1" sx={{ color: '#92c57a' }}>In-depth system visualizations and performance metrics.</Typography></Box>
      </Box>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ mb: 4, width: '100%' }}>
        <ReportCard icon={<Speed />} title="Server Load"><Gauge width={160} height={160} value={50} sx={{ '& .MuiGauge-valueArc': { fill: '#6da158' } }} /></ReportCard>
        <ReportCard icon={<Storage />} title="Storage Capacity"><Gauge width={160} height={160} value={50} valueMin={10} valueMax={60} sx={{ '& .MuiGauge-valueArc': { fill: '#92c57a' } }} /></ReportCard>
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ mb: 4, width: '100%' }}>
        <ReportCard icon={<Timeline />} title="Quarterly Traffic">
          <BarChart colors={pal} series={[{ data: [35, 44, 24, 34], label: 'Desktop' }, { data: [51, 6, 49, 30], label: 'Mobile' }]} height={300} xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]} />
        </ReportCard>
        <ReportCard icon={<PieIcon />} title="Traffic Sources">
          <PieChart colors={pal} series={[{ data: [{ id: 0, value: 10, label: 'Organic' }, { id: 1, value: 15, label: 'Direct' }, { id: 2, value: 20, label: 'Social' }] }]} height={250} margin={{ right: 5 }} />
        </ReportCard>
      </Stack>

      <Card sx={cardSx} elevation={0}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><Avatar sx={iconSx}><Public /></Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>Headquarters Location</Typography></Box>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ height: 400, width: '100%', borderRadius: '1rem', overflow: 'hidden', border: '2px solid #e8f5e9' }}>
            <MapContainer center={[14.604253, 120.994314]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
              <Marker position={[14.604253, 120.994314]}><Popup><b style={{ color: '#1b2e22' }}>National University-Manila</b><br/><i>551 F Jhocson St, Sampaloc, Manila</i></Popup></Marker>
            </MapContainer>
          </Box>
        </CardContent>
      </Card>

    </Box>
  );
}