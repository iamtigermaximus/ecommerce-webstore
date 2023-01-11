import { Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../hooks/reduxHook';
import { logout } from '../../redux/reducers/authSlice';

export const PageContainer = styled(Container)`
  height: 100vh;
  background-color: pink;
`;
const Profile = () => {
  // const { userInfo } = useAppSelector((state) => state.authReducer);
  const authInfo = useAppSelector((state) => state.authReducer);

  // const setUserImage = () => {
  //   if (userInfo && userInfo.avatar) {
  //     return (
  //       <Avatar
  //         alt=""
  //         src={userInfo.avatar}
  //         sx={{ height: '20vh', width: '10vw' }}
  //       />
  //     );
  //   }
  //};

  return (
    <PageContainer>
      {authInfo.loggedIn ? (
        <div>
          <h1>User Info</h1>
          <Button onClick={() => logout()}>log out</Button>
        </div>
      ) : (
        ''
      )}
    </PageContainer>
  );
};

export default Profile;
