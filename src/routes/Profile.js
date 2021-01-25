import { authService } from 'fbase';
import React from "react";
import { useHistory } from 'react-router-dom';



export default () => {
  // let history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    // history.pushState("/"); router에서 redirect를 쓰는 것말고도 함수내에서 history를 통해 redirect 해줄 수 있음.
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};