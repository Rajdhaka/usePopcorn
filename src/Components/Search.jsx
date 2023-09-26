import { useKey } from "../CustomHooks/useKey";
import { useRef } from "react";
export default function Search({ query, setQuery }) {
  const inputEle = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEle.current) {
      return;
    }
    inputEle.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEle}
    />
  );
}
