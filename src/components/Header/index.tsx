import { Tag, Center, Logo } from './styles';

const Header: React.VFC = () => (
  <Tag>
    <Center>
      <Logo>
        <use xlinkHref="#logo" />
      </Logo>
    </Center>
  </Tag>
);

export default Header;
