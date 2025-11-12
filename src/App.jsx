import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
  
function App() {
  return (
<div>
  <MailBox boxTitle='Meest Express' boxUsers={data.meestExpres} />
</div>
  )
}

export default App
