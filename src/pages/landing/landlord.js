import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

const LandlordPage = () => (
  <Page title="Landlord Page">
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
    </MainCard>
    {/* <Formik
      initialValues={{
        address1: '',
        address2: '',
        city: '',
        country: '',
        zipcode: '',
        deposit: '',
        rent: '',
        startDate: '',
        endDate: '',
        submit: false
      }}
      validationSchema={Yup.object().shape({
        address1: Yup.string().max(255).required('Address is required'),
        city: Yup.string().max(255).required('City is required'),
        country: Yup.string().max(255).required('Country is required'),
        zipcode: Yup.string().max(255).required('Zip Code is required'),
        deposit: Yup.number().typeError('Deposit must be a number').required('Deposit is required'),
        rentAmount: Yup.number().typeError('Rent amount must be a number').required('Rent Amount is required'),
        firstname: Yup.string().max(255).required('First name is required')
      })}
      onSubmit={(values, { setErrors, setSubmitting }) => {}}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="address1">Address 1</InputLabel>
                <OutlinedInput
                  id="address1"
                  type="text"
                  value={values.address1}
                  name="address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.address1 && errors.address1)}
                />
                {touched.address1 && errors.address1 && (
                  <FormHelperText error id="standard-weight-helper-text-address1">
                    {errors.address1}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="address2">Address 2</InputLabel>
                <OutlinedInput
                  id="address2"
                  type="text"
                  value={values.address2}
                  name="address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.address2 && errors.address2)}
                />
                {touched.address2 && errors.address2 && (
                  <FormHelperText error id="standard-weight-helper-text-address2">
                    {errors.address2}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="city">City</InputLabel>
                <OutlinedInput
                  id="city"
                  type="text"
                  value={values.city}
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.city && errors.city)}
                />
                {touched.city && errors.city && (
                  <FormHelperText error id="standard-weight-helper-text-city">
                    {errors.city}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="country">Country</InputLabel>
                <OutlinedInput
                  id="country"
                  type="text"
                  value={values.country}
                  name="country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.country && errors.country)}
                />
                {touched.country && errors.country && (
                  <FormHelperText error id="standard-weight-helper-text-country">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="zipcode">Zip Code</InputLabel>
                <OutlinedInput
                  id="zipcode"
                  type="text"
                  value={values.zipcode}
                  name="zipcode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.zipcode && errors.zipcode)}
                />
                {touched.zipcode && errors.zipcode && (
                  <FormHelperText error id="standard-weight-helper-text-zipcode">
                    {errors.zipcode}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="deposit">Deposit</InputLabel>
                <OutlinedInput
                  id="deposit"
                  type="text"
                  value={values.deposit}
                  name="deposit"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.deposit && errors.deposit)}
                />
                {touched.deposit && errors.deposit && (
                  <FormHelperText error id="standard-weight-helper-text-deposit">
                    {errors.deposit}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="rent">Rent</InputLabel>
                <OutlinedInput
                  id="rent"
                  type="text"
                  value={values.rent}
                  name="rent"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.rent && errors.rent)}
                />
                {touched.rent && errors.rent && (
                  <FormHelperText error id="standard-weight-helper-text-rent">
                    {errors.rent}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="startDate">Start Date</InputLabel>
                <OutlinedInput
                  id="startDate"
                  type="text"
                  value={values.startDate}
                  name="startDate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.startDate && errors.startDate)}
                />
                {touched.startDate && errors.startDate && (
                  <FormHelperText error id="standard-weight-helper-text-startDate">
                    {errors.startDate}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="endDate">End Date</InputLabel>
                <OutlinedInput
                  id="endDate"
                  type="text"
                  value={values.endDate}
                  name="endDate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.endDate && errors.endDate)}
                />
                {touched.endDate && errors.endDate && (
                  <FormHelperText error id="standard-weight-helper-text-endDate">
                    {errors.rent}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  Create Propoerty
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik> */}
  </Page>
);

LandlordPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LandlordPage;
