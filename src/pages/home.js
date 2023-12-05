import React from "react";
import Header from "../components/header";
import Howwork from "../components/how-work";
import Cardshop from "../components/cardshop";
import Meetchef from "../components/meetchef";
import Share from "../components/share";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Howwork />
      </div>
      <div>
        <Cardshop />
      </div>
      <div>
        <Share />
      </div>
      <div>
        <Meetchef />
      </div>
    </div>
  );
}
