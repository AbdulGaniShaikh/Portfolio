import React from 'react';
import Timeline from './Timeline';

const careerTimeline = [
  {
    title: 'Backend Engineer',
    subtitle: 'Freelance',
    description: `Successfully served as a dedicated backend developer for a freelance project, showcasing a strong commitment and enthusiasm towards the role. Demonstrated expertise in utilizing Spring and Spring Boot extensively, contributing significantly to the project's success. Seamlessly integrated various backend solutions, highlighting adaptability and versatility in handling complex tasks.`,
    date: 'Oct 2023 - Jan 2024'
  },
  {
    title: 'App Developer Intern',
    subtitle: 'Techq Konnect',
    description: `Implemented IoT data monitoring system, optimizing data collection and analysis for improved decisionmaking. Developed a cloud data transfer app, enhancing efficiency and security in data transfer processes. Created a discussion forum app, fostering collaboration and knowledge sharing among users. Designed a medical client app, streamlining patient information management and enhancing healthcare delivery.`,
    date: 'Jun 2021 - Aug 2021'
  },
  {
    title: 'Android Developer',
    subtitle: 'Appdid Infotech',
    description: `To enhance my skills and gain practical experience, I pursued this internship, got trained and developed a simple OTP Verification Android Application using Android Studio with my two other colleagues`,
    date: 'Apr 2019 - Jun 2019'
  }
];

const Careers = () => {
  return (
    <div id="career" className="flex flex-col min-h-screen gap-y-10 py-20 items-center justify-center">
      <div className="flex flex-col text-center gap-y-4">
        <h1 className="text-5xl heading-underline">Career</h1>
        <p className="text-lg">
          As a recent graduate and a fresher in the field of Software Development, I have gained valuable practical
          experience through multiple internships. During my academic journey, I actively sought opportunities to intern
          as an Android developer, where I worked on real-world projects, honing my skills in designing and implementing
          Android applications. I am now eager to leverage this hands-on experience and apply my knowledge in a
          professional setting, contributing my enthusiasm and dedication to excel as a full-fledged Android developer.
        </p>
      </div>
      <div className="grid h-full w-full">
        {careerTimeline.map((career) => (
          <Timeline {...career} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
