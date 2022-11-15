import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  ButtonBase,
  capitalize,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// project import
import Avatar from 'components/@extended/Avatar';
import Transitions from 'components/@extended/Transitions';
import useAuth from 'hooks/useAuth';

// assets
import { LogoutOutlined } from '@ant-design/icons';

const Profile = () => {
  const theme = useTheme();
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter' },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.secondary.dark}`,
            outlineOffset: 2
          }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {user && (
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 0.25, px: 0.75 }}>
            <Avatar alt={user.name} src={user.avatar} sx={{ width: 30, height: 30 }} />
            <Typography variant="subtitle1"> {capitalize(user.name)}</Typography>
          </Stack>
        )}
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <Grid container>
                    <Grid item>
                      <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
                        <ListItemButton onClick={handleLogout}>
                          <ListItemIcon>
                            <LogoutOutlined />
                          </ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItemButton>
                      </List>
                    </Grid>
                  </Grid>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
