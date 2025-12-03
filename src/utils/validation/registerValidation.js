import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir email giriniz')
    .required('Email zorunludur'),

  password: Yup.string()
    .matches(/[A-Z]/, 'Şifre en az bir büyük harf içermelidir')
    .matches(/\d/, 'Şifre en az bir sayı içermelidir')
    .min(8, 'Şifre en az 8 karakter olmalıdır')
    .required('Şifre zorunludur'),

  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
    .required('Şifre tekrarı zorunludur'),
});
