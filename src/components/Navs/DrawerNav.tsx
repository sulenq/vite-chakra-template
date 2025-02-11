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
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useWnBColor } from "../../constant/colors";
import navs from "../../constant/navs";
import sosmeds from "../../constant/sosmeds";
import useBackOnClose from "../../hooks/useBackOnCloseOld";
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
  const menuContainerRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const lang = getLang();
  const currentDate = new Date();
  const handleClose = () => {
    setClosing(true);
  };

  // GSAP Animations
  useGSAP(
    () => {
      if (closing) {
        setTimeout(() => {
          const elements = document.querySelectorAll(".initDrawerContent");
          if (elements.length > 0) {
            gsap.to(elements, {
              y: -100,
              opacity: 0,
              duration: 0.2,
              stagger: {
                each: 0.03,
              },
              onComplete: () => {
                setClosing(false);
                handleOnClose();
                window.history.back();
              },
            });
          }
        }, 0); // Small delay to ensure elements are rendered
      }
    },
    { dependencies: [closing] }
  );

  useGSAP(
    () => {
      if (!closing && isOpen) {
        setTimeout(() => {
          const elements = document.querySelectorAll(".initDrawerContent");
          if (elements.length > 0) {
            gsap.from(elements, {
              y: -100,
              opacity: 0,
              duration: 0.2,
              stagger: {
                each: 0.03,
              },
            });
          }
        }, 0); // Small delay to ensure elements are rendered
      }
    },
    { dependencies: [isOpen] }
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
  const bg = useWnBColor();

  return (
    <>
      <IconButton
        icon={<Icon as={List} fontSize={18} weight="bold" />}
        zIndex={99}
        onClick={onOpen}
        w={"40px !important"}
        h={"40px !important"}
        className="btn sm-clicky"
        {...props}
      />

      {isOpen && (
        <VStack
          ref={menuContainerRef}
          id="MenuNav"
          w={"100vw"}
          h={"100vh"}
          align={"stretch"}
          bg={bg}
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
                    className="btn-solid"
                    fontSize={"18px !important"}
                  />
                </HStack>

                <Box className="initDrawerContent">
                  <IconButton
                    aria-label="close drawer button"
                    icon={<Icon as={X} fontSize={22} />}
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
                {navs.map((nav, i) => (
                  <Box className="initDrawerContent" key={i}>
                    <HStack
                      as={Link}
                      p={4}
                      px={6}
                      pl={7}
                      borderRadius={"full"}
                      to={nav.link}
                      justify={"space-between"}
                      className="btn-solid"
                      transition={"200ms"}
                    >
                      <Text
                        fontSize={24}
                        transition={"200ms"}
                        textAlign={"left"}
                        wordBreak={"break-word"}
                      >
                        {nav.label[lang]}
                      </Text>

                      <Icon as={ArrowUpRight} fontSize={28} />
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
                  colorScheme="ap"
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
                {new Date().getFullYear()} © Your Company. All right reserved.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      )}
    </>
  );
}
