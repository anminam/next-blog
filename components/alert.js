import styles from '../styles/alert.module.css'
import cn from 'classnames'
export default ({children, type}) => {
    return (
        <div className={cn({
            [styles.success]: type === 'sucess',
            [styles.error]: type === 'error'
        })}>
            {children}
        </div>
    )
}