import React from "react";

export type TabItemProps = {
  isActive:boolean;
  title:string;
  handleTabClick:()=>void;
  isDisabled?: boolean;
}
export const TabItem:React.FC<TabItemProps> = ({isActive, isDisabled, title, handleTabClick}) => {
  const Title = title;
  return (<button className={isActive ? "active" : ""} disabled={isDisabled} onClick={handleTabClick} dangerouslySetInnerHTML={{__html: title}}>
  </button>);
}