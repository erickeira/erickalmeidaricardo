import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Técnico em Informática - PRONATEC ( 2013 à 2014 )',
    description: ``,
  },
  {
    label: 'Analista de APR | AMBEV ( 2016 à 2021 )',
    description:
      'Rotinas de desenvolvimentode planilhas automatizadas em VBA e controle de preços.',
  },
  {
    label: 'Analista de Sistemas | Grupo InfoShop ( 2022 à atualmente)',
    description: `Responsável pela implementação/correção de funcionalidades em sistema web em funcionamento e desenvolvimento de aplicativo mobile.`,
  },
];

export default function Experiencia() {

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper orientation="vertical" active={true} variant="dots">
        {steps.map((step, index) => (
          <Step expanded={true} active={true}  key={step.label}>
            <StepLabel sx={{color: '#fff'}}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}