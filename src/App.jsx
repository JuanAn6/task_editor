import { useState } from 'react'
import TipTap from './components/TipTap';


function App() {
    const [description, setDescription] = useState('');

    

    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                Editor Tiptap con CSS base
            </h1>
            <TipTap />
        </div>
    )
}

export default App
