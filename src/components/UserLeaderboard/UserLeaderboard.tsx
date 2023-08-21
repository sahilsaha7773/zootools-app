import React from 'react'
import styles from './style.module.css'

export default function UserLeaderboard() {
  const data = [
    {
      email: 'paula.suarez@cons..es',
      friendsInvited: '6,500',
      countries: 'USA'
    },
    {
      email: 'laura.kenet...3@yahoo.com',
      friendsInvited: '2,300',
      countries: 'Moncao'
    },
    {
      email: 'paula.suarez@cons..es',
      friendsInvited: 10,
      countries: 'Spain'
    }
  ]
  return (
    <div className='card' style={{ padding: '20px 40px' }}>
      <h3>User Leaderboard</h3>
      <div className={styles.tables}>
        <table>
          <tr>
            <th>Email</th>
            <th>Friends Invited</th>
            <th>Countries</th>
          </tr>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.friendsInvited}</td>
                <td>{item.countries}</td>
              </tr>
            ))
          }

        </table>

        {/* <div className={styles.tableHeader}>
          <div className={styles.tableHeaderItem}>Email</div>
          <div className={styles.tableHeaderItem}>Friends Invited</div>
          <div className={styles.tableHeaderItem}>Countries</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableRowItem}>
            paula.suarez@cons..es
          </div>
          <div className={styles.tableRowItem}>
            10
          </div>
          <div className={styles.tableRowItem}>
            Spain
          </div>
        </div> */}
      </div>
    </div>
  )
}
