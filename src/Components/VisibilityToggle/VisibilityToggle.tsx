import React, {Fragment} from 'react';

type VisibilityToggleProps = {
  children: any;
  visible: boolean;
};

function VisibilityToggle({visible, children}: VisibilityToggleProps) {
  return visible ? children : <Fragment />;
}

export default VisibilityToggle;
