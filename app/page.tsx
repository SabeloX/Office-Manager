'use client'
import { OfficeBlock } from "@/components/office-block/OfficeBlock";

const Home = () => {
  return (
    <div>
      <OfficeBlock name="Specno" totalStaff={12} details={{ capacity: 25, email:"sadaw", contactNumber:"21231", address: "daewfde"}} />
    </div>
  );
}

export default Home;