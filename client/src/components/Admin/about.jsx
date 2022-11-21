import { useState , useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import { FaArrowAltCircleDown, FaArrowCircleDown, FaBeer, FaCloudMeatball, FaCloudUploadAlt, FaDownload, FaRegArrowAltCircleDown } from 'react-icons/fa';
function About() {
    const { state: { contract, accounts } } = useEth();

    const [minimumContribution,setminimumContribution]=useState("0")
    const [raisedAmount,setraisedAmount]=useState("0")
    const [deadline,setdeadline]=useState("0")
    const [target,settarget]=useState("0")
    const [noofcontributer,setnoofcontributer]=useState("0")
    const [request,setrequest]=useState("")
    const [balance,setbalance]=useState("0")



  useEffect(() => {fdeadline()}, []);
  useEffect(() => {fminimumcontribution()}, []);
  useEffect(() => {fnoofcontributer()}, []);
  useEffect(() => {fraisedAmount()}, []);
  useEffect(() => {ftarget()}, []);
  useEffect(() => {frequest()}, []);
  useEffect(() => {getContractBalance()}, []);

  const getContractBalance = async () => {
    console.log(contract.methods)
    const value = await contract.methods.getContractBalance().call({ from: accounts[0] });
    setbalance(value);
    console.log(value)
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
    
    
    
    const frequest = async () => {
      const value = await contract.methods.numRequests().call({ from: accounts[0] });
      setrequest(value);
      console.log(value);
    };
    
    
    

    return   <div className="about">
    <div className="title">
    <h2>Charity dapp</h2>
    <h5>Restoring trust in Charity!</h5>
    </div>
    <div className="item">
    Balance : {balance}
    </div>
    <div className="item">
    Target : {target}
    </div>
    <div className="item">
    Raised amount : {raisedAmount}
    </div>
    <div className="item">
    Deadline : {deadline}
    </div>
    <div className="item">
    No of contributers : {noofcontributer}
    </div>
    <div className="item">
    Minimum Contribution : {minimumContribution}
    </div>
    
    <div className="item">
    No of request : {request}
    </div>
    <div className="refbtn">
    <button onClick={() => {
        ftarget();
        fdeadline();
        fminimumcontribution();
        fraisedAmount();
        fnoofcontributer();
        frequest();
        getContractBalance();
      }}><FaArrowCircleDown size="20px"/> </button>
      </div>
  
  </div>
  };
  
  export default About;
  