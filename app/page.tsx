'use client'
import { OfficeBlock } from "@/components/office-block/OfficeBlock";
import { Colors } from "@/interfaces/colors.interface";

const Home = () => {
  return (
    <div>
      <OfficeBlock name="Specno" totalStaff={12} details={{ color: Colors.COLOR_1, capacity: 25, email:"info@specno.com", contactNumber:"082 364 9864", address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"}} />
    </div>
  );
}

export default Home;