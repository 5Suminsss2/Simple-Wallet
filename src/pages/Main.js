import AccountHistory from "../components/AccountHistory";
import Alaram from "../components/Alaram";
import GraphAccount from "../components/GraphAccount";
import NewAccountHistory from "../components/NewAccountHistory";
import Title from "../components/Title";

function Main () {
    return (
      <div>
        <Title />
        <Alaram />
        <GraphAccount />
        <AccountHistory />
        <NewAccountHistory />
      </div>
    );
}

export default Main;