import React from "react";
import styled from "styled-components";

const styledEditUserPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export default function EditUser(props) {
  const { user } = props;

  return (
    <styledEditUserPage>
      <div>
        <h2>Username: {user.username}</h2>
        <h2>Password: {user.password}</h2>
      </div>
      <div>
        <form>
          <label>
            Username:
            <input />
          </label>
          <label>
            Password:
            <input />
          </label>
        </form>
      </div>
    </styledEditUserPage>
  );
}
