
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { styled } from '@mui/material/styles';



const StyledCalendar = styled('div')({
  border: '2px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});


export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <StyledCalendar>
      <StaticDatePicker orientation="portrait" />
      </StyledCalendar>
    </LocalizationProvider>
  );
}



