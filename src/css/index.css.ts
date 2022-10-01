import { style } from '@vanilla-extract/css';

export const mainPanel = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '120px auto 0 auto',
    flexDirection: 'column'
})

export const panelTitle = style({
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 12
})

export const panelGrid = style({
    display: 'grid',
})

export const menuItem = style({
    color: '#bbb',
    fontSize: '18px',
    cursor: 'pointer',
    ':hover': {
        color: '#999'
    }
})

export const menuItemName = style({
    marginLeft: '8px',
    color: '#aaa',
    ':hover': {
        color: '#666'
    }
})



