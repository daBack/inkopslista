import React from 'react';
import { ComponentButtonIcon } from 'components';
import ButtonIconTypesEnum from 'components/component-button-icon/ButtonIconTypesEnum';

const RouterHome = (): JSX.Element => {
  return (
    <div>
      <ComponentButtonIcon icon={ButtonIconTypesEnum.plus}/>
    </div>
  )
}

export default RouterHome;