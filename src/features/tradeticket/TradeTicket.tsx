import React from "react";
import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import { useTicketApis } from "./hooks/useTicketApis";
import { TicketSections } from "./components/TicketSections";

const TicketStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  marginTop: 20,
  padding: theme.spacing(0, 1),
}));

export const TradeTicket: React.FC = (): JSX.Element => {
  const { loading, error, ticketId, ccyList, cptyList, bondList } =
    useTicketApis();
  return (
    <TicketStyledWrapper>
      <Typography component="div" variant="subtitle1">
        Trade Details
      </Typography>
      <Divider sx={{ m: 2 }} />
      {loading && <CircularProgress color="secondary" />}
      {error && <CloudOffIcon color="secondary" sx={{ fontSize: 50 }} />}
      {!loading && !error && (
        <TicketSections
          ticketId={ticketId?.newId}
          ccyList={ccyList}
          cptyList={cptyList}
          bondList={bondList}
        />
      )}
    </TicketStyledWrapper>
  );
};
