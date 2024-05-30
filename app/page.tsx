'use client'

import { Office } from "@/interfaces";
import { offices as officesData } from '../data/offices';

import { useEffect, useState } from "react";
import { LandingPage } from "@/pages/landing-page/LandingPage";
import { useCookies } from "react-cookie";
import { AppProvider } from "@/components/app-provider/AppProvider";

const Home = () => {
  const [officesList, setOfficesList] = useState<Office[]>([]);
  const [cookies, setCookies] = useCookies<'offices', { offices: Office[] }>(['offices']);

  useEffect(() => {
    if(!cookies.offices){
      setCookies('offices', officesData);
    }
    else{
      setOfficesList(cookies.offices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.offices]);

  return (
    <LandingPage offices={officesList} />
  );
}

export default Home;