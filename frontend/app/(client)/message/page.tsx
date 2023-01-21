import React from "react";
import ClientSideRoute from "../../../components/ClientSideRoute";

type message = {
  id: string | number;
  title: string;
  description: string;
  type: "task" | "grade";
};

const getMessages = async (): Promise<message[] | null> => {
  const messages: message[] = [
    {
      id: 1,
      title: "TASK GRADING",
      description: "You are to grade the task of litmus",
      type: "task",
    },
    {
      id: 2,
      title: "GRADED TASK",
      description: "Your task has been graded!!!",
      type: "grade",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 2000);
  });
};

export default async function message() {
  const messages = await getMessages();
  return (
    <div className="py-4 lg:py-8 px-3 lg:px-5">
      <h2 className="font-semibold text-2xl text-[#AEAEAE] mb-3">Messages</h2>
      {!messages || messages.length === 0 ? (
        <p
          className={`${
            messages ? "text-teal" : "text-[#DC2B12]"
          } text-2xl font-medium px-3 lg:px-5`}
        >
          {!messages
            ? "Not available"
            : "All your messages and pending submission will be listed here"}
        </p>
      ) : (
        <div className="grid gap-3">
          {messages.map((message) => (
            <ListItem message={message} key={message.id} />
          ))}
        </div>
      )}
    </div>
  );
}

const ListItem = ({ message }: { message: message }) => {
  return (
    <ClientSideRoute route={`/message/${message.id}`}>
      <div
        className={`p-[10px] pl-4 lg:p-4 flex items-center rounded-lg gap-4 border-b-2 ${
          message.type === "task"
            ? "border-[#BFD059] bg-[#FAFEE7]"
            : "border-[#55CDB7] bg-[#EEFDFA]"
        }`}
      >
        <div
          className={`grow ${
            message.type === "task" ? "text-[#BFD059]" : "text-[#55CDB7]"
          }`}
        >
          <p className="font-semibold text-xl leading-5 lg:text-2xl lg:leading-6 mb-4">
            {message.title}
          </p>
          <p className="font-light text-xl leading-5 lg:text-2xl lg:leading-6">
            {message.description}
          </p>
        </div>
      </div>
    </ClientSideRoute>
  );
};
