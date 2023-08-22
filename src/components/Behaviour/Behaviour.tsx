export default function Behaviour() {
  const data = [
    {
      name: 'United States',
      flag: 'US',
      value: '30,000',
      percentage: 40
    },
    {
      name: 'Germany',
      flag: 'DE',
      value: '20,000',
      percentage: 30
    },
    {
      name: 'Netherlands',
      flag: 'NL',
      value: '10,000',
      percentage: 20
    },
    {
      name: 'India',
      flag: 'IN',
      value: '5,000',
      percentage: 10
    },
    {
      name: 'Japan',
      flag: 'JP',
      value: '3,000',
      percentage: 5
    },
    {
      name: 'Other',
      flag: 'Global',
      value: '2,000',
      percentage: 2
    },
  ]
  return (
    <div className='card' style={{ padding: '20px 40px' }}>
      <div className='headerButtons'>
        <h3>Behaviour</h3>
        <div className='filter'>
          <button className='active'>Browsers</button>
          <button>Decides</button>
        </div>
      </div>
      <div>
        {
          data.map((item, index) => (
            <div className='level' style={{
              background: `linear-gradient(to right, rgba(244, 221, 10, 0.5) ${item.percentage}%, transparent ${item.percentage}%)`
            }} key={index}>
              <h3 style={{ marginLeft: "30px" }}>{item.name}</h3>
              <h3 className="levelValue">{item.value}</h3>
            </div>
          ))
        }
      </div>
      <button className='cardButton'>
        See all countries
      </button>
    </div>
  )
}
