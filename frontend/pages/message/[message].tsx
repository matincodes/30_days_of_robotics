import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const GradeMessage = () => {
  const route = useRouter();

  type input = {
    grade: string;
    comment: string;
  };

  const [score, setScore] = useState<input>({
    grade: "",
    comment: "",
  });

  const handleChange = (event: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = event.target;
    setScore((prevScore) => {
      return {
        ...prevScore,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleClick = () => {
    if (!score.grade) {
      return "";
    } else {
      return route.push("/message/graded-task");
    }
  };

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Message</title>
      </Head>
      <Layout>
        {route.query.message === "task-grading" && (
          <div className="p-[4%]">
            <h2 className="text-4xl font-semibold text-[#AEAEAE] mb-4">
              Message <span className="text-[#0A0A0A]">{">"} Task Grading</span>
            </h2>
            <h1 className="text-[#2CE2C2] text-4xl font-semibold">
              Grade the submission below
            </h1>
            <p className="text-[#969696] font-light text-xl">
              Get the link to the submission below. Then proceed to the rubric
              grading.
            </p>
            <div className="flex cursor-pointer mb-10">
              <Image
                src="/assets/Vector.svg"
                width={30}
                height={15}
                className="object-contain"
                alt="Submit link"
              />
              <p className="text-[#2CE2C2] font-medium text-base md:text-xl ml-3">
                thesubmission/googledrive.com
              </p>
            </div>
            <p className="text-[#0A0A0A] font-medium text-xl mb-3">
              Grade here
            </p>
            <div>
              <div className="flex items-center mb-2 relative">
                <input
                  type="radio"
                  id="excellent"
                  name="grade"
                  value="excellent"
                  checked={score.grade === "excellent"}
                  onChange={handleChange}
                  className="peer w-5 h-5"
                />
                <label className="ml-2" htmlFor="excellent">
                  Excellent
                </label>
                <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
                  <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
                </div>
              </div>
              <div className="flex items-center mb-2 relative">
                <input
                  type="radio"
                  id="good"
                  name="grade"
                  value="good"
                  checked={score.grade === "good"}
                  onChange={handleChange}
                  className="peer w-5 h-5"
                />
                <label className="ml-2" htmlFor="good">
                  Good
                </label>
                <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
                  <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
                </div>
              </div>
              <div className="flex items-center mb-2 relative">
                <input
                  type="radio"
                  id="fair"
                  name="grade"
                  value="fair"
                  checked={score.grade === "fair"}
                  onChange={handleChange}
                  className="peer w-5 h-5"
                />
                <label className="ml-2" htmlFor="fair">
                  Fair
                </label>
                <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
                  <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
                </div>
              </div>
              <div className="flex items-center mb-2 relative">
                <input
                  type="radio"
                  id="poor"
                  name="grade"
                  value="poor"
                  checked={score.grade === "poor"}
                  onChange={handleChange}
                  className="peer w-5 h-5"
                />
                <label className="ml-2" htmlFor="poor">
                  Poor
                </label>
                <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
                  <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Drop a comment"
                onChange={handleChange}
                value={score.comment}
                name="comment"
                className="outline-none border-[1px] border-black w-[60%] md:w-[40%] h-[50px] rounded-lg indent-2"
              />
              <button
                onClick={handleClick}
                className="uppercase w-[30%] md:w-[213px] h-[50px] bg-[#2CE2C2] ml-2 text-white rounded-lg"
              >
                Grade
              </button>
            </div>
          </div>
        )}
        {route.query.message === "graded-task" && (
          <div className="p-[4%]">
            <h2 className="text-4xl font-semibold text-[#AEAEAE] mb-4">
              Message <span className="text-[#0A0A0A]">{">"} Graded Task</span>
            </h2>
            <h1 className="text-[#2CE2C2] text-4xl font-semibold">
              {"DAY 1"}: Robotic arm Configuration
            </h1>
            <p className="text-[#969696] font-light mb-3">
              Task Grade:{" "}
              <span className="text-xl font-medium uppercase">{score.grade}</span>
            </p>
            <p className="p-[2%] w-full h-fit bg-[#EEFDFA] text-[#2CE2C2] rounded-lg border-[1px] border-[#2CE2C2]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc urna
              adipiscing sit laoreet. Cursus bibendum sagittis bibendum tortor
              cursus aenean condimentum nulla. Viverra imperdiet est et
              consequat augue commodo tempor. At nibh sit magna diam. Ipsum
              pellentesque euismod diam rhoncus sagittis facilisis eget.
              Pulvinar id amet quam est faucibus enim quis a aliquet. Pharetra
              quis proin vel convallis amet blandit maecenas morbi. Consequat
              rhoncus ipsum cursus urna proin arcu. Placerat neque egestas
              tempus pulvinar tristique.
            </p>
            {(score.grade === "excellent" && (
              <Image
                src="/assets/excellent.svg"
                width={250}
                height={250}
                className="object-contain"
                alt="Grade"
              />
            )) ||
              (score.grade === "good" && (
                <Image
                  src="/assets/good.svg"
                  width={250}
                  height={250}
                  className="object-contain"
                  alt="Grade"
                />
              )) ||
              (score.grade === "fair" && (
                <Image
                  src="/assets/fair.svg"
                  width={250}
                  height={250}
                  className="object-contain"
                  alt="Grade"
                />
              )) ||
              (score.grade === "poor" && (
                <Image
                  src="/assets/poor.svg"
                  width={250}
                  height={250}
                  className="object-contain"
                  alt="Grade"
                />
              ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default GradeMessage;
