import LightRays from '../../Components/LightRays/LightRays';
import styles from './Home.module.css';

export function Home(){

    return(
        <div className={styles.container}>
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />
            
            {/* Blur Overlay */}
            <div className={styles.blurOverlay}></div>
            
            {/* WhatsApp Button */}
            <div className={styles.whatsappButton}>
                <a 
                    href="whatsapp://send?phone=972534290276&text=היי%20מה%20קורה%0Aאני%20מעוניין/ת%20לשמוע%20עוד%20בנושא%20הטיפול%20ריגשי%20:)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappLink}
                >
                    <div className={styles.whatsappIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                    </div>
                    <span className={styles.whatsappText}>צ'אט איתי</span>
                </a>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>לידור - ייעוץ רגשי </h1>
                <p className={styles.subtitle}>מלווה אותך בדרך לצמיחה מתוך הקושי</p>
                
                <div className={styles.sections}>
                    {/* Section 1 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>מה אני עושה</h2>
                        <p className={styles.sectionText}>
                            אני מלווה אנשים בתהליכי התמודדות רגשית ומדריך אותם כיצד לצמוח מתוך הקושי. 
                            העבודה משלבת כלים מעולם הייעוץ הרגשי יחד עם הדרכה יהודית, מתוך חיבור לערכים, 
                            מקורות ותבונה רוחנית, שמעניקים לאדם לא רק פתרון זמני אלא גם משמעות וכיוון לחיים.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>מה אני מציע ולמה זה שונה מפסיכולוג</h2>
                        <p className={styles.sectionText}>
                            אני מציע ייעוץ רגשי בגישה ייחודית שמבוססת על שילוב בין הבנה פסיכולוגית לבין 
                            חכמת היהדות. פסיכולוג מתמקד בעיקר בצדדים המקצועיים-מדעיים, בעוד אני משלב גם 
                            מענה לנפש וגם חיבור לרובד הרוחני והאמוני של האדם, מה שנותן עומק, חיזוק וביטחון פנימי לאורך זמן.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>עם מי אני עובד ועל אילו נושאים</h2>
                        <p className={styles.sectionText}>
                            אני עובד עם גברים ונשים, יחידים וזוגות, שמתמודדים עם מגוון קשיים:
                        </p>
                        <ul className={styles.topicsList}>
                            <li>זוגיות ושלום בית</li>
                            <li>חינוך ילדים</li>
                            <li>חרדות, דיכאון ולחצים</li>
                            <li>שאלות של אמונה ואתגרי רוח</li>
                            <li>משברים אישיים וחוסר משמעות</li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>הקונספט המרכזי של השירות</h2>
                        <p className={styles.sectionText}>
                            הקונספט הוא שילוב בין ייעוץ רגשי לבין הדרכה יהודית-רוחנית. מצד אחד מתן כלים 
                            מעשיים להתמודדות עם מצבים יומיומיים, ומצד שני ביסוס ותמיכה מתוך מקורות יהודיים 
                            שמעניקים לאדם חוסן נפשי, אמונה מחודשת ויכולת לראות את הקושי כשלב בדרך לצמיחה.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}