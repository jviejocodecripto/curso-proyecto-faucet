import { useEffect } from "react"
import { useState } from "react"
function App() {
  const [address, setAddress] = useState(null)
  const [signData, setSignData] = useState(null)
  useEffect(() => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then(
      (i => {
        setAddress(i[0])
        window.ethereum.on('accountsChanged', function (accounts) {
          setAddress(accounts[0])
        })
      })
    )
  }, [])
  async function sign() {
    const signature = await ethereum.request({
      method: 'personal_sign',
      params: ["mensaje a firmar", address]
    });
    setSignData(signature)
  }
  return (
    <div>
      Cuenta {address}
      <div>
        
        <button onClick={() => sign()}>Sign</button>
      </div>
      <p>
        {signData}
      </p>
    </div>
  )
}

export default App
