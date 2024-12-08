// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const productMenuItems = [
//   {
//     category: "Shoes",
//     items: ["Espadrilles", "Indoor Slippers", "Vulcanized Sneakers"],
//   },
//   {
//     category: "Bags",
//     items: ["Canvas Bags", "Jute Bags"],
//   },
//   {
//     category: "Baskets",
//     items: ["Jute Baskets", "Cotton Baskets"],
//   },
//   {
//     category: "Jute Accessories",
//     items: ["Jute Braids", "Jute Soles"],
//   },
// ];

// function MegaMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <Menu
//       open={isMenuOpen}
//       handler={setIsMenuOpen}
//       placement="bottom"
//       offset={{ mainAxis: 15 }}
//       allowHover
//     >
//       <MenuHandler>
//         <Typography as="div" variant="small" className="font-medium">
//           <ListItem
//             className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//             selected={isMenuOpen}
//           >
//             Products
//             <ChevronDownIcon
//               strokeWidth={2.5}
//               className={`h-3 w-3 transition-transform ${
//                 isMenuOpen ? "rotate-180" : ""
//               }`}
//             />
//           </ListItem>
//         </Typography>
//       </MenuHandler>
//       {/* Desktop Menu */}
//       <MenuList className="hidden max-w-screen-2xl rounded-xl bg-white lg:block shadow-lg mt-2">
//         <div className="grid grid-cols-4 gap-12 p-4 mt-2">
//           {productMenuItems.map((menu, index) => (
//             <div key={index} className="space-y-2">
//               <Typography
//                 as="a"
//                 href="#"
//                 variant="small"
//                 color="blue-gray"
//                 className="font-bold hover:text-blue-500 mb-4"
//               >
//                 {menu.category}
//               </Typography>
//               <ul className="space-y-1">
//                 {menu.items.map((item, idx) => (
//                   <li key={idx}>
//                     <Typography
//                       as="a"
//                       href="#"
//                       variant="small"
//                       color="blue-gray"
//                       className="hover:text-blue-400"
//                     >
//                       {item}
//                     </Typography>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </MenuList>
//       {/* Mobile Menu */}
//       <div className="block lg:hidden">
//         {isMenuOpen && (
//           <div className="bg-white p-4 shadow-lg">
//             <div className="grid grid-cols-2 gap-4">
//               {productMenuItems.map((menu, index) => (
//                 <div key={index} className="space-y-2">
//                   <Typography
//                     as="a"
//                     href="#"
//                     variant="small"
//                     color="blue-gray"
//                     className="font-bold hover:text-blue-500"
//                   >
//                     {menu.category}
//                   </Typography>
//                   <ul className="space-y-1">
//                     {menu.items.map((item, idx) => (
//                       <li key={idx}>
//                         <Typography
//                           as="a"
//                           href="#"
//                           variant="small"
//                           color="blue-gray"
//                           className="hover:text-blue-400"
//                         >
//                           {item}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </Menu>
//   );
// }

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
//       </Typography>
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
//       </Typography>
//       <MegaMenu />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           Contact
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }

// export function NavbarWithMegaMenu() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 960) {
//         setOpenNav(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <div className="hidden gap-2 lg:flex">
//           <Button variant="text" size="sm" color="blue-gray">
//             Log In
//           </Button>
//           <Button variant="gradient" size="sm">
//             Sign In
//           </Button>
//         </div>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//         <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
//           <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
//             Log In
//           </Button>
//           <Button variant="gradient" size="sm" fullWidth>
//             Sign In
//           </Button>
//         </div>
//       </Collapse>
//     </Navbar>
//   );
// }

// export const NavTwo = () => {
//   return (
//     <div>
//       <NavbarWithMegaMenu />
//     </div>
//   );
// };

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const productMenuItems = [
  {
    category: "Shoes",
    items: ["Espadrilles", "Indoor Slippers", "Vulcanized Sneakers"],
  },
  {
    category: "Bags",
    items: ["Canvas Bags", "Jute Bags"],
  },
  {
    category: "Baskets",
    items: ["Jute Baskets", "Cotton Baskets"],
  },
  {
    category: "Jute Accessories",
    items: ["Jute Braids", "Jute Soles"],
  },
];

function MegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to toggle menu

  // Toggle menu function for mobile
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Using prev state ensures correct toggling
  };

  return (
    <div>
      {/* Main Menu (Mobile + Desktop) */}
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        offset={{ mainAxis: 15 }}
        allowHover
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            {/* Products ListItem (both for mobile and desktop) */}
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen}
              onClick={handleMenuToggle} // Toggle menu on click
            >
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        {/* Desktop Menu */}
        <MenuList className="hidden max-w-screen-2xl rounded-xl bg-white lg:block shadow-lg mt-2">
          <div className="grid grid-cols-4 gap-12 p-4 mt-2">
            {productMenuItems.map((menu, index) => (
              <div key={index} className="space-y-2">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-bold hover:text-blue-500 mb-4"
                >
                  {menu.category}
                </Typography>
                <ul className="space-y-1">
                  {menu.items.map((item, idx) => (
                    <li key={idx}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="hover:text-blue-400"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </MenuList>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          {/* Toggle the menu visibility based on isMenuOpen */}
          {isMenuOpen && (
            <div className="bg-white p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {productMenuItems.map((menu, index) => (
                  <div key={index} className="space-y-2">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-bold hover:text-blue-500"
                    >
                      {menu.category}
                    </Typography>
                    <ul className="space-y-1">
                      {menu.items.map((item, idx) => (
                        <li key={idx}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="hover:text-blue-400"
                          >
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <MegaMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export const NavTwo = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
    </div>
  );
};
