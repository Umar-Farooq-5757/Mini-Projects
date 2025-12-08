import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { FaGripHorizontal } from "react-icons/fa";
import { FaGripVertical } from "react-icons/fa";
import NumberInput from "./NumberInput";
import { LuAlignHorizontalJustifyStart } from "react-icons/lu";
import { LuAlignHorizontalJustifyEnd } from "react-icons/lu";
import { LuAlignHorizontalJustifyCenter } from "react-icons/lu";
import { LuAlignHorizontalSpaceBetween } from "react-icons/lu";
import { RxSpaceEvenlyHorizontally } from "react-icons/rx";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";
import RangeSlider from "./RangeSlider";
import FlexItem from "./FlexItem";

const Flexbox = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [noOfItems, setNoOfItems] = useState(3);
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItems, setAlignItems] = useState("");
  const [flexWrap, setFlexWrap] = useState("");
  const [flexGrow, setFlexGrow] = useState(0);
  const [gap, setGap] = useState(10);

  const styles = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap:`${gap}px`,
  };
  return (
    <section className="my-3 mt-6 mx-3 sm:mx-10 md:mx-20">
      <h2 className="select-none mb-2 inline-block text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#2a82ff] to-[#00d2f3] bg-clip-text text-transparent">
        FlexBox
      </h2>
      <div className="options flex gap-5 flex-wrap">
        <div>
          <Dropdown
            label="Flex-Direction"
            items={[
              {
                label: "Column",
                icon: <FaGripVertical className="size-5 mr-2" />,
                action: () => setFlexDirection("column"),
              },
              {
                label: "Column-Reverse",
                icon: <FaGripVertical className="size-5 mr-2" />,
                action: () => setFlexDirection("column-reverse"),
              },
              {
                label: "Row",
                icon: <FaGripHorizontal className="size-5 mr-2" />,
                action: () => setFlexDirection("row"),
              },
              {
                label: "Row-Reverse",
                icon: <FaGripHorizontal className="size-5 mr-2" />,
                action: () => setFlexDirection("row-reverse"),
              },
            ]}
          />
        </div>
        <div>
          <NumberInput
            value={noOfItems}
            setValue={setNoOfItems}
            setNoOfItems={setNoOfItems}
            min={0}
            max={20}
            defaultValue={3}
          />
        </div>
        <div>
          <Dropdown
            label="Justify-Content"
            items={[
              {
                label: "Start",
                icon: <LuAlignHorizontalJustifyStart className="size-5 mr-2" />,
                action: () => setJustifyContent("start"),
              },
              {
                label: "Center",
                icon: (
                  <LuAlignHorizontalJustifyCenter className="size-5 mr-2" />
                ),

                action: () => setJustifyContent("center"),
              },
              {
                label: "End",
                icon: <LuAlignHorizontalJustifyEnd className="size-5 mr-2" />,
                action: () => setJustifyContent("end"),
              },
              {
                label: "Space-Between",
                icon: <LuAlignHorizontalSpaceBetween className="size-5 mr-2" />,
                action: () => setJustifyContent("space-between"),
              },
              {
                label: "Space-Evenly",
                icon: <RxSpaceEvenlyHorizontally className="size-5 mr-2" />,
                action: () => setJustifyContent("space-evenly"),
              },
              {
                label: "Space-Around",
                icon: <LuAlignHorizontalSpaceAround className="size-5 mr-2" />,
                action: () => setJustifyContent("space-around"),
              },
            ]}
          />
        </div>
        <div>
          <Dropdown
            label="Align-Items"
            items={[
              {
                label: "Start",
                icon: <LuAlignHorizontalJustifyStart className="size-5 mr-2" />,
                action: () => setAlignItems("start"),
              },
              {
                label: "Center",
                icon: (
                  <LuAlignHorizontalJustifyCenter className="size-5 mr-2" />
                ),
                action: () => setAlignItems("center"),
              },
              {
                label: "End",
                icon: <LuAlignHorizontalJustifyEnd className="size-5 mr-2" />,
                action: () => setAlignItems("end"),
              },
            ]}
          />
        </div>
        <div>
          <Dropdown
            label="Flex-Grow (item)"
            items={[
              {
                label: "0",
                action: () => setFlexGrow(0),
              },
              {
                label: "1",
                action: () => setFlexGrow(1),
              },
            ]}
          />
        </div>
        <div>
          <Dropdown
            label="Flex-Wrap"
            items={[
              {
                label: "Wrap",
                action: () => setFlexWrap("wrap"),
              },
              {
                label: "No-Wrap",
                action: () => setFlexWrap("nowrap"),
              },
              {
                label: "Wrap-Reverse",
                action: () => setFlexWrap("wrap-reverse"),
              },
            ]}
          />
        </div>
        <div>
          <RangeSlider value={gap} setValue={setGap}  min={0} max={50} defaultValue={gap} />
        </div>
      </div>
      {/* Actual flexbox container */}
      <div
        style={styles}
        className="my-5 p-2 overflow-auto border border-gray-300 h-72 shadow-sm rounded-sm"
      >
        {Array.from({ length: noOfItems }).map((_, index) => (
          <FlexItem key={index} count={index + 1} flexGrow={flexGrow} />
        ))}
      </div>
    </section>
  );
};

export default Flexbox;
