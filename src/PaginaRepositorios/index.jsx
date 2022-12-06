import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../Services";

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  ContainerRepositorios,
  NumberContainer,
} from "./styles";

import Container from "../Components/Container";
import Usuario from "../Components/Usuario";
import FotoUsuario from "../Components/FotoUsuario";
import DetalhesUsuario from "../Components/DetalhesUsuario";

export default function PaginaRepositorios() {
  const [searchValue, setSearchValue] = useState("");
  const [dados, setDados] = useState([]);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    api.get(`/${searchValue}`).then(
      (response) => {
        console.log(response.data);
        setDados(response.data);
      },
      (error) => {
        console.log(error);
      }
    );

  return (
    <Container>
      <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
          <HeaderInput
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Link to={`/?username=${searchValue}`}>
            <FiSearch size={15} />
          </Link>
        </HeaderInputContainer>
      </HeaderSection>
      {searchValue && (
        <Usuario>
          <FotoUsuario url={dados.avatar_url} />
          <DetalhesUsuario
            name={dados.login}
            username={dados.login}
            bio={dados.bio}
          />
          <ContainerRepositorios>
            <NumberContainer>
              <h1>{dados.public_repos}</h1>
              <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer>
              <h1>{dados.followers}</h1>
              <h2>Seguidores</h2>
            </NumberContainer>

            <NumberContainer>
              <h1>{dados.following}</h1>
              <h2>Seguindo</h2>
            </NumberContainer>
          </ContainerRepositorios>
        </Usuario>
      )}
    </Container>
  );
}
