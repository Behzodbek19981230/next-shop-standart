import { useState, useEffect } from "react";
import Link from "next/link";

interface ScrollspyProps {
  items: string[];
  currentClassName: string;
  className?: string;
}

const CustomScrollspy: React.FC<ScrollspyProps> = ({
  items,
  currentClassName,
  className,
}) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = items.map((item) => {
        const element = document.getElementById(item);
        return {
          id: item,
          offsetTop: element ? element.offsetTop : 0,
        };
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const current = offsets.reduce((prev, curr) => {
        return scrollPosition >= curr.offsetTop ? curr : prev;
      });

      setActiveId(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className={activeId === item ? currentClassName : ""}>
          <Link href={`#${item}`} className="nav-link">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CustomScrollspy;
