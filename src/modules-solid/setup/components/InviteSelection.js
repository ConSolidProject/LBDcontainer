import React, { useEffect, useState } from "react";
import { checkInvites } from "consolid";
import { useQuery } from "react-query";
import CardGrid from "./CardGrid";

const InviteSelection = ({ session, project, setProject }) => {
  const {
    isLoading,
    data,
    refetch: refetchPersonal,
  } = useQuery("myInvites", () => checkInvites(session), {
    enabled: session.info.isLoggedIn ? true : false,
  });

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div style={{ marginTop: 200 }}>
        {data ? (
        <CardGrid projects={data} session={session}/>) : (<p>Loading ...</p>
        )}
    </div>
  );
};

export default InviteSelection;
