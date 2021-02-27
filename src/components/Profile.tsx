import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/deyvison-silva.png" alt="Deyvison Silva"/>
            <div>
                <strong>Deyvison Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}