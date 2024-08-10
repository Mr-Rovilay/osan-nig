import React, { useEffect, useRef, useState } from 'react';

interface InPageNavigationProps {
  routes: string[];
  children: React.ReactNode[];
  defaultActiveIndex?: number;
}

const InPageNavigation: React.FC<InPageNavigationProps> = ({ routes, children, defaultActiveIndex = 0 }) => {
  const activeTab = useRef<HTMLHRElement | null>(null);
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex);

  const changePageState = (btn: HTMLButtonElement, index: number) => {
    if (activeTab.current) {
      const { offsetWidth, offsetLeft } = btn;
      activeTab.current.style.width = `${offsetWidth}px`;
      activeTab.current.style.left = `${offsetLeft}px`;
    }
    setInPageNavIndex(index);
  };

  useEffect(() => {
    if (activeTabRef.current) {
      changePageState(activeTabRef.current, defaultActiveIndex);
    }
  }, [defaultActiveIndex]);

  return (
    <div>
      <div className="relative mb-8 px-4 border-b border-gray-300 flex flex-nowrap overflow-y-auto">
        {routes.map((route, i) => (
          <button
            ref={i === defaultActiveIndex ? activeTabRef : null}
            key={i}
            className={`p-4 px-5 capitalize ${inPageNavIndex === i ? 'text-black' : 'text-gray-500'}`}
            onClick={(e) => {
              const target = e.target as HTMLButtonElement;
              changePageState(target, i);
            }}
          >
            {route}
          </button>
        ))}
        <hr
          ref={activeTab}
          className="absolute bottom-0 duration-300 bg-custom-blue h-1"
        />
      </div>
      <div>
        {children[inPageNavIndex]}
      </div>
    </div>
  );
};

export default InPageNavigation;
