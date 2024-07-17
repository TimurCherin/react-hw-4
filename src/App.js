import './App.css';
import Statistics from "./components/stats";
import statsInfo from "./info/statsInfo.json";
import frendsInfo from "./info/friends.json"
import FriendsList from "./components/listFriends";

function App() {
  return (
    <div>
      <Statistics stats={statsInfo} />
      <FriendsList friends={frendsInfo} />
    </div>
  );
}

export default App;