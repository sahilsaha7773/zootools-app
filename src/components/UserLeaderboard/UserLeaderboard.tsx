import styles from './style.module.css'

export default function UserLeaderboard() {
  const data = [
    {
      email: 'paula.@cons..es',
      friendsInvited: '6,500',
      countries: 'USA'
    },
    {
      email: 'laura3@yahoo.com',
      friendsInvited: '2,300',
      countries: 'Moncao'
    },
    {
      email: 'paula.@cons..es',
      friendsInvited: 10,
      countries: 'Spain'
    }
  ]
  return (
    <div className='card' style={{ padding: '20px 40px' }}>
      <h3>User Leaderboard</h3>
      <div className={styles.tableDiv}>
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
        <button className='cardButton'>
          See Leaderboard
        </button>
      </div>
    </div>
  )
}
