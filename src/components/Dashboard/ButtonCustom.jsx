import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import Style from "../../assets/css/style.module.css";
import { useDispatch } from "react-redux";
import { OrderSliceActions } from "../../redux/order-slice";
const people = [
  {
    
    name: "Pending",

  },
  {
    name: "Confirmed",

  },
  {
    name: "Processing",

  },
  {
    name: "Picked",

  },
  {
    name: "Shipped",

  },
  {
    name: "Delivered",

  },
];


const ButtomCustom = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const onPushNameButton = (person) => {
    setSelectedPerson(person);
    dispatch(OrderSliceActions.button(person.name));

  };


  const toggleListbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${Style.listbox_container} ${isOpen ? Style.open : Style.closed
        }`}
      style={{
        background:
          selectedPerson.name === "Pending"
            ? "#f8edca"
            : selectedPerson.name === "Picked"
              ? "#c6d1e7"
              : selectedPerson.name === "Confirmed"
                ? "#cad4cf"
                : selectedPerson.name === "Shipped"
                  ? "#cdb3d6"
                  : selectedPerson.name === "Processing"
                    ? "#dee6e9"
                    : selectedPerson.name === "Delivered"
                      ? "#c0bbd3"
                      : "",
      }}
    >
      <Listbox value={selectedPerson} onChange={onPushNameButton}>
        <Listbox.Button
          className={Style.listbox_button}
          style={{
            color:
              selectedPerson.name === "Pending"
                ? "#ffc600"
                : selectedPerson.name === "Picked"
                  ? "#0F60FF"
                  : selectedPerson.name === "Confirmed"
                    ? "#28C76F"
                    : selectedPerson.name === "Shipped"
                      ? "#BD00FF"
                      : selectedPerson.name === "Processing"
                        ? "#0FB7FF"
                        : selectedPerson.name === "Delivered"
                          ? "#33189D"
                          : "",
          }}
          onClick={toggleListbox}
        >
          {selectedPerson.name}

          <span
            className={Style.listbox_arrow}
            style={{
              borderTop:
                selectedPerson.name === "Pending"
                  ? "2px solid #ffc600"
                  : selectedPerson.name === "Picked"
                    ? "2px solid #0F60FF"
                    : selectedPerson.name === "Confirmed"
                      ? "2px solid #28C76F"
                      : selectedPerson.name === "Shipped"
                        ? "2px solid #BD00FF"
                        : selectedPerson.name === "Processing"
                          ? "2px solid #0FB7FF"
                          : selectedPerson.name === "Delivered"
                            ? "2px solid #33189D"
                            : "",
              borderRight:
                selectedPerson.name === "Pending"
                  ? "2px solid #ffc600"
                  : selectedPerson.name === "Picked"
                    ? "2px solid #0F60FF"
                    : selectedPerson.name === "Confirmed"
                      ? "2px solid #28C76F"
                      : selectedPerson.name === "Shipped"
                        ? "2px solid #BD00FF"
                        : selectedPerson.name === "Processing"
                          ? "2px solid #0FB7FF"
                          : selectedPerson.name === "Delivered"
                            ? "2px solid #33189D"
                            : "",
            }}
          ></span>
        </Listbox.Button>
        <Listbox.Options className={Style.listbox_options}>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className={Style.listbox_option}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ButtomCustom;

