'use client';
import styles from './header.module.scss'

import Navmenu from "@/app/components/ui/header/navmenu/navmenu";
import Logo from "@/app/components/ui/header/logo/logo";

const Header = () => {


  return (
    <header className={styles.header}>
      <Logo/>
      <Navmenu/>
    </header>
  );
};

export default Header;