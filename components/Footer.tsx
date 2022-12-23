import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                Next.js app with a&nbsp;<a href="https://snipcart.com">Snipcart</a>&nbsp;- powered store
            </p>
            <br/>
            <div className={styles.footer__left}>
                <a href="https://github.com/Whis99/Snipcart_NextJS">Github</a>
            </div>
        </footer>
    )
}