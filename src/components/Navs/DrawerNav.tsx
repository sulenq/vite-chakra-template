import {
  Box,
  Button,
  Link as ChakraLink,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useWnBColor } from "../../constant/colors";
import navs from "../../constant/navs";
import sosmeds from "../../constant/sosmeds";
import useBackOnClose from "../../hooks/useBackOnClose";
import formatDate from "../../lib/formatDate";
import { getLang } from "../../lib/lang";
import LangSwitcher from "../LangSwitcher";

interface Props extends IconButtonProps {}

export default function DrawerNav({ ...props }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  function handleOnClose() {
    onClose();
    window.history.back();
  }
  const [closing, setClosing] = useState(false);
  const lang = getLang();
  const currentDate = new Date();
  const handleClose = () => {
    setClosing(true);
  };

  useGSAP(
    () => {
      if (closing) {
        gsap.to(".initDrawerContent", {
          y: -100,
          opacity: 0,
          duration: 0.2,
          stagger: {
            each: 0.03,
          },
          onComplete: () => {
            setClosing(false);
            handleOnClose();
          },
        });
      }
    },
    { dependencies: [closing] }
  );

  useGSAP(
    () => {
      if (!closing) {
        gsap.from(".initDrawerContent", {
          y: -100,
          opacity: 0,
          duration: 0.2,
          stagger: {
            each: 0.03,
          },
        });
      }
    },
    { scope: "#MenuNav", dependencies: [isOpen] }
  );

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0";
    }
  }, [isOpen]);

  // SX
  const color = useColorModeValue("black", "white");

  return (
    <>
      <IconButton
        icon={<Icon as={RiMenuLine} fontSize={20} />}
        zIndex={99}
        onClick={onOpen}
        w={"40px !important"}
        h={"40px !important"}
        className="btn sm-clicky"
        {...props}
      />

      {isOpen && (
        <VStack
          id="MenuNav"
          w={"100vw"}
          h={"100vh"}
          align={"stretch"}
          bg={useWnBColor()}
          position={"fixed"}
          left={0}
          top={0}
          zIndex={99}
          color={color}
          // onClick={handleClose}
        >
          <VStack flex={1} overflowY={"auto"}>
            <VStack
              justify={"center"}
              // minH={"100vh"}
              w={"100%"}
              maxW={"500px"}
              mx={"auto"}
              my={"auto"}
              py={6}
              px={8}
              align={"stretch"}
              gap={3}
              // mb={"50px"}
            >
              <VStack
                className="initDrawerContent"
                justify={"space-between"}
                mb={4}
              >
                <Text fontSize={16}>
                  {formatDate(
                    currentDate.toString(),
                    lang === "id" ? "id-ID" : "en-EN"
                  )}
                </Text>
              </VStack>

              <HStack
                color={"p.500"}
                justify={"space-between"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                <HStack
                  w={"100%"}
                  className="initDrawerContent"
                  justify={"space-between"}
                  gap={3}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ColorModeSwitcher
                    w={"100%"}
                    h={"50px"}
                    fontSize={20}
                    className="btn-solid"
                    ml={"auto"}
                  />

                  <LangSwitcher
                    ml={"auto"}
                    w={"100%"}
                    h={"50px"}
                    fontSize={17}
                    className="btn-solid"
                  />
                </HStack>

                <Box className="initDrawerContent">
                  <IconButton
                    aria-label="close drawer button"
                    icon={<Icon as={RiCloseLine} fontSize={24} />}
                    color={"s.500"}
                    className="btn-solid sm-clicky"
                    bg={"var(--divider)"}
                    onClick={handleClose}
                    w={"50px"}
                    h={"50px"}
                  />
                </Box>
              </HStack>

              <VStack
                justify={"center"}
                align={"stretch"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                {navs[lang].map((nav, i) => (
                  <Box className="initDrawerContent" key={i}>
                    <HStack
                      as={Link}
                      p={4}
                      px={6}
                      pl={7}
                      borderRadius={8}
                      bg={"var(--divider)"}
                      to={nav.link}
                      justify={"space-between"}
                      _hover={{ bg: "var(--divider2)" }}
                      transition={"200ms"}
                    >
                      <Text
                        fontSize={24}
                        fontWeight={600}
                        transition={"200ms"}
                        textAlign={"left"}
                        wordBreak={"break-word"}
                      >
                        {nav.name}
                      </Text>

                      <Icon as={RiArrowRightUpLine} fontSize={28} />
                    </HStack>
                  </Box>
                ))}
              </VStack>

              <HStack
                className="initDrawerContent"
                justify={"space-between"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                {sosmeds.map((sosmed, i) => (
                  <IconButton
                    w={"100%"}
                    h={"50px"}
                    key={i}
                    aria-label={`${sosmed.name} link`}
                    icon={<Icon as={sosmed.icon} fontSize={24} />}
                    className="btn-solid"
                    as={ChakraLink}
                    href={sosmed.link}
                    isExternal
                  />
                ))}
              </HStack>

              <Box className="initDrawerContent">
                <Button
                  w={"100%"}
                  h={"50px"}
                  px={6}
                  className="btn-ap clicky"
                  as={Link}
                  to={"/contact"}
                  fontSize={"18px !important"}
                >
                  {lang === "id" ? "Hubungi Kami" : "Contact Us"}
                </Button>
              </Box>

              <Text
                mt={5}
                textAlign={"center"}
                opacity={0.5}
                className="initDrawerContent"
              >
                2023 © Distro Studio. All right reserved.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      )}
    </>
  );
}
