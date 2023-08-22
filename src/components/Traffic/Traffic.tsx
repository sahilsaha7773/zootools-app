export default function Traffic() {
  const data = [
    {
      name: 'Google',
      value: '30,000',
      percentage: 40
    },
    {
      name: 'Twitter',
      value: '20,000',
      percentage: 30
    },
    {
      name: 'Facebook',
      value: '10,000',
      percentage: 20
    },
    {
      name: 'LinkedIn',
      value: '5,000',
      percentage: 10
    },
    {
      name: 'Youtube',
      value: '3,000',
      percentage: 5
    },
    {
      name: 'Other',
      value: '2,000',
      percentage: 2
    },
  ]
  return (
    <div className='card' style={{ padding: '20px 40px' }}>
      <div className='headerButtons'>
        <h3>Traffic</h3>
        <div className='filter'>
          <button className='active'>Source</button>
          <button>City</button>
        </div>
      </div>
      <div>
        {
          data.map((item, index) => (
            <div className='level' style={{
              background: `linear-gradient(to right, rgba(244, 221, 10, 0.5) ${item.percentage}%, transparent ${item.percentage}%)`
            }} key={index}>
              <h3>{item.name}</h3>
              <h3 className='levelValue'>{item.value}</h3>
            </div>
          ))
        }

      </div>
      <button className='cardButton'>
        See Traffic sources
      </button>
    </div>
  )
}
