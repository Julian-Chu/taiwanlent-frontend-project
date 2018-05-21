
import checkRules from '../../../regularExpression/checkRules';

function validate(values) {
  const errors = {};
  console.log('values:', values);
  if (!values.username) errors.username = "Please fill your username";
  if (!values.name) errors.name = "Please fill your name";
  if (!values.gender) errors.gender = "Please fill gender";
  if (!values.companyLocation) errors.companyLocation = "Please fill";
  if (!values.email) errors.email = "Please fill your email";
  if (!values.phone) errors.phone = "Please fill your phone";
  if (!values.industry) errors.industry ="Please fill";
  if (!values.productIntroduction) errors.productIntroduction = "Please fill";
  if (!values.password) errors.password = "Please fill your password";

  if (!checkRules.Email(values.email)) errors.email = "Invalid Email";
  if (!values.email === values.reemail) errors.reemail = "please check email";

  if (!values.password === values.repassword) errors.repassword = "Please check password again"
  if (!checkRules.Phone(values.phone)) errors.phone = "Format: +XX-XXXXXXXXXX"
    return errors;
}

export default validate;