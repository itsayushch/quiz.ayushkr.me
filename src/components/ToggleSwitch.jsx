import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from '../theme/Provider';


const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  return (
    <Switch
      checked={mode === 'light' ? false : true}
      height={30}
      width={60}
      offColor='#4d4d4d'
      onColor='#4d4d4d'
      checkedIcon={
        <span role='img' aria-label='' style={{ fontSize: 19 }}>
          &nbsp;🌜
        </span>
      }
      uncheckedIcon={
        <span role='img' aria-label='' style={{ fontSize: 19 }}>
          &nbsp;🌞
        </span>
      }
      onChange={setTheme}
    />
  );
};

export default ThemeSwitch;
