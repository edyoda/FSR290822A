import React from "react";
import Header from "../components/header/Header";
import StoriesMain from "../components/stories-main/StoriesMain";

class Stories extends React.Component {
  render() {
    return (
      <>
        <Header />
        <StoriesMain />
      </>
    );
  }
}

export default Stories;
