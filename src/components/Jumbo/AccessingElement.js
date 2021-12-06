import { useRef, useEffect } from 'react';
function AccessingElement() {
  const elementRef = useRef();
   useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);
  return (
    <div>
    <div>
      I'm an element
    </div>
    <input  ref={elementRef} type="text" placeholder="troep!"></input>
    <input  ref={elementRef} type="text" placeholder="troep!"></input>
    <input  ref={elementRef} type="text" placeholder="troep!"></input>
    </div>
  );
}
export default AccessingElement