import React from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import { CreateProperty } from 'sections/property';

// material-ui
import { Grid } from '@mui/material';

const LandlordPage = () => (
  <Page title="Landlord Page">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <MainCard title="Create Property">
          <CreateProperty />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

LandlordPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LandlordPage;
