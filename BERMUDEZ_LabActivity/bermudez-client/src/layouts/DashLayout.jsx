import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Button from "@mui/material/Button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PetsIcon from '@mui/icons-material/Pets';
import Avatar from '@mui/material/Avatar';
import { Article as ArticleIcon } from "@mui/icons-material";

const drawerWidth = 260; 

const dashboardNavItems = [
  { label: "Dashboard", title: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Reports", title: "Analytics & Reports", to: "/dashboard/reports", icon: AssessmentIcon },
  { label: "Users", title: "User Management", to: "/dashboard/users", icon: PeopleIcon },
  { label: "Articles", title: "Articles", to: "/dashboard/articles", icon: ArticleIcon },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: '#ffffff', 
  borderRight: 'none',
  boxShadow: '4px 0 24px rgba(0,0,0,0.03)', 
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: '#ffffff',
  borderRight: 'none',
  boxShadow: '4px 0 24px rgba(0,0,0,0.03)',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#ffffff', 
  color: '#1b2e22', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)', 
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: '#6da158', 
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: '2rem', 
  backgroundColor: '#fdfbf7', 
  border: '2px solid #e8f5e9',
  "&:hover": {
    backgroundColor: '#e8f5e9',
  },
  marginRight: theme.spacing(3),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#1b2e22",
  fontWeight: 500,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

const getPageTitle = (pathname) =>
  dashboardNavItems.find((item) => item.to === pathname)?.title ?? "Welcome";

const DashLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/signin");
  };

  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('type') || 'viewer';

  if (!token) {
    return <Navigate to="/auth/signin" replace />;
  }

  const visibleNavItems = dashboardNavItems.filter(item => {
    if (item.label === "Users" && userRole === "editor") {
      return false;
    }
    return true;
  });

  const pageTitle = getPageTitle(location.pathname);

  return (
    <Box sx={{ display: "flex", backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar sx={{ minHeight: '72px !important' }}>
          <IconButton
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 4, color: '#6da158', ...(open && { display: 'none' }) }}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: '-0.02em' }}>
            {pageTitle}
          </Typography>
          
          <Search>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Search users, reports..." inputProps={{ "aria-label": "search" }} />
          </Search>
          
          <Button 
            variant="outlined" 
            onClick={handleLogout}
            sx={{
              borderColor: '#92c57a', color: '#1b2e22', borderRadius: '2rem', fontWeight: 700, textTransform: 'none', px: 3,
              '&:hover': { backgroundColor: '#e8f5e9', borderColor: '#6da158' }
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader sx={{ display: 'flex', justifyContent: open ? 'space-between' : 'center', px: 2, minHeight: '72px !important' }}>
          {open && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1, pl: 1 }}>
              <Avatar sx={{ bgcolor: '#1b2e22', width: 32, height: 32 }}>
                <PetsIcon sx={{ fontSize: 18, color: '#92c57a' }} />
              </Avatar>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1b2e22', letterSpacing: '-0.02em', mt: 0.5 }}>
                Admin Panel
              </Typography>
            </Box>
          )}
          <IconButton onClick={handleDrawerClose} sx={{ color: '#a1a1aa', '&:hover': { color: '#6da158' } }}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Divider sx={{ borderColor: '#f4f4f5', mb: 2 }} />
        
        {/* 4. Using visibleNavItems so the Users tab actually hides for editors! */}
        <List sx={{ px: open ? 2 : 1 }}>
          {visibleNavItems.map(({ label, to, icon: Icon }) => {
            const isSelected = location.pathname === to;
            
            return (
              <ListItem key={to} disablePadding sx={{ display: "block", mb: 1 }}>
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={isSelected}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: '1rem', 
                    color: isSelected ? '#1b2e22' : '#71717a',
                    backgroundColor: isSelected ? '#e8f5e9' : 'transparent',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: isSelected ? '#e8f5e9' : '#fdfbf7',
                      color: '#1b2e22',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#e8f5e9',
                      '&:hover': { backgroundColor: '#c8e6c9' }
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      color: isSelected ? '#6da158' : '#a1a1aa',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ 
                      opacity: open ? 1 : 0, 
                      '& .MuiTypography-root': { fontWeight: isSelected ? 800 : 600 } 
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10, maxWidth: '100vw', overflowX: 'hidden' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;