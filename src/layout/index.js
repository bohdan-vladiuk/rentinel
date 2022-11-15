import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// project import
import MainLayout from './MainLayout';
import Header from './Header';
import AuthGuard from 'utils/route-guard/AuthGuard';
import GuestGuard from 'utils/route-guard/GuestGuard';

// project import - store
// import { openComponentDrawer } from 'store/reducers/menu';

// const Header = lazy(() => import('./Header'));

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default function Layout({ variant = 'main', children }) {
  if (variant === 'landing' || variant === 'simple') {
    return (
      <>
        <Header layout={variant} />
        {children}
      </>
      // <Suspense fallback={<Loader />}>
      //   <Header layout={variant} />
      //   {children}
      // </Suspense>
    );
  }

  if (variant === 'blank') {
    return children;
  }

  if (variant === 'auth') {
    return <GuestGuard>{children}</GuestGuard>;
  }

  return (
    <AuthGuard>
      <MainLayout>{children}</MainLayout>
    </AuthGuard>
  );
}

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node
};
