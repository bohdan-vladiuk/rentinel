import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { propertyService } from 'services';

import AnimateButton from 'components/@extended/AnimateButton';
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const CreateProperty = () => (
  <Formik
    initialValues={{
      address1: '',
      address2: '',
      city: '',
      country: '',
      zipcode: '',
      deposit: '',
      rentAmount: '',
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
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date().required('End date is required').min(Yup.ref('startDate'), 'End date has to be more than start date')
    })}
    onSubmit={(values, { setErrors, setSubmitting }) => {
      propertyService.create(values).then((res) => {
        if (res?.error) {
          setErrors({ submit: res.error });
          setSubmitting(false);
        }
      });
    }}
  >
    {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
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
                  size="small"
                  error={Boolean(touched.address1 && errors.address1)}
                />
                {touched.address1 && errors.address1 && (
                  <FormHelperText error id="standard-weight-helper-text-address1">
                    {errors.address1}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  size="small"
                  error={Boolean(touched.address2 && errors.address2)}
                />
                {touched.address2 && errors.address2 && (
                  <FormHelperText error id="standard-weight-helper-text-address2">
                    {errors.address2}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
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
                  size="small"
                  error={Boolean(touched.city && errors.city)}
                />
                {touched.city && errors.city && (
                  <FormHelperText error id="standard-weight-helper-text-city">
                    {errors.city}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
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
                  size="small"
                  error={Boolean(touched.country && errors.country)}
                />
                {touched.country && errors.country && (
                  <FormHelperText error id="standard-weight-helper-text-country">
                    {errors.country}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
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
                  size="small"
                  error={Boolean(touched.zipcode && errors.zipcode)}
                />
                {touched.zipcode && errors.zipcode && (
                  <FormHelperText error id="standard-weight-helper-text-zipcode">
                    {errors.zipcode}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  size="small"
                  error={Boolean(touched.deposit && errors.deposit)}
                />
                {touched.deposit && errors.deposit && (
                  <FormHelperText error id="standard-weight-helper-text-deposit">
                    {errors.deposit}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="rentAmount">Rent Amount</InputLabel>
                <OutlinedInput
                  id="rentAmount"
                  type="text"
                  value={values.rentAmount}
                  name="rentAmount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  error={Boolean(touched.rentAmount && errors.rentAmount)}
                />
                {touched.rentAmount && errors.rentAmount && (
                  <FormHelperText error id="standard-weight-helper-text-rentAmount">
                    {errors.rentAmount}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="startDate">Start Date</InputLabel>
                <DatePicker
                  value={values.startDate}
                  onChange={(value) => setFieldValue('startDate', value, true)}
                  renderInput={(props) => (
                    <OutlinedInput
                      id="startDate"
                      name="startDate"
                      type="text"
                      onBlur={handleBlur}
                      inputProps={props.inputProps}
                      error={Boolean(touched.startDate && errors.startDate)}
                      endAdornment={props.InputProps?.endAdornment}
                      size="small"
                    />
                  )}
                />
                {touched.startDate && errors.startDate && (
                  <FormHelperText error id="standard-weight-helper-text-startDate">
                    {errors.startDate}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="endDate">End Date</InputLabel>
                <DatePicker
                  value={values.endDate}
                  onChange={(value) => setFieldValue('endDate', value, true)}
                  renderInput={(props) => (
                    <OutlinedInput
                      id="endDate"
                      name="endDate"
                      type="text"
                      onBlur={handleBlur}
                      inputProps={props.inputProps}
                      error={Boolean(touched.endDate && errors.endDate)}
                      endAdornment={props.InputProps?.endAdornment}
                      size="small"
                    />
                  )}
                />
                {touched.endDate && errors.endDate && (
                  <FormHelperText error id="standard-weight-helper-text-endDate">
                    {errors.endDate}
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
        </LocalizationProvider>
      </form>
    )}
  </Formik>
);
