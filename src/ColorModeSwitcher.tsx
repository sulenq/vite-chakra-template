import {
  Icon,
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";
import * as React from "react";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (
  props: any
) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color={useColorModeValue("dark", "white")}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={
        <Icon as={SwitchIcon} fontSize={props?.fontSize || 16} weight="bold" />
      }
      className="btn"
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
