import React, { useContext, useEffect } from "react";
import context from "../../context/context";

function TableUsersADM() {
  const { users } = useContext(context);
  useEffect(() => {
    users
  }, [])

  return <div>{users.map((item) => {

  {item.name}
console.log(item[0], 'aqui');
  })}</div>;
}

export default TableUsersADM;
