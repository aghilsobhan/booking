import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
const Account = () => {
  return (
    <>
      <Heading as="h1">update account</Heading>
      <Row>
        <Heading as="h3">Update your account</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as="h3">Update your password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
};

export default Account;
