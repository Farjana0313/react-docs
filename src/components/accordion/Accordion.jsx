import Panel, { useState } from "./Panel";

export default function Accordion() {
  
  const [isActive, setIsActive] = useState(false);  

  const handleActive = () => {
    setIsActive(!isActive)
}
  return (
    <>
      <h2 >Learn with sumit</h2>
      <Panel title={"Paid Course"} isActive={isActive} handleActive={handleActive}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, repellat!
      </Panel>
      <Panel title={"Free Course"} isActive={isActive} handleActive={handleActive}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod accusamus molestiae in suscipit ducimus accusantium et deserunt dicta quibusdam.
      </Panel>
    </>
  );
}