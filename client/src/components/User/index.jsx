import useEth from "../../contexts/EthContext/useEth";


// import Contract from "./Contract";
import ContractBtns from "./ContractBtns";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Footer from "./footer";

function User() {
  const { state } = useEth();
  // const [value, setValue] = useState("?");

  const demo =
    <>
      
      <div className="contract-container">
        
        <ContractBtns/>
      </div>
      
    </>;

  return (
    <div className="demo">
      {/* <Title /> */}
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
      <Footer/>
    </div>
    
  );
}

export default User;
