import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns() {
  
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [inputValuevote, setInputValuevote] = useState("");

  const [minimumContribution,setminimumContribution]=useState("0")
  const [raisedAmount,setraisedAmount]=useState("0")
  const [deadline,setdeadline]=useState("0")
  const [target,settarget]=useState("0")
  const [noofcontributer,setnoofcontributer]=useState("0")

  const [request,setrequest]=useState("")

 
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



const fminimumcontribution= async () => {
    const val = await contract.methods.minimumContribution().call({ from: accounts[0] });
    setminimumContribution(val);
    console.log(val)
  };
const fraisedAmount = async () => {
    const value = await contract.methods.raisedAmount().call({ from: accounts[0] });
    setraisedAmount(value);
 };
const ftarget = async () => {
  const value = await contract.methods.target().call({ from: accounts[0] });
  settarget(value);
};
const fdeadline = async () => {
  const value = await contract.methods.deadline().call({ from: accounts[0] });
  setdeadline(value);
};
const fnoofcontributer = async () => {
  const value = await contract.methods.noOfContributors().call({ from: accounts[0] });
  setnoofcontributer(value);
};


const fsendEth = async e => {
  if (e.target.tagName === "INPUT") {
    return;
  }
  if (inputValue === "") {
    alert("Please enter a value to write.");
    return;
  }
  //const newValue = parseInt(inputValue);
  await contract.methods.sendEth();
  // await contract.methods.sendEth.send(newValue,{ from: accounts[0] });
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

const frequest = async () => {
  const value = await contract.methods.numRequests().call({ from: accounts[0] });
  setrequest(value);
  console.log(value);
};





  return (
    <>
    <div className="about">
      {minimumContribution}
      <button onClick={fminimumcontribution}>minimumContribution</button>
      <br></br>

      {raisedAmount}
      <button onClick={fraisedAmount}>Raised amount</button>
      <br></br>

      {deadline}
      <button onClick={fdeadline}>Deadline</button>
      <br></br>

      {noofcontributer}
      <button onClick={fnoofcontributer}>No of contributers</button>
      <br></br>

      {target}
      <button onClick={ftarget}>target </button>

      {request}
      <button onClick={frequest}>No of request</button>
    
    </div>
    <div className="home">
       <div onClick={fsendEth} className="input-btn">
        <input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />donate
      </div>
      <div onClick={fvoteRequest} className="input-btn">
        <input
          type="text"
          placeholder="uint"
          value={inputValuevote}
          onChange={handleInputChangevote}
        />Vote
      </div>
      <div>
        If the target is not reached in specific deadline you will get refund
      <button onClick={frefund}> Ask for Refund </button>
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
