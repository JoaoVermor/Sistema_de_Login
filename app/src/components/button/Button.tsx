import React from "react";
import * as C from "./ButtonStyled";
type props = {
  Text: string;
  onPress: any;
};
export function Button({ Text, onPress }: props) {
  return <C.Button onClick={onPress}>{Text}</C.Button>;
}
