import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import {
  CardBody,
  DirexNameBody,
  DirexNameDiv,
  DirexNameText,
  ImageDirexDiv,
  DirexImage,
} from "./DirexCardStyled";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DefaultAvatar from "../../assets/images/User-avatar.svg.png";

type props = {
  handleNavigaiton: any;
  direxName: string;
  image: string;
};

export function DirexCard({ handleNavigaiton, direxName, image }: props) {
  return (
    <CardBody onClick={handleNavigaiton}>
      <ImageDirexDiv>
        <DirexImage src={image} />
      </ImageDirexDiv>
      <DirexNameBody>
        <DirexNameDiv>
          <DirexNameText>{direxName}</DirexNameText>
        </DirexNameDiv>
      </DirexNameBody>
    </CardBody>
  );
}
