import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
  
function App() {
  return (
<div>
  <MailBox boxTitle='Meest Express' mailBoxCount={5} boxUsers={data.meestExpres} />
  <MailBox boxTitle='Nova Poshta' mailBoxCount={3} boxUsers={data.NovaPoshta} />
  <MailBox boxTitle='Ukr Poshta' mailBoxCount={3} boxUsers={data.ukrPoshta}  />
</div>
  )
}

export default App
