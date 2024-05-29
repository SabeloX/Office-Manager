'use client'

import { Office } from "@/interfaces";
import { offices as officesData } from '../data/offices';

import { useEffect, useState } from "react";
import { LandingPage } from "@/pages/landing-page/LandingPage";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookies] = useCookies<'offices', { offices: Office[] }>(['offices']);

  useEffect(() => {
    if(!cookies.offices){
      setCookies('offices', officesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LandingPage offices={cookies.offices ?? []}/>
  );
}

export default Home;