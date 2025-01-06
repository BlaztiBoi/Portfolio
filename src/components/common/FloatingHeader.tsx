import {
  Book,
  Heart,
  Home,
  Images,
  Lightbulb,
  User,
} from "lucide-react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import { useState } from "react";

const links = [
  {
    text: "Home",
    id: "home",
    link: "/",
    icon: <Home className="w-6 h-6 text-zinc-800" />,
  },
  {
    text: "Login",
    id: "login",
    link: "/login",
    icon: <User className="w-6 h-6 text-zinc-800" />,
  },
  {
    text: "BlackJack",
    id: "BlackJack",
    link: "/blackjack",
    icon: <Lightbulb className="w-6 h-6 text-zinc-800" />,
  },
];

export default function FloatingHeader() {
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");
  const [hoverObject, setHoverObject] = useState("");
  const [open, setOpen] = useState(false);

  const handleDragEnd = (_, info) => {
    const { x, y } = info.point;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (x < screenWidth * 0.2 || x > screenWidth * 0.8) {
      setLayout("vertical");
    } else if (y < screenHeight * 0.2 || y > screenHeight * 0.8) {
      setLayout("horizontal");
    } else {
      setLayout("vertical");
    }
  };

  const handleNavToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.div
      className={`fixed m-4 left-0 transform -translate-x-1/2 bg-emerald-200 bg-opacity-10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg flex ${
        layout === "vertical" ? "flex-col" : "flex-row"
      } items-center justify-between gap-2`}
      style={{ zIndex: 50 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 100,
        bottom: window.innerHeight - 100,
      }}
      dragElastic={0.6}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
    >
      {/**mobile nav toggle */}
      <motion.div
        onClick={handleNavToggle}
        className="p-2 rounded-full hover:shadow lg:md:hidden"
        animate={{ rotate: open ? 0 : 360 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          className={`w-6 h-6 text-zinc-800`}
        />
      </motion.div>

      <AnimatePresence className="lg:md:hidden">
        {open && (
          <motion.div
            initial={{ width: 0, height:0 , opacity: 0 }}
            animate={{ width: "auto", height:"auto", opacity: 1 }}
            exit={{ width: 0,  height:0 ,opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={` flex ${
              layout === "vertical" ? "flex-col" : "flex-row"
            } items-center justify-between gap-6`}
          >
            {links.map((page) => (
              <motion.a
                key={page.id}
                href={page.link}
                className="flex items-center gap-2 relative outline-none"
                onHoverStart={() => setHoverObject(page.id)}
                onHoverEnd={() => setHoverObject("")}
              >
                <motion.div
                  animate={{
                    scale: hoverObject === page.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full hover:shadow"
                >
                  {page.icon}
                </motion.div>
                <motion.span
                  initial={{
                    opacity: 0,
                    x: layout === "vertical" ? -10 : 0,
                    y: layout === "vertical" ? -0 : 50,
                  }}
                  animate={{
                    opacity: hoverObject === page.id ? 1 : 0,
                    x:
                      hoverObject === page.id && layout === "vertical"
                        ? 50
                        : hoverObject === page.id && layout === "horizontal"
                        ? 10
                        : 0,
                    y:
                      hoverObject === page.id && layout === "vertical"
                        ? -20
                        : hoverObject === page.id && layout === "horizontal"
                        ? 0
                        : -20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 w-auto -translate-y-1/2 text-sm bg-white rounded-lg shadow px-4 py-1 text-gray-700 whitespace-nowrap"
                >
                  {page.text}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      <motion.div
            initial={{ width: 0, height:0 , opacity: 0 }}
            animate={{ width: "auto", height:"auto", opacity: 1 }}
            exit={{ width: 0,  height:0 ,opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={` hidden lg:md:flex ${
              layout === "vertical" ? "flex-col" : "flex-row"
            } items-center justify-between gap-6`}
          >
            {links.map((page) => (
              <motion.a
                key={page.id}
                href={page.link}
                className="flex items-center gap-2 relative outline-none"
                onHoverStart={() => setHoverObject(page.id)}
                onHoverEnd={() => setHoverObject("")}
              >
                <motion.div
                  animate={{
                    scale: hoverObject === page.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full hover:shadow"
                >
                  {page.icon}
                </motion.div>
                <motion.span
                  initial={{
                    opacity: 0,
                    x: layout === "vertical" ? -10 : 0,
                    y: layout === "vertical" ? -0 : 50,
                  }}
                  animate={{
                    opacity: hoverObject === page.id ? 1 : 0,
                    x:
                      hoverObject === page.id && layout === "vertical"
                        ? 50
                        : hoverObject === page.id && layout === "horizontal"
                        ? 10
                        : 0,
                    y:
                      hoverObject === page.id && layout === "vertical"
                        ? -20
                        : hoverObject === page.id && layout === "horizontal"
                        ? 0
                        : -20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 w-auto -translate-y-1/2 text-sm bg-white rounded-lg shadow px-4 py-1 text-gray-700 whitespace-nowrap"
                >
                  {page.text}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
    </motion.div>
  );
}

