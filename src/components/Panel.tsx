import React, {useState} from "react";
import {TabItem} from "./TabItem";

// TabComponent = TabItem + Content
export type TabComponent = {
  title: string;
  content: string;
  isDisabled?: boolean;
}

type PanelProps = {
  tabs: TabComponent[];
}

export const Panel:React.FC<PanelProps> = ({tabs}) => {

  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (index:number) => setActiveTab(index);
  return (
    <div>
      <div>
        {tabs.map(({title, isDisabled}, index) => 
          <TabItem title={title} isActive={activeTab===index} isDisabled={isDisabled} handleTabClick={()=> handleTab(index)}/>
        )}

      </div>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}