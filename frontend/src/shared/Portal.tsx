import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import IDs from "../IDs";

interface PortalProps {
  children: any;
  onMount?: () => void;
}

const Portal = ({ children, onMount }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (onMount && mounted) onMount();
  }, [mounted]);

  return mounted
    ? createPortal(children, document.querySelector(`#${IDs.Portal}`))
    : null;
};

export default Portal;
