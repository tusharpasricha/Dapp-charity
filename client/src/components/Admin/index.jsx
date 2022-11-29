import useEth from "../../contexts/EthContext/useEth";
import AdminMain from "./AdminMain";
import NoticeNoArtifact from "../User/NoticeNoArtifact";
import NoticeWrongNetwork from "../User/NoticeWrongNetwork";

function Admin() {
  const { state } = useEth();

  const admin =
    <>
      <div className="contract-container">  
        <AdminMain/>
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
