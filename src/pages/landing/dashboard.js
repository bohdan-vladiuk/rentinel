import { Container, Grid, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <Page title="Dashboard">
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="h1" sx={{ mb: 2 }}>
                    This is Rentinel Project
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Rentinel Dashboard</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Page>
);

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
