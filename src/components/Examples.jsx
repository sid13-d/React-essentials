import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx";

import { useState } from "react";


import { EXAMPLES } from "../data.js";

export default function Examples() {

  const [tabContent, setTabContent] = useState();
  function handleSelect(selectedButton) {
    console.log("selectedButton:" + selectedButton);
    setTabContent(selectedButton);
  }

  let example = <p>Please select from the list</p>
  if (tabContent) {
    example = (
      <>
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>
            {EXAMPLES[tabContent].code}
          </code>
        </pre>
      </>
    );
  }

  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
             <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </>
        }
      >

      </Tabs>
      <div id="tab-content">
        {example}
      </div>
    </Section>
  );
}