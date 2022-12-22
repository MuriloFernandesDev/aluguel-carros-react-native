import React from "react";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from "./styles";

export function ScheduleDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleConfirmRental() {
    navigation.navigate("ScheduleComplete");
  }
  return (
    <Container>
      <Header>
        <BackButton color={"#E1E1E8"} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={"#E1E1E8"} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>11/07/2022</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={"#7A7A80"} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>21/07/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 3x diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title={"Alugar agora"}
          color={"#03B252"}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
