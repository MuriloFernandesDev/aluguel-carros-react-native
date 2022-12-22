import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BorderlessButtonProps,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import theme from "../../styles/theme";

import { Container } from "./styles";
import { BackHandler } from "react-native";

interface Props {
  color?: string;
}

export function BackButton({ color }: Props) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleBack() {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate("Home");
  }

  return (
    <Container onPress={handleBack}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
