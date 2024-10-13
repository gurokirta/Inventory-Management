"use client";
import React from "react";
import { useGetUsersQuery } from "@/app/state/api";

function Users() {
  const { data: users, isError, isLoading } = useGetUsersQuery();
  if (isError || !users) return <div>Error</div>;
  console.log(users);

  return <div>Users page</div>;
}

export default Users;
