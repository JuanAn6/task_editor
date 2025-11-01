import { useState } from 'react'
import TipTap from './components/TipTap';


function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Editor Tiptap con CSS base
      </h1>
      <TipTap text={text} setText={setText}/>
      <hr/>
      {text}
    </div>
  )
}

export default App
