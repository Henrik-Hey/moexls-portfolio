import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import IDs from "../IDs";

interface PortalProps {
  children: any;
  onMount?: () => {};
}

const Portal = ({ children, onMount }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (onMount) onMount();
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector(`#${IDs.Portal}`))
    : null;
};

export default Portal;
