import { useColorModeValue } from "@chakra-ui/react";

const useContentBgColor = () => {
  return useColorModeValue("#f9f9f9", "#141414");
};

const useBnWColor = () => {
  return useColorModeValue("dark", "white");
};

const useWnBColor = () => {
  return useColorModeValue("white", "dark");
};

const usePrimaryAlphaColor = () => {
  return useColorModeValue("teal.100", "rgba(129, 230, 217, 0.16)");
};

const statusKaryawanColorScheme = {
  tetap: "purple",
  Tetap: "purple",
  kontrak: "green",
  Kontrak: "green",
  magang: "orange",
  Magang: "orange",
};

export {
  useContentBgColor,
  useBnWColor,
  usePrimaryAlphaColor,
  useWnBColor,
  statusKaryawanColorScheme,
};
