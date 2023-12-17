import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  //1) Load the Athuntication user
  const { isLoading, isAuthenticated } = useUser();

  //3) if the No user Athuntication /reply to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  //2)while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4)if the is a user/render app
  if (isAuthenticated) return children;
}

export default ProtectedRouter;
