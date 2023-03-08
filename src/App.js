import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './Actions/index'

function App() {

    const myState = useSelector((state) => { return state.changeNum })
    const dispatch = useDispatch();

    return (
        <>
            <div className="h-screen w-screen p-10 select-none">
                <div className="bg-blue-50 h-full w-full text-center p-5 flex flex-col items-center justify-center">
                    <h1 className='text-cyan-800 font-semibold text-3xl text-center m-3'>Increment Decrement React-Redux</h1>
                    <div className="w-60 border-4 border-cyan-700 flex rounded-lg">
                        <button className="h-12 w-20 text-2xl p-1 bg-cyan-700 text-white active:bg-cyan-900 hover:bg-cyan-800 rounded-[3px] rounded-r-none outline-none"
                            onClick={ () => {dispatch(decNum())} }>-</button>
                        <input className="h-12 w-20 bg-cyan-50 text-2xl p-1 text-neutral-900 text-center outline-x-4 outline-cyan-700 outline-none cursor-copy" 
                            value={myState} 
                            readOnly>
                        </input>
                        <button className="h-12 w-20 text-2xl p-1 bg-cyan-700 text-white active:bg-cyan-900 hover:bg-cyan-800 rounded-[3px] rounded-l-none outline-none"
                            onClick={ () => {dispatch(incNum(5))} }>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
