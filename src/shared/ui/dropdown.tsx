import { FC, Fragment, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import dropdownIcon from "../../../public/icons/dropdown.svg";

import { rentDays } from "../data/rentDays";

const Dropdown: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState("На сколько дней арендуете?");
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectDay = (day: string) => {
    setSelectDay(day);
    setOpen(false);
  };

  return (
    <Fragment>
      <DropdownContainer onClick={handleClick} role="button">
        <DropdownText>{selectDay}</DropdownText>
        <img
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
          src={dropdownIcon}
          alt="dropdown image"
          loading="lazy"
        />
      </DropdownContainer>
      {open && (
        <PopupDropdown role="menu" ref={dropdownRef}>
          {rentDays.map((day) => (
            <PopupDropdownText
              key={day.id}
              role="menuitem"
              onClick={() => handleSelectDay(day.text)}
            >
              {day.text}
            </PopupDropdownText>
          ))}
        </PopupDropdown>
      )}
    </Fragment>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  width: 94%;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  cursor: pointer;
  position: relative;
  margin-top: 16px;
  margin-bottom: 15px;
`;

const DropdownText = styled.span`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #041a3f;
`;

const PopupDropdown = styled.ul`
  width: 86%;
  padding: 20px 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  list-style-type: none;
  position: absolute;
  z-index: 1;
`;

const PopupDropdownText = styled.li`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #041a3f;
  cursor: pointer;
`;
