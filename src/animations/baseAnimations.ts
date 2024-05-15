export const BaseAnimation = {
  hidden: {
    opacity: 0,
    y: 260,
    transition: {
      default: {
        duration: 1,
        ease: "easeIn",
      },
      //   scale: {
      //     //type: "spring",
      //     //damping: 5,
      //     //stiffness: 300,
      //     //restDelta: 0.001,
      //   },
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      default: {
        duration: 1,
        ease: "easeIn",
      },
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};
