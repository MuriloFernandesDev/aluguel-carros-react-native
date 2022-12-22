import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import api from "../../service/api";
import { ICar } from "../../types";
import { Load } from "../../components/Load";

export function Home() {
  const [dataCars, setDataCars] = useState<Array<ICar>>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: ICar) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await api.get("/cars");
        setDataCars(data);
      } catch (error) {
        alert("Ocorreu um erro para buscar os carros cadastrados");
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          //erro na buceta da tipagem sem explicação
          data={dataCars}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
