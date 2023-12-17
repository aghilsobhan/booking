import SignUpForm from "../features/authentication/SignUpForm";
import Heading from "../ui/Heading";
const NewUsers = () => {
  return (
    <>
      <Heading as="h1">Create new user</Heading> <SignUpForm></SignUpForm>
    </>
  );
};

export default NewUsers;
