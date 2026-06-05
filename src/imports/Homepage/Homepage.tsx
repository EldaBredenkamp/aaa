import { useState } from "react";
import svgPaths from "./svg-dt4kbmmbq2";
import imgFrame289459 from "./cf68d97db0f11ae9827e69cd201e3d8ba0d105c1.png";
import imgFrame289483 from "./56e1f2442a6d4058e8fc451be5d63bff9946cc0b.png";
import { ProgrammesDropdown } from "../../app/components/ProgrammesDropdown";
import { AdmissionsDropdown } from "../../app/components/AdmissionsDropdown";
import { AboutDropdown } from "../../app/components/AboutDropdown";
import { NewsEventsDropdown } from "../../app/components/NewsEventsDropdown";

function Logo() {
  return (
    <div className="h-[56px] w-[113px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 84">
        <path clipRule="evenodd" d={svgPaths.p359bd100} fill="#241010" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      {/* Secondary bar — desktop only: Moodle + iEnabler */}
      <div className="hidden md:flex justify-end items-center gap-6 px-10 py-2 border-b border-gray-100 max-w-[1440px] mx-auto">
        <a
          href="#"
          className="flex items-center gap-2 text-[11px] font-['Roboto:Regular',sans-serif] text-black hover:opacity-70 transition-opacity"
        >
          <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
            <path d={svgPaths.p26c87280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1740b200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1a098540} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          Moodle login
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[11px] font-['Roboto:Regular',sans-serif] text-black hover:opacity-70 transition-opacity"
        >
          <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
            <path d={svgPaths.p26c87280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1740b200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1a098540} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          ienabler login
        </a>
      </div>

      {/* Primary bar */}
      <div className="border-b border-gray-100 max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-[80px]">
        <Logo />

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ProgrammesDropdown />
          <AdmissionsDropdown />
          <AboutDropdown />
          <NewsEventsDropdown />
          <span
            className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[#121212] text-[14px] cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Contact
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            className="border border-[#241010] h-[40px] px-6 rounded-[30px] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[16px] hover:bg-[#241010] hover:text-white transition-colors duration-300 whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Apply Now
          </button>
          <button
            className="border border-[#241010] h-[40px] px-6 rounded-[30px] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[16px] hover:bg-[#241010] hover:text-white transition-colors duration-300 whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Enquire Now
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-[#241010] transition-transform duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#241010] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#241010] transition-transform duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <ProgrammesDropdown />
          <AdmissionsDropdown />
          <AboutDropdown />
          <NewsEventsDropdown />
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[#121212] text-[14px] cursor-pointer">
            Contact
          </span>
          <hr className="border-gray-200" />
          <a href="#" className="flex items-center gap-2 text-[13px] font-['Roboto:Regular',sans-serif] text-black hover:opacity-70 transition-opacity">
            <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
              <path d={svgPaths.p26c87280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1740b200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1a098540} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            Moodle login
          </a>
          <a href="#" className="flex items-center gap-2 text-[13px] font-['Roboto:Regular',sans-serif] text-black hover:opacity-70 transition-opacity">
            <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
              <path d={svgPaths.p26c87280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1740b200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1a098540} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            ienabler login
          </a>
          <div className="flex gap-3 pt-2">
            <button className="border border-[#241010] h-[40px] px-5 rounded-[30px] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[14px] hover:bg-[#241010] hover:text-white transition-colors duration-300">
              Apply Now
            </button>
            <button className="border border-[#241010] h-[40px] px-5 rounded-[30px] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[14px] hover:bg-[#241010] hover:text-white transition-colors duration-300">
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-[111px] py-16 md:py-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[128px] items-end">
        <div className="flex flex-col gap-10 w-full md:w-[481px] shrink-0">
          <div className="flex flex-col gap-10">
            <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black">
              South Africa's leading creative school
            </p>
            <div className="font-['Lato:ExtraBold',sans-serif] text-[56px] md:text-[86px] leading-[1.15] text-black not-italic">
              <p className="mb-4">Where The</p>
              <p className="mb-4">Best Get</p>
              <p>Better.</p>
            </div>
          </div>
          <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[30px] text-black max-w-[411px]">
            AAA is South Africa's leading creative communications school. Build your portfolio, sharpen your thinking and launch your career.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button
              className="group flex items-center gap-3 h-[40px] px-6 rounded-[30px] border border-[#d9d9d9] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[18px] hover:bg-[#241010] hover:text-white transition-colors duration-300 whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Apply Now
              <svg className="w-[17px] shrink-0" fill="none" viewBox="0 0 18 14.7279">
                <path d={svgPaths.p2e313df0} className="fill-[#241010] group-hover:fill-white transition-colors duration-300" />
              </svg>
            </button>
            <button
              className="h-[40px] px-6 rounded-[30px] border border-[#d9d9d9] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[18px] hover:bg-[#241010] hover:text-white transition-colors duration-300 whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Explore Programmes
            </button>
          </div>
        </div>

        <div className="w-full rounded-[30px] overflow-hidden aspect-[617/695]">
          <img alt="AAA School" className="w-full h-full object-cover" src={imgFrame289459} />
        </div>
      </div>
    </section>
  );
}

function AnimatedStrip() {
  const items = [
    "Art Direction",
    "Multimedia Design",
    "Copywriting",
    "Brand Strategy",
    "Digital Marketing",
    "Advertising",
  ];

  return (
    <div className="w-full bg-[#f0f0f0] h-[68px] overflow-hidden flex items-center">
      <div className="flex gap-[128px] animate-scroll-strip whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <p
            key={index}
            className="font-['Roboto:Light',sans-serif] font-light text-[20px] text-black shrink-0"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {item}
          </p>
        ))}
      </div>
      <style>{`
        @keyframes scroll-strip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-strip {
          animation: scroll-strip 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function PhilosophySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-[111px] py-16 md:py-20">
      <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black not-italic">
        Our Philosophy
      </p>
      <div className="font-['Lato:ExtraBold',sans-serif] text-[56px] md:text-[86px] leading-[1.15] text-black not-italic mb-16">
        <p className="mb-4">We Don't Create</p>
        <p className="mb-4">Graduates.</p>
        <p className="mb-4">We Create Industry</p>
        <p>Talent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#d9d9d9] rounded-[30px] p-12 min-h-[448px] cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="size-[36px] mb-6">
            <svg className="size-full" fill="none" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="#8C8C8C" r="18" />
            </svg>
          </div>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[30px] text-black not-italic mb-3">Learn</p>
          <p className="font-['Lato:Regular',sans-serif] text-[24px] leading-[32px] text-black not-italic mb-4">
            Creative thinking from day one.
          </p>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[32px] text-black not-italic">
            No passive lectures. From your first semester you are briefed, challenged and pushed to think like the industry expects. Real problems. Real pressure. Real growth.
          </p>
        </div>

        <div className="bg-[#d9d9d9] rounded-[30px] p-12 min-h-[448px] cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="size-[36px] mb-6">
            <svg className="size-full" fill="none" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="#8C8C8C" r="18" />
            </svg>
          </div>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[30px] text-black not-italic mb-3">Build</p>
          <p className="font-['Lato:Regular',sans-serif] text-[24px] leading-[32px] text-black not-italic mb-4">
            Real portfolios. Real briefs.
          </p>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[32px] text-black not-italic">
            Your graduate portfolio is everything. We give you live briefs, client access and production budgets to build work that gets you hired, not just work that gets you graded.
          </p>
        </div>

        <div className="bg-[#d9d9d9] rounded-[30px] p-12 min-h-[448px] cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="size-[36px] mb-6">
            <svg className="size-full" fill="none" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="#8C8C8C" r="18" />
            </svg>
          </div>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[30px] text-black not-italic mb-3">Launch</p>
          <p className="font-['Lato:Regular',sans-serif] text-[24px] leading-[32px] text-black not-italic mb-4">
            Industry connections that matter.
          </p>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[32px] text-black not-italic">
            Over 200 agency and brand partners. Guest lecturers who are working practitioners. Career days where the people in the room are actively hiring. Your network starts on day one.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeOfferSection() {
  return (
    <section className="w-full bg-[#d9d9d9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[163px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black not-italic">
              What We Offer
            </p>
            <div className="font-['Lato:Bold',sans-serif] text-[40px] md:text-[48px] leading-[1.2] not-italic">
              <p className="text-white">Pick Your Path.</p>
              <p className="text-black">Make Your Name.</p>
            </div>
          </div>
          <p className="font-['Lato:Light',sans-serif] text-[20px] leading-[30px] text-black not-italic max-w-[433px]">
            Every programme is built with direct input from the agencies and brands you want to work for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[30px] p-[58px] cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col gap-4">
            <span className="inline-block bg-[#d9d9d9] text-white text-[14px] font-['Roboto:Light',sans-serif] px-4 py-1 rounded-[30px] w-fit">
              3 Years
            </span>
            <p className="font-['Lato:ExtraLight',sans-serif] text-[18px] leading-[30px] text-black not-italic">
              Degrees
            </p>
            <p className="font-['Lato:Bold',sans-serif] text-[32px] leading-[30px] text-black not-italic">
              The Full Picture.
            </p>
            <div className="font-['Lato:ExtraLight',sans-serif] text-[16px] leading-[30px] text-black not-italic flex-1">
              <p className="mb-6">
                For future strategists, marketers and creative leaders. Three-year programmes that develop your thinking, your craft and your career strategy simultaneously.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>BA Communication Design</li>
                <li>BA Brand Communication</li>
                <li>BA Strategic Marketing</li>
                <li>BA Multimedia Design</li>
              </ul>
            </div>
            <button className="bg-[#241010] text-white text-[14px] font-['Roboto:Light',sans-serif] px-5 py-1 rounded-[30px] border border-[#241010] hover:bg-white hover:text-black hover:border-black transition-colors duration-300 w-fit mt-4">
              View Degrees
            </button>
          </div>

          <div className="bg-white rounded-[30px] p-[58px] cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col gap-4">
            <span className="inline-block bg-[#d9d9d9] text-white text-[14px] font-['Roboto:Light',sans-serif] px-4 py-1 rounded-[30px] w-fit">
              1 Year
            </span>
            <p className="font-['Lato:ExtraLight',sans-serif] text-[18px] leading-[30px] text-black not-italic">
              Diplomas
            </p>
            <p className="font-['Lato:Bold',sans-serif] text-[32px] leading-[30px] text-black not-italic">
              Practical skills.
            </p>
            <div className="font-['Lato:ExtraLight',sans-serif] text-[16px] leading-[30px] text-black not-italic flex-1">
              <p className="mb-6">
                Year focused programmes that get you agency-ready fast. Strong portfolio work. Real-world skills. Direct pathways to employment in the creative industries.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diploma in Advertising</li>
                <li>Diploma in Graphic Design</li>
                <li>Diploma in Copywriting</li>
                <li>Diploma in Digital Marketing</li>
              </ul>
            </div>
            <button className="bg-[#241010] text-white text-[14px] font-['Roboto:Light',sans-serif] px-5 py-1 rounded-[30px] border border-[#241010] hover:bg-white hover:text-black hover:border-black transition-colors duration-300 w-fit mt-4">
              View Diplomas
            </button>
          </div>

          <div className="bg-white rounded-[30px] p-[58px] cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col gap-4">
            <span className="inline-block bg-[#d9d9d9] text-white text-[14px] font-['Roboto:Light',sans-serif] px-4 py-1 rounded-[30px] w-fit">
              6 Months
            </span>
            <p className="font-['Lato:ExtraLight',sans-serif] text-[18px] leading-[30px] text-black not-italic">
              Higher Certificates
            </p>
            <p className="font-['Lato:Bold',sans-serif] text-[32px] leading-[30px] text-black not-italic">
              Your entry point.
            </p>
            <div className="font-['Lato:ExtraLight',sans-serif] text-[16px] leading-[30px] text-black not-italic flex-1">
              <p className="mb-6">
                One-year intensive programmes designed to give you the foundation and industry exposure to launch your creative career immediately or progress to a diploma or degree.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Higher Certificate in Advertising</li>
                <li>Higher Certificate in Design</li>
              </ul>
            </div>
            <button className="bg-[#241010] text-white text-[14px] font-['Roboto:Light',sans-serif] px-5 py-1 rounded-[30px] border border-[#241010] hover:bg-white hover:text-black hover:border-black transition-colors duration-300 w-fit mt-4">
              View Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampusSection() {
  const tags = [
    "Studio Culture",
    "Guest Lectures",
    "Award Ceremonies",
    "Industry Events",
    "Student Exhibitions",
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-[126px] py-16 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
        <div>
          <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black not-italic">
            What We Offer
          </p>
          <div className="font-['Lato:Bold',sans-serif] text-[40px] md:text-[48px] leading-[1.2] text-black not-italic">
            <p>More Than</p>
            <p>A Campus.</p>
          </div>
        </div>
        <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[30px] text-black not-italic max-w-[481px] md:mt-14">
          A community of thinkers, makers and storytellers. This is where ideas collide, portfolios are born and careers ignite.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="row-span-2 rounded-[20px] overflow-hidden">
          <img alt="Campus" className="w-full h-full object-cover" src={imgFrame289459} />
        </div>
        <div className="rounded-[20px] overflow-hidden aspect-square">
          <img alt="Campus" className="w-full h-full object-cover" src={imgFrame289459} />
        </div>
        <div className="rounded-[20px] overflow-hidden aspect-square">
          <img alt="Campus" className="w-full h-full object-cover" src={imgFrame289459} />
        </div>
        <div className="col-span-1 md:col-span-2 rounded-[20px] overflow-hidden aspect-[483/223]">
          <img alt="Campus" className="w-full h-full object-cover" src={imgFrame289483} />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            className="h-[40px] px-6 rounded-[30px] border border-[#d9d9d9] font-['Roboto:Light',sans-serif] font-light text-[#241010] text-[18px] hover:bg-[#241010] hover:text-white hover:border-[#241010] transition-colors duration-300 whitespace-nowrap"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}

function AccreditationSection() {
  const items = [
    { name: "CHE", bg: "bg-[#d9d9d9]", desc: null, sub: null },
    { name: "IAB", bg: "bg-[#bababa]", desc: "International Advertising Association", sub: "Global industry recognition and membership standing." },
    { name: "DHET", bg: "bg-[rgba(217,217,217,0.33)]", desc: "International Advertising Association", sub: "Global industry recognition and membership standing." },
    { name: "MASA", bg: "bg-[#d9d9d9]", desc: "International Advertising Association", sub: "Global industry recognition and membership standing." },
  ];

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[144px]">
        <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black not-italic">
          What We Offer
        </p>
        <p className="font-['Lato:Bold',sans-serif] text-[40px] md:text-[48px] leading-[30px] text-black not-italic mb-16">
          Recognised. Accredited. Trusted
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.name} className={`${item.bg} rounded-[30px] p-6 min-h-[226px]`}>
              <p className="font-['Lato:SemiBold',sans-serif] text-[24px] leading-[30px] text-black not-italic mb-6">
                {item.name}
              </p>
              {item.desc && (
                <div className="font-['Lato:Regular',sans-serif] text-[14px] text-black not-italic">
                  <p className="leading-[20px] mb-3">{item.desc}</p>
                  <p className="leading-[20px]">{item.sub}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full bg-[rgba(217,217,217,0.43)] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[111px]">
        <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[56px] text-black not-italic">
          2026 Applications Open
        </p>
        <div className="font-['Lato:ExtraBold',sans-serif] text-[56px] md:text-[84px] leading-[1.1] text-black not-italic mb-8">
          <p>Don't Fit In.</p>
          <p>Stand Out.</p>
        </div>
        <p className="font-['Lato:Regular',sans-serif] text-[20px] leading-[40px] text-black not-italic max-w-[481px] mb-12">
          Applications are open for 2026. Limited seats available. Secure your place at South Africa's most respected creative school.
        </p>
        <div className="flex flex-wrap gap-6 items-center mb-8">
          <button
            className="group bg-[#8c8c8c] h-[40px] px-6 rounded-[30px] border border-[#d9d9d9] font-['Roboto:Bold',sans-serif] font-bold text-white text-[18px] hover:bg-[#241010] transition-colors duration-300 whitespace-nowrap flex items-center gap-3"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Apply Now
            <svg className="w-[17px] shrink-0" fill="none" viewBox="0 0 18 14.7279">
              <path d={svgPaths.p2e313df0} fill="white" />
            </svg>
          </button>
          <button
            className="h-[40px] px-6 rounded-[30px] border border-[#d9d9d9] font-['Roboto:Bold',sans-serif] font-bold text-[#241010] text-[18px] hover:bg-[#241010] hover:text-white transition-colors duration-300 whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Request A Prospectus
          </button>
        </div>
        <p className="font-['Lato:ExtraLight',sans-serif] text-[20px] leading-[56px] text-black not-italic">
          Applications close 31 October 2025 for January intake.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[61px]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
          <Logo />

          <div className="flex flex-wrap gap-6 items-center">
            <ProgrammesDropdown />
            <AdmissionsDropdown />
            <AboutDropdown />
            <NewsEventsDropdown />
            <span
              className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-black cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Contact
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-[50px] border border-[#241010] font-['Lato:Medium',sans-serif] text-[15px] text-black not-italic hover:bg-[#241010] hover:text-white transition-colors duration-300 w-fit">
              <svg className="size-[24px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p24a44960} className="fill-black group-hover:fill-white transition-colors duration-300" />
                <path d={svgPaths.p37470580} className="fill-black group-hover:fill-white transition-colors duration-300" />
                <path d={svgPaths.p27c92d80} className="fill-black group-hover:fill-white transition-colors duration-300" />
              </svg>
              Enquire
            </button>
            <button className="group flex items-center gap-2 px-4 py-2 rounded-[50px] border border-[#121212] font-['Lato:Medium',sans-serif] text-[15px] text-[#121212] not-italic hover:bg-[#241010] hover:text-white transition-colors duration-300 w-fit">
              <svg className="h-[24px] w-[17px] shrink-0" fill="none" viewBox="0 0 16.7761 23.8594">
                <path d={svgPaths.p1d8b600} className="fill-[#241010] group-hover:fill-white transition-colors duration-300" />
                <path d={svgPaths.p3b46e800} className="fill-[#241010] group-hover:fill-white transition-colors duration-300" />
              </svg>
              Visit
            </button>
            <button className="group flex items-center gap-2 px-4 py-2 rounded-[50px] border border-black font-['Lato:Medium',sans-serif] text-[15px] text-black not-italic hover:bg-[#241010] hover:text-white transition-colors duration-300 w-fit">
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p23fbca00} className="fill-[#241010] group-hover:fill-white transition-colors duration-300" />
              </svg>
              Apply
            </button>
          </div>
        </div>

        <div className="border-t border-black pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-black"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            © 2026 aaa. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="font-['Roboto:Regular',sans-serif] text-[14px] text-black underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>
              Privacy Policy
            </a>
            <a href="#" className="font-['Roboto:Regular',sans-serif] text-[14px] text-black underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>
              Terms &amp; Conditions
            </a>
            <a href="#" className="font-['Roboto:Regular',sans-serif] text-[14px] text-black underline decoration-solid" style={{ fontVariationSettings: '"wdth" 100' }}>
              PAIA Manual
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:opacity-70">
              <div className="absolute inset-[12.5%_29.17%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
                  <path d={svgPaths.p2c12e900} fill="black" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:opacity-70">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="black" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:opacity-70">
              <div className="absolute inset-[18.75%_12.5%_17.5%_12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.3">
                  <path d={svgPaths.p2c2f1180} fill="black" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:opacity-70">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p261b200} fill="black" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Homepage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AnimatedStrip />
      <PhilosophySection />
      <WhatWeOfferSection />
      <CampusSection />
      <AccreditationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
