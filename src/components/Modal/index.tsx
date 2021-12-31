import Form from '../Form';
import { Tag, Title, Icon, Info, Type, Description } from './styles';

const Modal: React.VFC = () => (
  <Tag>
    <Title>
      <Icon>
        <use xlinkHref="#buy-a-house" />
      </Icon>
      <Info>
        <Type>Buy a house</Type>
        <Description>Saving goal</Description>
      </Info>
    </Title>
    <Form />
  </Tag>
);

export default Modal;
