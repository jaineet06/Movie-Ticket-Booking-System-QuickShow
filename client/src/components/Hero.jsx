import React from "react";
import { assets } from "../assets/assets";
import {
  ArrowRight,
  Calendar1Icon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { delay, motion } from "motion/react";

const Hero = () => {
  const nav = useNavigate();

  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("assets/backgroundImage.png")]
    bg-cover bg-center h-screen'
    >
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={assets.marvelLogo}
        className="max-h-11 lg:h-11 mt-20"
        alt=""
      />
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110"
      >
        Guardians <br /> of the Galaxy
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-4 text-gray-300"
      >
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 8m
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-md text-gray-300"
      >
        In a post-apocalyptic world where cities ride on wheels and consume each
        other to survive, two people meet in London and try to stop a
        conspiracy.
      </motion.p>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        onClick={() => nav("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull rounded-full font-medium cursor-pointerointer"
      >
        Explore More <ArrowRight className="w-5 h-5" />{" "}
      </motion.button>
    </div>
  );
};

export default Hero;
