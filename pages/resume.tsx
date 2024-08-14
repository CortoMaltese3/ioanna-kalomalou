import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* Education Section*/}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Organization and Management of Hotel and Tourist Units
            </h5>
            <p className="font-semibold"> National & Kapodistrian University of Athens (2020)</p>
            <p className="my-3 text-sm">
              The 'Organization and Management of Hotel and Tourist Units' program at the National & Kapodistrian University of Athens focused on strategic management, customer service, marketing, and financial planning in the hospitality industry, equipping participants with essential skills for success in tourism.
            </p>
          </div>

          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Department of Digital Systems
            </h5>
            <p className="font-semibold"> University of Peloponnese (2007)</p>
            <p className="my-3 text-sm">
              The Department of Digital Systems at the University of Peloponnese provides a well-rounded education in computer science, telecommunications, and network systems, combining theory and practical skills to prepare students for technology careers. Located in Sparta, the program emphasizes research and professional growth in a supportive environment.
            </p>
          </div>

          {/* Certifications Section*/}
          <h5 className="mt-9 text-2xl font-bold">Certifications</h5>
          <div className="my-3">
            <h5 className="font-bold">
              Adobe Illustrator CC - Essentials Training Course
            </h5>
            <p className="italic"> Udemy (Jul 2024)</p>
            <p className="text-sm">
              Skills : Adobe Illustrator CC in practically to graphic design, logo design, and more.
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Complete Web & Mobile Designer: UI/UX, Figma, +more
            </h5>
            <p className="italic">Udemy (May 2024)</p>
            <p className="text-sm">
              Skills: Figma (Software) · Application Design · Visual Design · User Interface Design
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Jira for Beginners - Detailed Course to Get Started in Jira
            </h5>
            <p className="italic">Udemy (Mar 2024)</p>
            <p className="text-sm">
              Skills: Jira · Scrum · Agile Methodologies
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Learn JIRA with real-world examples (+Confluence bonus)
            </h5>
            <p className="italic">Udemy (Mar 2024)</p>
            <p className="text-sm">
              Skills: Jira · Scrum · Agile Methodologies · Confluence
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Product Owner Certification & Exam Prep + Scrum Master & AI
            </h5>
            <p className="italic">Udemy (Feb 2024)</p>
            <p className="text-sm">
              Skills: Product Owner · Scrum · Agile Project Management
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Digital Marketing
            </h5>
            <p className="italic">CollegeLinκ (Apr 2021)</p>
            <p className="text-sm">
              Skills: Digital Marketing · Project Management
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Basic Principles of Digital Marketing
            </h5>
            <p className="italic">Google Digital Academy (Apr 2021)</p>
            <p className="text-sm">
              Skills: Digital Marketing · Project Management · Business Analysis · E-Commerce
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-bold">
              Accounting and Tax Operations
            </h5>
            <p className="italic">University of Piraeus (Nov 2015)</p>
            <p className="text-sm">
              Skills: Accounting · Tax Sales · Personal Income Tax Returns · Tax Preparation
            </p>
          </div>
        </div>

        {/* Experience Section*/}
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Project Manager</h5>
            <p className="font-semibold">Architectural office Thanasis Kalomalos</p>
            <p className="italic">Sept 2023 - present</p>
            <ul className="list-disc list-inside text-sm">
              <li className="my-2">Managed ESPA projects, ensuring full compliance with regulations and adherence to timelines.</li>
              <li className="my-2">Liaised with clients to gather requirements and regularly update them on project progress.</li>
            </ul>
          </div>

          <div className="">
            <h5 className="my-2 text-xl font-bold">Project Manager</h5>
            <p className="font-semibold">Civil Engineering office N. Stathoulopoulos</p>
            <p className="italic">Jan 2021 - Aug 2023</p>
            <ul className="list-disc list-inside text-sm">
              <li className="my-2">Oversaw ESPA projects, ensuring strict adherence to regulatory requirements and timelines.</li>
              <li className="my-2">Coordinated with engineers, architects, and contractors to ensure project specifications and deadlines were met.</li>
              <li className="my-2">Engaged with clients to gather requirements and provide regular updates on project progress.</li>
            </ul>
          </div>

          <div className="">
            <h5 className="my-2 text-xl font-bold">Project Manager</h5>
            <p className="font-semibold">Trekking Hellas</p>
            <p className="italic">May 2016 - Nov 2020</p>
            <ul className="list-disc list-inside text-sm">
              <li className="my-2"> Designed and managed comprehensive activity programs for children, ensuring engaging and safe experiences.</li>
              <li className="my-2">Led the planning and execution of summer camp programs for children, overseeing all activities, staff assignments, and daily operations.</li>
            </ul>
          </div>

          <div className="">
            <h5 className="my-2 text-xl font-bold">Accountant Assistant</h5>
            <p className="font-semibold">Accounting tax office - Maniatis</p>
            <p className="italic">Sep 2011 - Oct 2015</p>
            <ul className="list-disc list-inside text-sm">
              <li className="my-2"> Engaged with clients to gather financial data, address tax-related inquiries, and ensure timely updates to tax filings.</li>
              <li className="my-2">Utilized accounting and tax software to efficiently manage and maintain client accounts.</li>
            </ul>
          </div>


        </div>
      </div>

      {/*Skills & Frameworks Section*/}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Skills & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        {/*Tools Section*/}
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
