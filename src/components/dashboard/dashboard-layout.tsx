"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveDrawer from '../side-bar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ResponsiveDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          marginTop: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
