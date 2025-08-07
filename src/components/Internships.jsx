import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
      <div className="hero-badge">
        <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-[#839CB5]">
          {sub}
        </p>
      </div>
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white">
        {title}
      </h1>
    </div>
  );
};

const internshipCards = [
  {
    company: "Eduskills Virtual Internship",
    role: "AWS Cloud Intern",
    date: "Jan – Feb 2025",
    imgPath: "/assets/1st.png",
    logoPath: "/assets/logo.png",
    responsibilities: [
      "Explored AWS services including EC2, S3, Lambda, and IAM.",
      "Completed hands-on labs and deployed cloud-native solutions.",
      "Gained understanding of scalable infrastructure and DevOps basics.",
    ],
  },
  {
    company: "Eduskills Virtual Internship",
    role: "Android Development Intern",
    date: "Mar – Apr 2025",
    imgPath: "/assets/2nd.png", // Ensure this exists in public/images
    logoPath: "/assets/logo.png",
    responsibilities: [
      "Built basic Android apps using Java and XML layouts.",
      "Worked on UI components, activities, and intents.",
      "Submitted milestone projects and received certification from Eduskills.",
    ],
  },
];

const Internships = () => (
  <section
    id="Internships"
    className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 xl:px-32 bg-white dark:bg-[#0f1117] transition-colors duration-500"
  >
    <TitleHeader title="Internships" sub="🛠️ My Industry Experience" />
    <div className="mt-10 sm:mt-14 md:mt-16 space-y-6 sm:space-y-8 md:space-y-10 max-w-screen-xl mx-auto">
      {internshipCards.map((intern, idx) => (
        <div
          key={idx}
          className="rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1f2128] hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-center md:justify-start">
            <img
              src={intern.imgPath}
              alt={`${intern.company} image`}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <img
                src={intern.logoPath}
                alt={`${intern.company} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <h3 className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold">
                {intern.company}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-white-50 text-sm sm:text-base font-semibold mb-1">
              {intern.role}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              {intern.date}
            </p>
            <p className="text-gray-600 dark:text-[#839CB5] italic text-sm sm:text-base mb-2 sm:mb-3">
              Responsibilities
            </p>
            <ul className="list-disc ps-4 sm:ps-5 flex flex-col gap-1.5 sm:gap-2 text-gray-700 dark:text-gray-300">
              {intern.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Internships;
