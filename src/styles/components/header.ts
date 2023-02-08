import { styled } from "..";

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180, 
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    div: {
        display: 'flex',
        gap: '1rem',

        span: {
            padding: "0.7rem",
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
            widht: '100%'
        }
    }
})