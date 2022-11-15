import Image from 'next/image';

const logo = '/assets/images/logo.svg';

const LogoIcon = () => {
  return <Image src={logo} alt="Rentinel" width="150" height="26" />;
};

export default LogoIcon;
