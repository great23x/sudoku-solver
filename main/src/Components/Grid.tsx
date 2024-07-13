import { useState } from 'react'
import Cell from './Cell'

const Grid = () => {
  const [grid, setGrid] = useState<number[][]>(Array(9).fill(Array(9).fill(0)))

  const handleChange = (row:number, col:number, val:number) => {
    const newGrid = grid.map((e,r) => e.map((v,c) => (r===row && c===col ? val : v )))
    setGrid(newGrid)
    console.log(newGrid)
  }

  return (
    <div className="w-full flex justify-center ">
      <div className='mt-10'>
        {
            grid.map((row, rowIndex) => {return <div key={rowIndex} className={`flex flex-row ${(rowIndex%3==0?'mt-1':'')}`}>
              {
                row.map((val, colIndex) => {return <div key={colIndex+rowIndex} className={`mt-1 ml-1 ${((colIndex+1)%3==0&&colIndex>0?'mr-1':'')}`}>
                  <Cell value={val} key={`${rowIndex}-${colIndex}`} onInputChange={(newVal) => handleChange(rowIndex, colIndex, newVal)} />
                </div>})
              }
            </div>})
        }
      </div>
    </div>

  )
}

export default Grid