import React from "react";

import friendsListData from "../datasets/friends.json";
import socialProfileData from "../datasets/user.json";
import statisticsData from "../datasets/statistical-data.json";
import transactionHistoryData from "../datasets/transactions.json";

import Section from "./wrapSection/wrapSection";
import FriendsList from "./friendsList/friendsList";
import SocialProfile from "./socialProfile/socialProfile";
import Statistics from "./statistics/statistics";
import TransactionHistory from "./trasactionHistory/transactionHistory";

function App() {
  return (
    <>
      <Section title="Friends">
        <FriendsList friends={friendsListData} />
      </Section>
      <Section title="Social Profile">
        <SocialProfile {...socialProfileData} />
      </Section>
      <Section title="Statistics">
        <Statistics stats={statisticsData} />
      </Section>
      <Section title="Transaction History">
        <TransactionHistory items={transactionHistoryData} />
      </Section>
    </>
  );
}
export default App;
