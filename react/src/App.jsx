
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <main className='container'>
        <h1 className='title'>Counter App</h1>
        <div className='digit-number'>
          <output className='number' aria-live='polite'>0</output>
        </div>
        <div className='cta-buttons'>
          <Button />
        </div>
      </main>
    </>
  )
}

export default App
