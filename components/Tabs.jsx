import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

const Tabs = ({ setTabValue }) => {
  const tabsText = ["All", "Movies", "TV Shows"];
  const [activeTab, setActiveTab] = useState(tabsText[0]);

  useEffect(() => {
    setTabValue(activeTab);
  }, [activeTab]);

  return (
    <TabsItems>
      {tabsText.map((tab, index) => (
        <TabsItem
          key={index}
          active={activeTab === tab ?? true}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabsItem>
      ))}
    </TabsItems>
  );
};

const TabsItems = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${rem(8)};
  height: ${rem(56)};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(${rem(40)});
  border-radius: ${rem(12)};
  margin-bottom: ${rem(24)};
`;

const TabsItem = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: ${rem(8)} ${rem(32)};
  border-radius: ${rem(8)};
  color: ${(props) => (props.active ? "#EBE9FE;" : "#8E95A9")};
  font-weight: 600;
  font-size: ${rem(16)};
  line-height: 150%;
  letter-spacing: 0.02em;
  background: ${(props) => (props.active ? "#7B6EF6;" : "transparent")};
`;

export default Tabs;
