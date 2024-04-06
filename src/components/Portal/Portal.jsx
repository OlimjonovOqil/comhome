import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(el.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.body.removeChild(el.current);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};
