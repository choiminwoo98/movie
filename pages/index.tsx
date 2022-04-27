import type { NextPage } from "next";
import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movie from "./component/movie";

const Home: NextPage = () => {
  return <Movie />;
};
export default Home;
