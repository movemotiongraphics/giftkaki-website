import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'pink', // Change this to any color you want
  fontFamily: 'Figtree',
  headings: {
    fontFamily: 'Unbounded, sans-serif',
    // You can also customize other heading properties
    sizes: {
      h1: { fontSize: '2.25rem' },
      h2: { fontSize: '1.875rem' },
      h3: { fontSize: '1.5rem' },
      h4: { fontSize: '1.25rem' },
      h5: { fontSize: '1.125rem' },
      h6: { fontSize: '1rem' },
    },
  },
  
});
