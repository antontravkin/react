import classes from './Button.module.css'

export default function Button({ children, onClick, isActive }) {


    /* let classes = 'button'
    if (isActive) classes += ' active' */
    return (
        //<button className={isActive ? 'button active' : 'button'} onClick={onClick} onDoubleClick={() => console.log('test')} >{children}</button>
        <button className={
            isActive ? `${classes.button} ${classes.active}` : classes.button
        } onClick={onClick}>
            {children}
        </button >

    )
}