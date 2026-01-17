import GazePortrait from './components/Gazeportrait'
import './App.css'
import AlternatingProjects from './components/AlternatingProjects'

function App() {
  return (
    <>
      <div style={{ 
        width: '100%', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f0f0f0'
      }}>
        <GazePortrait width={200} height={200} className="profile-pic"/>
      </div>

      <AlternatingProjects/>
    </>
  )
}

export default App
