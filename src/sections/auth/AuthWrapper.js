import { Box, Grid } from '@mui/material';
import AuthCard from './AuthCard';
import Logo from 'components/logo';

const AuthWrapper = ({ size, children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Grid
      container
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard size={size}>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
