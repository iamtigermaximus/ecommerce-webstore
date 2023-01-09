import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export const PageContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <PageContainer>
      <Container
        maxWidth="xs"
        sx={{
          height: '500px',
          p: 4,
          marginTop: '50px',
          boxShadow: 6,
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h4">Login</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              variant="outlined"
              label="Email Address"
              autoComplete="email"
              {...register('email', { required: 'Required' })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : null}
              sx={{ mb: 2 }}
            />
            <TextField
              variant="outlined"
              label="Password"
              {...register('password', { required: 'Required' })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : null}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography variant="h6"> Don't have an account yet? </Typography>
            <Button variant="text" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Box>
        </form>
      </Container>
    </PageContainer>
  );
};
export default Register;
