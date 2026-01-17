import GazePortrait from './components/Gazeportrait'
import './App.css'
import AlternatingProjects from './components/AlternatingProjects'

function App() {
  return (
    <>
      <GazePortrait width={200} height={200} className="profile-pic"/>

      <AlternatingProjects/>
    </>
  )
}

export default App
