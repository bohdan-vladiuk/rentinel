import Image from 'next/image';

const logoIcon = '/assets/images/logo-icon.svg';

const LogoIcon = () => {
  return <Image src={logoIcon} alt="Mantis" width="129" height="129" />;
};

export default LogoIcon;
