import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ScrollToTop = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((_location: any, action: string) => {
      if (action === "POP") {
        return; // Do not reset scroll position on back/forward navigation
      }
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default ScrollToTop;
