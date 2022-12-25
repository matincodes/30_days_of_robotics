import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Select,
} from "@chakra-ui/react";
import Logo from "../logo";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const handleSignin = () => {
    router.push("/signin");
  };
  return (
    <div className="flex p-4 flex-col md:flex-row md:gap-4 md:justify-center ">
      <Logo />
      <VStack as="form" action="">
        <h1 className="text-2xl font-medium">Create Account</h1>
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Display name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Track</FormLabel>
          <Select defaultValue={"Select Item"}>
            <option value="programming">Programming</option>
            <option value={"CAD"}>Operator Interface (CAD)</option>
            <option value={"Electronics"}>Electronics and Wiring</option>
          </Select>
        </FormControl>
        <p className="text-sm my-2">
          Already have an account?{" "}
          <span className="font-bold cursor-pointer" onClick={handleSignin}>
            Sign in
          </span>{" "}
        </p>
        <Button type="submit" colorScheme="green" className="w-full">
          Sign Up
        </Button>
      </VStack>
    </div>
  );
}

export default Signup;
