import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import CloudOffIcon from "@mui/icons-material/CloudOff";

interface DashboardTileProps {
  minWidth: string | number;
  title: string;
  subTitle?: string;
  isLoading?: boolean;
  isError?: boolean;
}

export const DashboardTile: React.FC<DashboardTileProps> = ({
  minWidth,
  title,
  subTitle,
  isError = false,
  isLoading = false,
  children,
}): JSX.Element => {
  return (
    <Card raised sx={{ minWidth: { minWidth }, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondar">
          {subTitle}
        </Typography>
        {isLoading && <CircularProgress color="secondary" />}
        {isError && <CloudOffIcon color="secondary" sx={{ fontSize: 50 }} />}
        {!isLoading && !isError && children}
      </CardContent>
    </Card>
  );
};
