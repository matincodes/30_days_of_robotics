import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import Logo from "../logo";
import { useRouter } from "next/router";

interface Props {}

function Signin(props: Props) {
  const {} = props;
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="flex p-4 flex-col md:flex-row md:gap-4 md:justify-center ">
      <Logo />
      <VStack as="form" action="">
        <h1 className="text-2xl font-medium">Welcome back</h1>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" />
        </FormControl>
        <p className="text-sm my-2">
          Don`t have an account?{" "}
          <span className="font-bold cursor-pointer" onClick={handleSignup}>
            Sign Up
          </span>{" "}
        </p>
        <Button type="submit" colorScheme="green" className="w-full">
          Login
        </Button>
      </VStack>
    </div>
  );
}

export default Signin;
