import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {

    const [count, setCount] = useState<number>(0)
    
    const handleClick= (value: number) => {
        setCount(count + value)
        
    }

  return (
    <div>
        <Header label="Counter App" />
         <Header label={`Counter: ${count}`}/>
        <Button label="Add" handleClick={() => handleClick(1)}/>
        <Button label="Substract" handleClick={() => handleClick(-1)}/>
    </div>
  )
}

export default Counter