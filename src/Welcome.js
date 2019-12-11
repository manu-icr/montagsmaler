import React from 'react';

import TextBlock from "./TextBlock";
import text from "./text.json";
function Welcome()
{
  return (<TextBlock strings={[text.welcome]} />);
}


export default Welcome;