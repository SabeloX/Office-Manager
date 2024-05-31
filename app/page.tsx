'use client'

import { Office } from "@/interfaces";
import { offices as officesData } from '../data/offices';

import { useEffect, useState } from "react";
import { LandingPage } from "@/pages/landing-page/LandingPage";
import { useCookies } from "react-cookie";
import { AppProvider } from "@/components/app-provider/AppProvider";

const Home = () => (
  <LandingPage />
);

export default Home;