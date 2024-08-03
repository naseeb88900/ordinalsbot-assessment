import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: 2
};

export const stackStyles: SxProps<Theme> = {
  alignItems: 'center',
  maxWidth: 'md',
  width: '100%',
  textAlign: 'center'
};

export const imageStyles: SxProps<Theme> = {
  display: 'inline-block',
  height: 'auto',
  maxWidth: '100%',
  width: { xs: '80%', sm: '60%', md: '50%', lg: '100%' }
};

export const headingStyles: SxProps<Theme> = {
  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
};

export const bodyTextStyles: SxProps<Theme> = {
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
};

export const buttonStyles: SxProps<Theme> = {
  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
  padding: { xs: 1, sm: 2 }
};
