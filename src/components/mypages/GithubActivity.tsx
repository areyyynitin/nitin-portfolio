import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {

  return (
    <div className=" pt-8 text-[20px] mx-4 md:mx-16 lg:mx-82">
      <div className="flex flex-col   ">
        <h2 className=" font-bold  text-2xl md:text-[30px]  text-start mb-2">GitHub</h2>
        <Link 
        href="https://github.com/areyyynitin" 
   
        >

        <GitHubCalendar
          username="areyyynitin"
          colorScheme="light"
           hideColorLegend={true}   

          
          />
          </Link>
      </div>
    </div>
  );
}