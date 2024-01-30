import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { API_BASE_URL, FLOORS, GENDER, TOILET_STYLE } from "@/const";
import axios from "axios";
import { CircularProgress, Tab, Tabs } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

type Toile = {
  floor: number;
  gender: number;
  toiletStyle: number;
  state: Boolean;
};

export default function Home() {
  const [filterOption, setFilterOption] = useState<{
    floor: number;
    gender: number;
  }>({ floor: 2, gender: GENDER.MALE });
  const [json, setJson] = useState<Toile[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    const gender: String | null = localStorage.getItem("gender");
    if (gender) {
      setFilterOption({ ...filterOption, gender: Number(gender) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("gender", String(filterOption.gender));
    fetchJson(filterOption);
  }, [filterOption]);
  const fetchJson = async ({
    gender,
    floor,
  }: {
    gender: number;
    floor: number;
  }) => {
    setIsLoading(true);
    const json: Toile[] = await axios
      .get(`${API_BASE_URL}/?gender=${gender}&floor=${floor}`)
      .then((res) => {
        return res.data;
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log("err: ", err));
    setJson(json || []);
  };
  return (
    <SWrap>
      <SContainer>
        <SRow>
          <Tabs
            value={filterOption.gender}
            onChange={(event: React.SyntheticEvent, value: number) => {
              setFilterOption({ ...filterOption, gender: value });
            }}
            aria-label="icon label tabs example"
          >
            <Tab icon={<ManIcon />} label="男性用トイレ" />
            <Tab icon={<WomanIcon />} label="女性用トイレ" />
          </Tabs>
        </SRow>
        {/* {isLoading && <CircularProgress />} */}
        <SColumn>
          <SFloors>
            {FLOORS.map(
              ({ value, text }: { value: number; text: string }, index) => (
                <SFloor
                  selected={value === filterOption.floor}
                  key={index}
                  onClick={() => {
                    setFilterOption((prev) => {
                      return { ...prev, floor: value };
                    });
                  }}
                >
                  {text}
                </SFloor>
              )
            )}
          </SFloors>
          <SToileRooms>
            {json.map((x, index) => (
              <SToiletRoom state={x.state} key={index}>
                <span>
                  {x.toiletStyle === TOILET_STYLE.JAPANESE ? "和式" : "洋式"}
                </span>
              </SToiletRoom>
            ))}
          </SToileRooms>
        </SColumn>
      </SContainer>
    </SWrap>
  );
}

const SWrap = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 3rem;

  &::before {
    content: "";
    animation-name: animation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    width: 100%;
    height: 100dvh;
    background-image: url("../../background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @keyframes animation {
    0% {
      filter: blur(5px);
    }

    50% {
      filter: blur(12px);
    }

    100% {
      filter: blur(5px);
    }
  }
`;

const SContainer = styled.div`
  width: 90%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
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
  background-color: ${({ selected }) => (selected ? "#AFD5C6" : "white")};
  padding: 1rem 2rem;
  border: 1px solid #afd5c6;
  cursor: pointer;
`;

const SToileRooms = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

const SToiletRoom = styled.div<{ state: Boolean }>`
  border: 1px solid #afd5c6;
  padding: 0.7rem;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ state }) => (state ? "white" : "black")};
  background-color: ${({ state }) => (state ? "#AFD5C6" : "white")};

  > span {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
