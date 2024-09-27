import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                    backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;
