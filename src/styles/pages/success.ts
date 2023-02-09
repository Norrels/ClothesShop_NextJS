import { relative } from "path";
import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    },

    strong: {
        textTransform: 'capitalize',
    }
})

export const ImageContainer = styled('div' , {
    display: 'flex',
    flexDirection: 'row',

    "div + div": {
        marginLeft: '-65px'
    }
})

export const ImageContent = styled('div', {
    width: '130',
    height: 130,
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 999999999,
    padding: '0.25rem',
    marginTop: '3rem',
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})