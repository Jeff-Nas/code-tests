import './App.css'
import { TestEffect } from './components-test/TestEffect'
import { Profile } from './components-test/Profile.jsx';
import { UserProvider } from './components-test/UserProvider.jsx';
import { ManuaisJlg } from './components-exercise/ManuaisJlg.jsx';
import ViwerPDF from './components-exercise/ViwerPDF.jsx';

function App() {
  return (
    <UserProvider>
      <main className='bg-gray-900 min-h-screen text-pink-200'>
        <TestEffect />
        <Profile />
        <ManuaisJlg />
        <ViwerPDF pdfUrl={'https://arquivos.maquinaspemt.com.br/JLG/diesel/boom-lift/1250AJP/parts/1250AJP_parts-pn-3121172-25-08-18-no-serie-0300000100-a-0300201017.pdf'} />
      </main>
    </UserProvider>



  )
}

export default App
