import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";

interface Props {
  date: Date;
  label: string;
  onChange: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void;
}
export const RepoDate: React.FC<Props> = ({
  date,
  onChange,
  label,
}: Props): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={date}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            size="medium"
            variant="outlined"
            sx={{ minWidth: "30%" }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
