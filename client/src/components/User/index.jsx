import useEth from "../../contexts/EthContext/useEth";
import ContractBtns from "./UserMain";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Footer from "./footer";

function User() {
  const { state } = useEth();
  const user =
    <>
      <div className="contract-container">
        <ContractBtns/>
      </div>
    </>;

  return (
    <div>
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            user
      }
      <Footer/>
    </div>
    
  );
}

export default User;
