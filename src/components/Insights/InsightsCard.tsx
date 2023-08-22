import { BiBulb, BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import styles from './style.module.css'
export default function InsightsCard() {
  return (
    <div className='card' style={{ marginBottom: "50px" }}>
      <h1>ZooTools insights</h1>
      <p>Making analytics simple and actionable</p>
      <div className={styles.insightsDiv}>
        <div className={styles.summaryDiv}>
          <h3>Summary</h3>
          <div className={styles.point}>
            <span className={styles.summaryIcon} style={{ backgroundColor: 'red' }}>
              <BiSolidDownArrow />
            </span>
            <p><strong>Signups are slowing down: </strong>-5% new than last week</p>
          </div>
          <div className={styles.point}>
            <span className={styles.summaryIcon} style={{ backgroundColor: 'rgb(85, 249, 85)' }}>
              <BiSolidUpArrow />
            </span>
            <p><strong>80% </strong>of your signups were invited by other members</p>
          </div>
          <div className={styles.point}>
            <span className={styles.summaryIcon} style={{ backgroundColor: '#f4dd0a', color: 'black' }}>
              <BiBulb />
            </span>
            <p><strong>80% </strong>of your signups were invited by a friend</p>
          </div>
          <div className={styles.point}>
            <span className={styles.summaryIcon} style={{ backgroundColor: '#f4dd0a', color: 'black' }}>
              <BiBulb />
            </span>
            <p><strong>80% </strong>of your signups were invited by a friend</p>
          </div>
        </div>
        <div className={styles.recommendationsDiv}>
          <h3>Recommendations</h3>
          <p>Make sure to promote and share your form</p>
          <p>Congrats! This is huge, keep rewarding your users!</p>
        </div>
      </div>

    </div>
  )
}
