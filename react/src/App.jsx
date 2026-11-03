import { Plus, Minus, RotateCcw } from 'lucide-react'
import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(current => current + 1);

  const decreaseCount = () => setCount(current => Math.max(0, current - 1));

  const resetCount = () => setCount(0);

  const isDisabled = count === 0;

  return (
    <>
      <main className='container'>
        <h1 className='title'>Counter App</h1>
        <div className='digit-number'>
          <output className='number' aria-live='polite'>{count}</output>
        </div>
        <div className='cta-buttons'>
          <Button icon={Plus} btnClass={'btn-increase'} btnArial={'Increase one'} action={increaseCount}/>
          <Button icon={RotateCcw} btnClass={`btn-reset ${isDisabled ? 'btn-disabled' : ''}`} btnArial={'Reset value'} action={resetCount} btnEnable={isDisabled}/>
          <Button icon={Minus} btnClass={`btn-decrease ${isDisabled ? 'btn-disabled' : ''}`} btnArial={'Decrease one'} action={decreaseCount} btnEnable={isDisabled}/>
        </div>
      </main>
    </>
  )
}

export default App
