import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { reset } from '../../redux/reducers/authSlice';
import { LoginContainer } from '../user-forms/login/Login.styles';

export const PageContainer = styled(Container)`
  height: 100vh;
`;
const Profile = () => {
  const userInfo = useAppSelector((state) => state.authReducer);
  const authInfo = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log('USERINFO', userInfo);

  const setUserImage = () => {
    if (userInfo && userInfo.userInfo?.avatar) {
      return (
        <Avatar
          alt=""
          src={userInfo.userInfo.avatar}
          sx={{ height: '20vh', width: '10vw', border: '50%' }}
        />
      );
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            border: '1px solid gray',
          }}
        >
          {authInfo.loggedIn ? (
            <Box>
              <Box>
                <Typography variant="h6">User Information</Typography>
              </Box>
              <Box>{setUserImage()}</Box>
              <Box>
                <Typography variant="h5">
                  Name: {userInfo.userInfo?.name}
                </Typography>
              </Box>
              <Button onClick={() => dispatch(reset(navigate('/')))}>
                log out
              </Button>
            </Box>
          ) : (
            ''
          )}
        </Box>
      </LoginContainer>
    </PageContainer>
  );
};

export default Profile;
