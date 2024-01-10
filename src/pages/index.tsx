import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { FLOORS, GENDER, JSON, RADIO_DATA, TOILET_STYLE } from "@/const";

export default function Home() {
  const [filterOption, setFilterOption] = useState<{
    floor: number;
    gender: number;
  }>({ floor: 2, gender: GENDER.MALE });
  const [filterData, setFilterData] = useState<
    {
      floor: number;
      gender: number;
      id: number;
      toiletStyle: number;
      state: Boolean;
    }[]
  >([]);

  useEffect(() => {
    console.log("switch");
    const filterData = JSON.filter(
      (x) => x.floor === filterOption.floor && x.gender === filterOption.gender
    );
    setFilterData(filterData);
    console.log(filterData);
  }, [filterOption]);
  return (
    <SContainer>
      <SRow>
        <SRadio>
          {RADIO_DATA.map(({ text, id, value }) => (
            <div>
              <input
                type="radio"
                name="gender"
                id={id}
                value={value}
                checked={filterOption.gender === value}
                onChange={() =>
                  setFilterOption((prev) => {
                    return { ...prev, gender: value };
                  })
                }
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </SRadio>
      </SRow>

      <SColumn>
        <SFloors>
          {FLOORS.map(({ value, text }: { value: number; text: string }) => (
            <SFloor
              selected={value === filterOption.floor}
              onClick={() =>
                setFilterOption((prev) => {
                  return { ...prev, floor: value };
                })
              }
            >
              {text}
            </SFloor>
          ))}
        </SFloors>
        <SToileRooms>
          {filterData.map((x) => (
            <SToiletRoom state={x.state}>
              <span>
                {x.toiletStyle === TOILET_STYLE.JAPANESE ? "和式" : "洋式"}
              </span>
            </SToiletRoom>
          ))}
        </SToileRooms>
      </SColumn>
    </SContainer>
  );
}

const SContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const SRadio = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 0.3rem;
  }
`;

const SRow = styled.div`
  display: flex;
  justify-content: center;
`;

const SColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 2.5rem;
`;

const SFloors = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const SFloor = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "white" : "black")};
  background-color: ${({ selected }) => (selected ? "gray" : "white")};
  padding: 1rem 2rem;
  border: 1px solid gray;
  cursor: pointer;
`;

const SToileRooms = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

const SToiletRoom = styled.div<{ state: Boolean }>`
  border: 1px solid black;
  padding: 0.7rem;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ state }) => (state ? "white" : "black")};
  background-color: ${({ state }) => (state ? "gray" : "white")};

  > span {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
