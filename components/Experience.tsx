
import React from 'react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
    {
    company: 'InsiteMy Sdn Bhd',
    role: 'Senior Consultant',
    period: '2025 - Present',
    description: 'Worked in an E-Invoice company serving banking clients, focusing on developing new features, database stored procedures, bug fixes, and modernizing legacy systems into a centralized E-Invoice platform.',
    achievements: [
      'Implemented scheduled email automation for AP and selected AR workflows, improving billing communication and operational efficiency',
      'Revamped legacy reconciliation reports into the E-Invoice system, transforming it into a centralized application with expanded functionality.',
      'Refactored legacy JSP-based code into a cleaner FE–BE method-call structure and introduced GitHub with SQL version control, significantly improving maintainability and debugging efficiency.'
    ]
    },
    {
    company: 'Sollers Consulting Sdn Bhd',
    role: 'Senior Software Engineer',
    period: '2023 - 2024',
    description: 'Worked on Policy Center cloud migration and new market implementation, while contributing to a React-based frontend project to meet regional and partner requirements.',
    achievements: [
      'Successfully contributed to upgrading Policy Center from on-premise to Cloud and building a new solution tailored for the Australian market.',
      'Enhanced a ReactJS template project by adapting partner libraries, identifying limitations, and implementing effective workarounds.',
      'Actively supported Agile delivery through code reviews, documentation, and facilitation of sprint ceremonies, ensuring high code quality and team alignment.'
    ]
    },
    {
    company: 'Hicloud Technologies Sdn Bhd',
    role: 'Full Stack Developer',
    period: '2022 - 2023',
    description: 'Contributed to Enterprise Communication and Healthcare Systems, developing backend APIs using Go and maintaining cloud-based applications on AWS.',
    achievements: [
      'Developed multiple Go-based APIs for server communication, leveraging AWS services such as SQS and cache databases.',
      'Built and maintained healthcare system features for data display, invoicing, reporting, and prescription management.',
      'Researched AWS services and resolved critical system bugs, improving overall system stability and performance.'
    ]
  },
  {
    company: 'RenalTeam Dialysis Sdn.Bhd',
    role: 'Software Engineer',
    period: '2021 - 2022',
    description: 'Worked on Hemodialysis Monitoring and Data Systems, enabling real-time data collection, invoicing, reporting, and cloud synchronization using AWS and API integrations.',
    achievements: [
      'Deployed and maintained systems on AWS (EC2 and databases) across sprints, ensuring stable and timely releases.',
      'Built and supported APIs to collect hemodialysis data from Raspberry Pi (Node-RED) and sync local data to the central cloud system.',
      'Provided end-to-end client support, including device installation, bug fixes, and feature enhancements for both local and cloud environments.'
    ]
  },
  {
    company: 'Hytech Consulting Management Sdn Bhd',
    role: 'Software Engineer',
    period: '2020 - 2021',
    description: 'Contributed to Fintech Monitoring and Trading Deposit Systems, enhancing admin monitoring features, system configuration, and third-party integrations.',
    achievements: [
      'Implemented multi-language support using LocaleResolver, improving system accessibility and user reach.',
      'Integrated third-party deposit services via HTTP POST APIs, enabling secure and seamless transaction processing.',
      'Resolved system issues and collaborated with external partners to ensure stable operations and timely feature delivery.'
    ]
  },
  {
    company: 'MYETRADE SDN BHD',
    role: 'Java Developer',
    period: '2017 - 2020',
    description: 'Developed and supported Bus Operating and Terminal Systems, delivering ticketing, scheduling, and platform management solutions using Java and Spring.',
    achievements: [
      'Built and enhanced core ticketing and bus scheduling features, improving daily operations and system stability.',
      'Optimized database performance and automated workflows using Cronjobs and email notifications.',
      'Integrated APIs and third-party services, including Google Cloud Printing, to streamline counter staff operations.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Career Path</h2>
        <p className="text-slate-400 max-w-2xl">A timeline of my professional journey and key milestones at world-class companies.</p>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 z-10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm3 3V3h2v2H9zM4 6h12v10H4V6z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <time className="text-sm font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
                  {exp.period}
                </time>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
