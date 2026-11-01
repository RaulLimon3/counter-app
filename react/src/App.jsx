
import { Plus, Minus, RotateCcw } from 'lucide-react'
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
          <Button icon={Plus} btnClass={'btn-increase'} btnArial={'Increase one'}/>
          <Button icon={Minus} btnClass={'btn-reset btn-disabled'} btnArial={'Reset value'}/>
          <Button icon={RotateCcw} btnClass={'btn-decrease btn-disabled'} btnArial={'Decrease one'}/>
        </div>
      </main>
    </>
  )
}

export default App
