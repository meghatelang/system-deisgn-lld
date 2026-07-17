import { Suspense, useMemo, useRef, useState } from "react";
import { MENU } from "../utils/constants.js";
import type { MenuItem } from "../types.js";

const Layout = () => {
  const [menu, setMenu] = useState(MENU[0]);

  const scrollRef = useRef(null);

  const menuOptions = useMemo(() => MENU, []);

  const menuHandler = (menu: MenuItem) => {
    setMenu(menu);
  };

  const ComponentToRender = menu?.component;

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen">
        {menuOptions.map((item, i) => (
          <li
            className={`p-2 cursor-pointer
            ${menu?.id === item.id ? "bg-blue-200" : "bg-gray-50 hover:bg-gray-200"}`}
            key={item.id}
            onClick={() => menuHandler(item)}
          >
            {item.title}
          </li>
        ))}
      </div>
      <div
        className="flex-1 h-screen overflow-y-auto bg-gray-100 p-4"
        ref={scrollRef}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender scrollRef={scrollRef} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
