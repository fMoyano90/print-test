import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handlePrint = () => {
    const printContent = document.getElementById("print-area");
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Imprimir Texto</h1>
        <textarea
          id='print-area'
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows='10'
          cols='30'
        />
        <button onClick={handlePrint}>Imprimir Texto</button>
      </header>
    </div>
  );
}

export default App;
