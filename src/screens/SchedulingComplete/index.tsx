import React from "react";
import { StatusBar } from "react-native";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Container, Content, Title, Message, Footer } from "./styles";

import { OkButton } from "../../components/OkButton";

export function ScheduleComplete() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleRentalDone() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      {/* <LogoSvg width={width} /> */}

      <Content>
        {/* <DoneSvg width={80} height={80} /> */}
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <OkButton title="OK" onPress={handleRentalDone} />
      </Footer>
    </Container>
  );
}
