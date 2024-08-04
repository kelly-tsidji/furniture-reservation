import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabGroup({ tabs }) {

    const [key, setKey] = useState(tabs[0].eventKey)


    return (
        <Tabs
            defaultActiveKey={tabs[0].eventKey}
            id="tabs"
            className="mb-3"
            justify
            fill    // TODO: might remove
            transition={false}  // no animation when clicking from tab to tab
        >
            {tabs.map( (tab) => (
                <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
                    {tab.content}
                </Tab>
            ))}
        </Tabs>
    )
}

export default TabGroup;
