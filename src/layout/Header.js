import PropTypes from 'prop-types';
import * as React from 'react';

// next
import NextLink from 'next/link';
import useAuth from 'hooks/useAuth';

// material-ui
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Container, Link, Stack, Toolbar, Typography } from '@mui/material';

// project import
import { DEFAULT_PATH } from 'config';
import Logo from 'components/logo';

const Header = () => {
  const theme = useTheme();
  const { isAuthenticated } = useAuth();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar sx={{ bgcolor: 'transparent', color: theme.palette.text.primary, boxShadow: 'none' }}>
      <Container disableGutters={matchDownMd}>
        <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
          <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
            <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
              <Logo reverse to="/" />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              '& .header-link': { px: 1, '&:hover': { color: theme.palette.primary.main } },
              display: { xs: 'none', md: 'block' }
            }}
            spacing={2}
          >
            {isAuthenticated ? (
              <NextLink href={DEFAULT_PATH} passHref>
                <Link className="header-link" color="white" target="_blank" underline="none">
                  Dashboard
                </Link>
              </NextLink>
            ) : (
              <NextLink href="/auth/login" passHref>
                <Link className="header-link" color="white" target="_blank" underline="none">
                  Login
                </Link>
              </NextLink>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  handleDrawerOpen: PropTypes.func,
  layout: PropTypes.string
};

export default Header;
