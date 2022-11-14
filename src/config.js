export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const DEFAULT_PATH = '/landing/dashboard';

const DB_LOCAL_URI = 'mongodb://127.0.0.1:27017/rentinel';
const DB_ATLAS_URI = 'mongodb+srv://sergio:sergio@rentinelcluster01.eyzkyxk.mongodb.net/test';
export const MONGO_DB_URI = DB_LOCAL_URI;

// User Role
export const UserRole = {
  landlord: 0,
  tenant: 1,
  adjuster: 2
};

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr'
};

export default config;
