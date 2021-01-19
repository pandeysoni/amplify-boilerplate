import React from 'react';
import {InputGroup} from "@blueprintjs/core";

const EMPTY_FUNC = () => {
};
const InputElement = ({
                        label,
                        onChange = EMPTY_FUNC,
                        onBlur = EMPTY_FUNC,
                        type = 'text',
                        ...rest
                      }) => {
  const props = {
    ...rest,
    onChange,
    onBlur,
    type
  };
  return (<div>
    <div>{label}</div>
    <div>
      <InputGroup {...props}/>
    </div>
  </div>);
};
export default InputElement;
