
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
    return (

        <Section title={"Core Concepts"} id="core-concepts">
        <ul>
          {/* here we have use the spread operator which will pull out all the key value pairs */}
          {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept}/>)}
          
          
        </ul>
      </Section>
    );
}