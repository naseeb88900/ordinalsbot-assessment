import * as React from 'react';
import type { Metadata } from 'next';
import RouterLink from 'next/link';
import { paths } from '@/paths';
import { config } from '@/config';

import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { bodyTextStyles, buttonStyles, containerStyles, headingStyles, imageStyles, stackStyles } from '@/styles/components/not-found';
import { GO_BACK_BUTTON_TEXT, NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from '@/constants/not-found';

export const metadata = { title: `Not found | ${config.site.name}` } satisfies Metadata;

export default function NotFound(): React.JSX.Element {
  return (
    <Box component="main" sx={containerStyles}>
      <Stack spacing={3} sx={stackStyles}>
        <Box>
          <Box
            component="img"
            alt="Under development"
            src="/assets/error-404.png"
            sx={imageStyles}
          />
        </Box>
        <Typography variant="h3" sx={headingStyles}>
          {NOT_FOUND_TITLE}
        </Typography>
        <Typography color="text.secondary" variant="body1" sx={bodyTextStyles}>
          {NOT_FOUND_DESCRIPTION}
        </Typography>
        <Button
          component={RouterLink}
          href={paths.home}
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={buttonStyles}
        >
          {GO_BACK_BUTTON_TEXT}
        </Button>
      </Stack>
    </Box>
  );
}
