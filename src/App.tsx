import './App.css'
import BarChartCard from './components/BarChartCard/BarChartCard'
import InsightsCard from './components/Insights/InsightsCard'
import UserLeaderboard from './components/UserLeaderboard/UserLeaderboard'
import Traffic from './components/Traffic/Traffic'
import SignupLocation from './components/SignupLocation/SignupLocation'
import Behaviour from './components/Behaviour/Behaviour'

function App() {

  return (
    <>
      <div className='main'>
        <div className='header'>
          <h1>Summer referral competition</h1>
          <div className='timeFilter'>
            <button>1h</button>
            <button>24h</button>
            <button>30d</button>
            <button>60d</button>
          </div>
        </div>
        <BarChartCard />
        <InsightsCard />
        <div className='gridContainer'>
          <UserLeaderboard />
          <Traffic />
          <SignupLocation />
          <Behaviour />
        </div>
      </div >
    </>
  )
}

export default App
