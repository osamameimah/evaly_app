import { useState } from "react";
import { Tab } from "@headlessui/react";
import Styled from "../assets/css/style.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Recent: [],
    Popular: [],
    Trending: [],
    osama: [],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className={Styled.tabList}>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  Styled.tab,
                  selected
                    ? Styled.selected
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={Styled.tabPanels}>
          <Tab.Panel className={Styled.tabPanel}>
            <h1>osama</h1>
          </Tab.Panel>

          <Tab.Panel className={Styled.tabPanel}>
            <h1>mohammed</h1>
          </Tab.Panel>

          <Tab.Panel className={Styled.tabPanel}>
            <h1>yosef</h1>
          </Tab.Panel>

          <Tab.Panel className={Styled.tabPanel}>
            <h1>meimah</h1>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
