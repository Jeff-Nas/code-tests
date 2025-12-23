import './App.css'
import { TestEffect } from './components-test/TestEffect'
import { Profile } from './components-test/Profile.jsx';
import { UserProvider } from './components-test/UserProvider.jsx';
import { ManuaisJlg } from './easy-boom/ManuaisJlg.jsx';
import { Catalogo } from './easy-boom/Catalogo.jsx';

function App() {
  return (
    <UserProvider>
      <main className='bg-gray-900 min-h-screen text-pink-200'>
        <TestEffect />
        <Profile />
        <ManuaisJlg />
        <Catalogo />
      </main>
    </UserProvider>



  )
}

export default App
