import { useState , useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import About from "../Admin/about";
import vector from "./vector.jpg";

function ContractBtns() {
  
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [inputValuevote, setInputValuevote] = useState("");



 
  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };
  const handleInputChangevote = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValuevote(e.target.value);
    }
  };
  const fsendEth = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    
    const newValue = parseInt(inputValue);
    console.log(newValue)
    //await contract.methods.sendEth();
     await contract.methods.sendEth(newValue).send({ from: accounts[0] });
  };
  
  const fvoteRequest = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValuevote === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValuevote = parseInt(inputValuevote);
    
    await contract.methods.voteRequest(newValuevote).send({ from: accounts[0] });
  };
  
  const frefund = async () => {
    await contract.methods.refund().call({ from: accounts[0] });
  };
  





  return (
    <>
    <About/>
    <div className="home">
      <div className="home1">
        <div className="home1text">
        Donate through your Metamask wallet
        <div onClick={fsendEth} className="input-btn">
          <input
            type="text"
            placeholder="Amount"
            value={inputValue}
            onChange={handleInputChange}
          />Donate
        </div>
        </div>
        <div className="vector"> <img src={vector} alt="img"  width="500px" /></div>
      </div>
      <div className="home2">
        You can vote for which request the whole collected amount should be donated
        <div onClick={fvoteRequest} className="input-btn">
          <input
            type="text"
            placeholder="Request no."
            value={inputValuevote}
            onChange={handleInputChangevote}
          />Vote
        </div>
      </div>
      <div className="home3">
        If the target is not reached in specific deadline you will get refund
      <button className="refundbtn" onClick={frefund}> Ask for Refund </button>
      </div>
    </div>
   
    </>
  );
}

export default ContractBtns;



// import { useState } from "react";
// import useEth from "../../contexts/EthContext/useEth";

// function ContractBtns({ setValue }) {
//   const { state: { contract, accounts } } = useEth();
//   const [inputValue, setInputValue] = useState("");

  // const handleInputChange = e => {
  //   if (/^\d+$|^$/.test(e.target.value)) {
  //     setInputValue(e.target.value);
  //   }
  // };

//   const read = async () => {
//     const value = await contract.methods.read().call({ from: accounts[0] });
//     setValue(value);
//   };

  // const write = async e => {
  //   if (e.target.tagName === "INPUT") {
  //     return;
  //   }
  //   if (inputValue === "") {
  //     alert("Please enter a value to write.");
  //     return;
  //   }
  //   const newValue = parseInt(inputValue);
  //   await contract.methods.write(newValue).send({ from: accounts[0] });
  // };

//   return (
//     <div className="btns">

//       <button onClick={read}>
//         read()
//       </button>

      // <div onClick={write} className="input-btn">
      //   write(<input
      //     type="text"
      //     placeholder="uint"
      //     value={inputValue}
      //     onChange={handleInputChange}
      //   />)
      // </div>

//     </div>
//   );
// }

// export default ContractBtns;
