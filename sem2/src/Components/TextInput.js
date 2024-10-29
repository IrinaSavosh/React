import { useState, useEffect } from "react";

function TextInput() {
	const [txt, setTxt] = useState();

   const getTxt = ({target}) => {
      setTxt(target.value);

   };
   return(
      <div>
         <input type="text" value={txt} onChange={getTxt} maxLength="10"/>
         <p>Вы ввели: {txt}</p>
      </div>
   );
}

export default TextInput;