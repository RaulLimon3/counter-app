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
          <Button icon={Plus} className={'btn-increase'} ariaLabel={'Increase one'} onClick={increaseCount}/>
          <Button icon={RotateCcw} className={`btn-reset ${isDisabled ? 'btn-disabled' : ''}`} ariaLabel={'Reset value'} onClick={resetCount} disabled={isDisabled}/>
          <Button icon={Minus} className={`btn-decrease ${isDisabled ? 'btn-disabled' : ''}`} ariaLabel={'Decrease one'} onClick={decreaseCount} disabled={isDisabled}/>
        </div>
      </main>
    </>
  )
}

export default App
