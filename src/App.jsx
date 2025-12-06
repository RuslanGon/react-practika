import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
import DrinksCounter from './components/DrinksCounter.jsx';
  
function App() {
  return (
<div>
  {/* <MailBox boxTitle='Meest Express' boxUsers={data.meestExpres} /> */}
  <DrinksCounter />
</div>
  )
}

export default App
