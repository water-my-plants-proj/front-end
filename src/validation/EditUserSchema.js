import * as yup from "yup";

const editUserSchema = yup.object().shape({
  phoneNumber: yup.string().trim().required(),
  password: yup.string().trim().required(),
});

export default editUserSchema;