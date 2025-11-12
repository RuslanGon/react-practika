import './App.css'
import MailBox from './components/MailBox.jsx'
import data from '../data.json';
  
function App() {
  return (
<div>
  <MailBox boxTitle='Meest Express' boxUsers={data.meestExpres} />
  <MailBox boxTitle='Nova Poshta'  boxUsers={data.NovaPoshta} />
  <MailBox boxTitle='Ukr Poshta'  boxUsers={data.ukrPoshta}  />
</div>
  )
}

export default App
