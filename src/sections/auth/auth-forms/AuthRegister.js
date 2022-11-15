import React from 'react';

// next
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';

// material-ui
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import { DEFAULT_PATH, UserRole } from 'config';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthRegister = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        role: UserRole.landlord,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        address: '',
        city: '',
        country: '',
        zipcode: '',
        submit: false
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().max(255).required('First name is required'),
        lastname: Yup.string().max(255).required('Last name is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().min(6, 'Must be at least 6 characters').max(255).required('Required'),
        password2: Yup.string().when('password', {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same')
        })
      })}
      onSubmit={async (values, { setErrors, setSubmitting, setStatus }) => {
        try {
          await signUp(values);
          router.push(DEFAULT_PATH);
        } catch (error) {
          const message = error.message || 'Something went wrong';

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="role-group" sx={{ color: '#595959' }}>
                  Role
                </FormLabel>
                <RadioGroup row aria-labelledby="role-group" name="role" value={values.role} onChange={handleChange}>
                  <FormControlLabel value={UserRole.landlord} control={<Radio />} label="Lanlord" />
                  <FormControlLabel value={UserRole.tenant} control={<Radio />} label="Tenant" />
                  <FormControlLabel value={UserRole.adjuster} control={<Radio />} label="Adjuster" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="firstname-login">First Name</InputLabel>
                <OutlinedInput
                  id="firstname-login"
                  type="text"
                  value={values.firstname}
                  name="firstname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.firstname && errors.firstname)}
                />
                {touched.firstname && errors.firstname && (
                  <FormHelperText error id="standard-weight-helper-text-firstname-login">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="lastname-login">Last Name</InputLabel>
                <OutlinedInput
                  id="lastname-login"
                  type="text"
                  value={values.lastname}
                  name="lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.lastname && errors.lastname)}
                />
                {touched.lastname && errors.lastname && (
                  <FormHelperText error id="standard-weight-helper-text-lastname-login">
                    {errors.lastname}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="address-login">Address</InputLabel>
                <OutlinedInput
                  id="address-login"
                  type="text"
                  value={values.address}
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.address && errors.address)}
                />
                {touched.address && errors.address && (
                  <FormHelperText error id="standard-weight-helper-text-address-login">
                    {errors.address}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="city-login">City</InputLabel>
                <OutlinedInput
                  id="city-login"
                  type="text"
                  value={values.city}
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.city && errors.city)}
                />
                {touched.city && errors.city && (
                  <FormHelperText error id="standard-weight-helper-text-city-login">
                    {errors.city}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="country-login">Country</InputLabel>
                <OutlinedInput
                  id="country-login"
                  type="text"
                  value={values.country}
                  name="country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.country && errors.country)}
                />
                {touched.country && errors.country && (
                  <FormHelperText error id="standard-weight-helper-text-country-login">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="zipcode-login">Zip Code</InputLabel>
                <OutlinedInput
                  id="zipcode-login"
                  type="text"
                  value={values.zipcode}
                  name="zipcode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(touched.zipcode && errors.zipcode)}
                />
                {touched.zipcode && errors.zipcode && (
                  <FormHelperText error id="standard-weight-helper-text-zipcode-login">
                    {errors.zipcode}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="-password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        color="secondary"
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password2-login">Confirm Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password2 && errors.password2)}
                  id="-password2-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password2}
                  name="password2"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {touched.password2 && errors.password2 && (
                  <FormHelperText error id="standard-weight-helper-text-password2-login">
                    {errors.password2}
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
                  Create Account
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthRegister;
