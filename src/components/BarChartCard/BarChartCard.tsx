import { MdOutlinePeopleAlt } from 'react-icons/md'
import styles from './style.module.css'

export default function BarChartCard() {
  const data = []
  for (let i = 0; i < 30; i++) {
    data.push(3.33 + (100 / 30) * (i + Math.random() * 10 - Math.random() * 10));
  }
  console.log(data);

  return (
    <div className='card'>
      <h1>100,000 <MdOutlinePeopleAlt className={styles.icon} /></h1>
      <p>Participants</p>
      <div className={styles.barChart}>
        {
          data.map((item, index) => (
            <div className={styles.bar + " " + styles.tooltip} style={{ height: `${item}%` }} key={index}>
              <div className={styles.tooltipText}>
                <strong>3,000</strong> signups<br />
                <span>26th April</span>
              </div>
            </div>
          ))
        }
        <div className={styles.line}></div>
      </div>
    </div>
  )
}
