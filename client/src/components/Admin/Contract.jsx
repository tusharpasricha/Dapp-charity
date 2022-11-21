import { useRef, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import { useState } from "react";
import About from "./about";
import Footer from "../User/footer";

function Contract() {
  const spanEle = useRef(null);
  const { state: { contract, accounts } } = useEth();
  const [value, setValue] = useState("");
  const [inputrequestValue, setInputrequestValue] = useState("");
  const [inputrequestDesc, setInputrequestDesc] = useState("");
  const [inputrequestAdd, setInputrequestAdd] = useState("");
  const [inputpaymentrequestValue, setInputpaymentrequestValue] = useState("");


  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputrequestValue(e.target.value);
    }
  };
  const handleInputChangeDesc = e => {

      setInputrequestDesc(e.target.value);
    
  };
  const handleInputChangeAdd = e => {
    
      setInputrequestAdd(e.target.value);
    
  };
  const handleInputChangePayment = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputpaymentrequestValue(e.target.value);
    }
  };

  const fmakeRequest = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputrequestValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newrequestValue = parseInt(inputrequestValue);

    if (inputrequestDesc === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newrequestValueDesc = parseInt(inputrequestDesc);

    if (inputrequestValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newrequestValueAdd = inputrequestAdd;
    console.log(newrequestValueAdd);
    console.log(accounts[0]);
    
    await contract.methods.createRequests(newrequestValueDesc,newrequestValueAdd,newrequestValue).send({ from: accounts[0] });
  };
  const fmakePayment = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputpaymentrequestValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newpaymentrequestValue = parseInt(inputpaymentrequestValue);
    
    await contract.methods.makePayment(newpaymentrequestValue).send({ from: accounts[0] });
  };


  return (
  <>
       <span className="secondary-color" ref={spanEle}>
      </span>
      <About/>
      <div className="admin">
      <div onClick={fmakeRequest} className="admin1">
            <input
                type="text"
                placeholder="description"
                value={inputrequestDesc}
                onChange={handleInputChangeDesc}
              />
              <input
                type="text"
                placeholder="address"
                value={inputrequestAdd}
                onChange={handleInputChangeAdd}
              />
            <input
                type="text"
                placeholder="uint"
                value={inputrequestValue}
                onChange={handleInputChange}
              />Make Requests
      </div>

      <div onClick={fmakePayment} className="admin2">
            <input
                type="text"
                placeholder="uint"
                value={inputpaymentrequestValue}
                onChange={handleInputChangePayment}
              />Make Payment
      </div>
      </div>
      <Footer/>
    </>
   
  );
}

export default Contract;
