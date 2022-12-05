import {
  Container,
  ProfilePicture
} from './styles';

const FotoUsuario = props => (
  <Container>
      <ProfilePicture src={props.url} alt="foto usuário" />
  </Container>
);

export default FotoUsuario;