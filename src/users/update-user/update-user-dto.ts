// export type UpdateUserDTO = {
//   id?: string;
//   email: string;
//   newPassword: string;
// };
export type UpdateUserDTO = {
  id?: number;
  fullname: string;
  password: string;
  email: string;
  phone: string;
  user_type: string;
  avatar: string;
}; 