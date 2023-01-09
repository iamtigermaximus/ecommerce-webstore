// import { useForm } from 'react-hook-form';
// import { Box, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';

// export const PageContainer = styled(Container)`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   font-size: 40px;
// `;

// type FormData = {
//   name: string;
//   email: string;
//   password: string;
// };

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     // formState: { errors },
//   } = useForm<FormData>();
//   const onSubmit = handleSubmit(({ name, email, password }) => {
//     console.log(name, email, password);
//   }); // firstName and lastName will have correct type

//   return (
//     <PageContainer>
//       <form onSubmit={onSubmit}>
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <label>Name</label>
//           <input {...register('name')} />
//           <label>Email</label>
//           <input {...register('email')} />
//           <label>Password</label>
//           <input {...register('password')} />
//           <input type="submit" />
//         </Box>
//       </form>
//     </PageContainer>
//   );
// };
// export default Register;
import React from 'react';

const Register = () => {
  return <div>Register</div>;
};

export default Register;
