import useEth from "../../contexts/EthContext/useEth";


import Contract from "./Contract";

import NoticeNoArtifact from "../User/NoticeNoArtifact";
 import NoticeWrongNetwork from "../User/NoticeWrongNetwork";
import Footer from "./footer";

function Admin() {
  const { state } = useEth();
  // const [value, setValue] = useState("?");

  const demo =
    <>
      
      <div className="contract-container">
        
        <Contract/>
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
  
    </div>
    
  );
}

export default Admin;
