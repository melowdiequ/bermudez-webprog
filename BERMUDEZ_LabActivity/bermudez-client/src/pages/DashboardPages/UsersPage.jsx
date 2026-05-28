import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import TableViewIcon from '@mui/icons-material/TableView';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../assets/users.json?raw';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/assets/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchQuery === '' ||
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === '' || user.role === roleFilter;
    const matchesGender = genderFilter === '' || user.gender === genderFilter;
    const matchesStatus = statusFilter === '' || String(user.isActive) === statusFilter;

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    [
      ['firstName', 'First name'], ['lastName', 'Last name'], ['age', 'Age'],
      ['gender', 'Gender'], ['contactNumber', 'Contact number'], ['email', 'Email'],
      ['role', 'Role'], ['username', 'Username'], ['password', 'Password'], ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!nextErrors.email && users.some((user) => user.id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }
    if (!nextErrors.username && users.some((user) => user.id !== modal.id && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    if (!nextErrors.password && form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters long.';
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }

    if (!nextErrors.age && isNaN(Number(form.age.trim()))) {
      nextErrors.age = 'Age must be a valid number.';
    }

    if (!nextErrors.username && /\s/.test(form.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) => (user.id === modal.id ? { ...user, ...nextUser } : user))
        : [
            ...prev,
            {
              id: prev.reduce((max, user) => Math.max(max, Number(user.id) || 0), 0) + 1,
              ...nextUser,
            },
          ]
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'fullName', headerName: 'Full Name', flex: 1, minWidth: 170, valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim() },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'gender', headerName: 'Gender', minWidth: 110, valueGetter: (_, row) => labelize(row.gender) },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email', headerName: 'Email', flex: 1.1, minWidth: 220 },
    { field: 'role', headerName: 'Role', minWidth: 120, valueGetter: (_, row) => labelize(row.role) },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip size="small" label={row.isActive ? 'Active' : 'Inactive'} sx={{ backgroundColor: row.isActive ? '#e8f5e9' : '#fff3e0', color: row.isActive ? '#6da158' : '#f6a059', fontWeight: 'bold', borderRadius: '0.5rem' }} />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>Edit</Button>
          <Button size="small" variant="contained" sx={{ backgroundColor: row.isActive ? '#f6a059' : '#6da158', '&:hover': { backgroundColor: row.isActive ? '#e65100' : '#4caf50' } }} onClick={() => toggleStatus(row.id)}>
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  const cardStyles = { borderRadius: '1.5rem', border: '2px solid transparent', backgroundColor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transition: 'all 0.3s ease-in-out' };
  const headerIconStyles = { bgcolor: '#e8f5e9', color: '#6da158', width: 48, height: 48, mr: 2 };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#fdfbf7', minHeight: '100vh', borderRadius: '2rem' }}>
      <Box sx={{ mb: 4, p: 4, borderRadius: '1.5rem', backgroundColor: '#1b2e22', color: 'white', boxShadow: '0 15px 30px rgba(27, 46, 34, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar sx={{ bgcolor: '#92c57a', color: '#1b2e22', width: 64, height: 64 }}><GroupIcon fontSize="large" /></Avatar>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>User Management</Typography>
            <Typography variant="body1" sx={{ color: '#92c57a' }}>Search, filter, and manage all registered system accounts.</Typography>
          </Box>
        </Box>
        <Button variant="contained" onClick={() => openModal()} sx={{ backgroundColor: '#92c57a', color: '#1b2e22', fontWeight: 'bold', borderRadius: '2rem', px: 4, py: 1.5, textTransform: 'none', '&:hover': { backgroundColor: '#6da158', color: 'white' } }}>
          + Add User
        </Button>
      </Box>

      {seed.error && <Alert severity="error" sx={{ mb: 2, borderRadius: '1rem' }}>{seed.error}</Alert>}

      <Card sx={cardStyles} elevation={0}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={headerIconStyles}><TableViewIcon /></Avatar>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1b2e22' }}>Registered Users Database</Typography>
          </Box>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
            <TextField placeholder="Search by name, email, or username..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} InputProps={{ startAdornment: ( <InputAdornment position="start"><SearchIcon sx={{ color: '#6da158' }} /></InputAdornment> ), }} sx={{ flex: 1, width: '100%', '& .MuiOutlinedInput-root': { borderRadius: '2rem', backgroundColor: '#fdfbf7' } }} />
            <TextField select label="Role" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} sx={{ minWidth: 140, '& .MuiOutlinedInput-root': { borderRadius: '1.5rem', backgroundColor: '#fdfbf7' } }}>
              <MenuItem value="">All Roles</MenuItem><MenuItem value="admin">Admin</MenuItem><MenuItem value="editor">Editor</MenuItem><MenuItem value="viewer">Viewer</MenuItem>
            </TextField>
            <TextField select label="Gender" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} sx={{ minWidth: 140, '& .MuiOutlinedInput-root': { borderRadius: '1.5rem', backgroundColor: '#fdfbf7' } }}>
              <MenuItem value="">All Genders</MenuItem><MenuItem value="male">Male</MenuItem><MenuItem value="female">Female</MenuItem>
            </TextField>
            <TextField select label="Status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} sx={{ minWidth: 140, '& .MuiOutlinedInput-root': { borderRadius: '1.5rem', backgroundColor: '#fdfbf7' } }}>
              <MenuItem value="">All Statuses</MenuItem><MenuItem value="true">Active</MenuItem><MenuItem value="false">Inactive</MenuItem>
            </TextField>
          </Stack>

          <Divider sx={{ mb: 3 }} />
          
          <Box sx={{ height: 500, width: '100%' }}>
            {filteredUsers.length ? (
              <DataGrid rows={filteredUsers} columns={columns} disableRowSelectionOnClick pageSizeOptions={[5, 10]} initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }} sx={{ border: 'none', '& .MuiDataGrid-columnHeaders': { backgroundColor: '#fdfbf7', color: '#1b2e22', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #e8f5e9', }, '& .MuiDataGrid-cell': { color: '#3f3f46', borderBottom: '1px solid #fdfbf7', }, '& .MuiDataGrid-row:hover': { backgroundColor: '#e8f5e9', }, '& .MuiDataGrid-footerContainer': { borderTop: '2px solid #e8f5e9', backgroundColor: '#fdfbf7', }, '& .MuiCheckbox-root.Mui-checked': { color: '#6da158', } }} />
            ) : (
              <Alert severity="info" icon={<FilterListIcon />} sx={{ borderRadius: '1rem' }}>No users match your current search and filter criteria.</Alert>
            )}
          </Box>
        </CardContent>
      </Card>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md" PaperProps={{ sx: { borderRadius: '1.5rem' } }}>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: 800, color: '#1b2e22', pt: 3 }}>{modal.id ? 'Edit User Profile' : 'Create New User'}</DialogTitle>
          <DialogContent dividers sx={{ px: { xs: 2, sm: 4 }, py: 3 }}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>)}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('role', 'Role', { select: true })}>
                  {roles.map((role) => <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>)}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  slotProps: { input: { endAdornment: ( <InputAdornment position="end"><IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)} onMouseDown={(event) => event.preventDefault()} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> ), }, },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />

              <FormControlLabel control={ <Switch name="isActive" checked={form.isActive} onChange={handleChange} color="success" /> } label={form.isActive ? 'Account Status: Active' : 'Account Status: Inactive'} />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 4, py: 3 }}>
            <Button onClick={closeModal} sx={{ color: '#71717a', fontWeight: 'bold' }}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#1b2e22', color: 'white', fontWeight: 'bold', borderRadius: '1rem', px: 3, '&:hover': { backgroundColor: '#6da158' } }}>{modal.id ? 'Save Changes' : 'Create User'}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;