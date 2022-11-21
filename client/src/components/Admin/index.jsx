import useEth from "../../contexts/EthContext/useEth";
import Contract from "./Contract";
import NoticeNoArtifact from "../User/NoticeNoArtifact";
import NoticeWrongNetwork from "../User/NoticeWrongNetwork";

function Admin() {
  const { state } = useEth();

  const admin =
    <>
      <div className="contract-container">  
        <Contract/>
      </div>
    </>;

  return (
    <div >
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            admin
      }
    </div>
    
  );
}

export default Admin;
