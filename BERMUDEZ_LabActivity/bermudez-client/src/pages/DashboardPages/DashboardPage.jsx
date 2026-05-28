import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography, Card, CardContent, Box, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, Button, Stack } from '@mui/material';
import { Pets, Face, Favorite, AutoAwesome, PersonAdd, NotificationsActive, Update, AssignmentInd, History } from '@mui/icons-material';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 }, { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 }, { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }, { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 }, { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export default function DashboardPage() {
  const valid = rows.filter(r => r.age !== null);
  const avgAge = (valid.reduce((s, r) => s + r.age, 0) / valid.length).toFixed(1);
  const oldest = valid.reduce((p, c) => (p.age > c.age) ? p : c);
  const youngest = valid.reduce((p, c) => (p.age < c.age) ? p : c);

  const cardSx = { borderRadius: '1.5rem', border: '2px solid transparent', backgroundColor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', '&:hover': { borderColor: '#92c57a', transform: 'translateY(-5px)', boxShadow: '0 15px 30px rgba(146,197,122,0.2)' } };
  const iconSx = { bgcolor: '#e8f5e9', color: '#6da158', width: 48, height: 48, mr: 2 };

  const kpis = [
    { t: 'Total Users', v: rows.length, i: <Pets />, bg: '#1b2e22', c: '#fff' },
    { t: 'Average Age', v: avgAge, i: <Face />, bg: '#1b2e22', c: '#fff' },
    { t: 'Active Pups', v: rows.length - 2, i: <Favorite />, bg: '#92c57a', c: '#fff' },
    { t: 'Health', v: '100%', i: <AutoAwesome />, bg: '#fdfbf7', c: '#1b2e22', b: '2px solid #1b2e22' }
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#fdfbf7', minHeight: '100vh', borderRadius: '2rem' }}>
      <Box sx={{ mb: 4, p: 4, borderRadius: '1.5rem', backgroundColor: '#1b2e22', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, boxShadow: '0 15px 30px rgba(27, 46, 34, 0.2)' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>Welcome back, Sporty Pup! 👋</Typography>
          <Typography variant="body1" sx={{ color: '#92c57a' }}>Here is your daily system overview and demographic summary.</Typography>
        </Box>
        <Button component={Link} to="/dashboard/reports" variant="contained" sx={{ backgroundColor: '#92c57a', color: '#1b2e22', fontWeight: 'bold', borderRadius: '2rem', px: 4, py: 1.5, textTransform: 'none', '&:hover': { backgroundColor: '#6da158', color: 'white' } }}>Generate Report</Button>
      </Box>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} sx={{ mb: 4, width: '100%' }}>
        {kpis.map((k, i) => (
          <Card key={i} sx={{ ...cardSx, flex: 1 }} elevation={0}>
            <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 56, height: 56, borderRadius: '1rem', backgroundColor: k.bg, color: k.c, border: k.b }}>{k.i}</Avatar>
              <Box><Typography variant="body2" sx={{ color: '#a1a1aa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.7rem' }}>{k.t}</Typography><Typography variant="h4" sx={{ fontWeight: 800, color: '#6da158', mt: 0.5 }}>{k.v}</Typography></Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ mb: 4, width: '100%' }}>
        <Card sx={{ ...cardSx, flex: 1 }} elevation={0}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><Avatar sx={iconSx}><History /></Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>System Activity</Typography></Box>
            <Divider sx={{ mb: 2 }} />
            <List sx={{ flexGrow: 1 }}>
              {[
                { t: 'New User Registered', d: 'Jon Snow created an account. • 10m ago', i: <PersonAdd />, bg: '#e8f5e9', c: '#6da158' },
                { t: 'System Alert', d: 'Traffic spiked by 12% in the last hour. • 1h ago', i: <NotificationsActive />, bg: '#fff3e0', c: '#f6a059' },
                { t: 'Routine Backup', d: 'Automated database backup completed. • 3h ago', i: <Update />, bg: '#e3f2fd', c: '#1976d2' }
              ].map((a, i, arr) => (
                <React.Fragment key={i}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}><ListItemAvatar><Avatar sx={{ bgcolor: a.bg, color: a.c }}>{a.i}</Avatar></ListItemAvatar><ListItemText primary={<Typography sx={{ fontWeight: 700, color: '#1b2e22' }}>{a.t}</Typography>} secondary={a.d} /></ListItem>
                  {i < arr.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card sx={{ ...cardSx, flex: 1 }} elevation={0}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><Avatar sx={iconSx}><AssignmentInd /></Avatar><Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>Dataset Overview</Typography></Box>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3, px: 2 }}>
              {[
                { l: 'Total Records Found:', v: `${rows.length} Users`, c: '#1b2e22' },
                { l: 'Missing Age Data:', v: `${rows.length - valid.length} User(s)`, c: '#f6a059' },
                { l: 'Oldest Registered:', v: `${oldest.firstName||''} ${oldest.lastName} (${oldest.age})`, c: '#6da158' },
                { l: 'Youngest Registered:', v: `${youngest.firstName||''} ${youngest.lastName} (${youngest.age})`, c: '#6da158' }
              ].map((s, i) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Typography sx={{ color: '#71717a', fontWeight: 600 }}>{s.l}</Typography><Typography sx={{ fontWeight: 800, color: s.c, fontSize: '1.1rem' }}>{s.v}</Typography></Box>
              ))}
            </Box>
            <Button component={Link} to="/dashboard/users" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#1b2e22', color: 'white', fontWeight: 'bold', borderRadius: '1rem', py: 1.5, textTransform: 'none', '&:hover': { backgroundColor: '#6da158' } }}>View Full User Table</Button>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}