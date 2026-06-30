'use client';
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
}

// Reusable component for the scrolling number animation
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-gray-900 tracking-tight">
            Reclaiming Knowledge. <br/>
            <span className="text-blue-700">Building New Publics.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Bodhi Press Foundation is an independent not-for-profit institution dedicated to publishing, research, education, and public discourse. We create platforms that expand access to knowledge, amplify marginalized voices, and encourage critical inquiry rooted in equality, justice, and human dignity.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
            Through publications, research initiatives, educational programs, and digital platforms, we seek to foster informed dialogue and contribute to a more democratic and inclusive knowledge ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
            <a 
              href="https://theambedkarianchronicle.in/" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-700 text-white px-8 py-3.5 rounded font-bold hover:bg-blue-800 transition cursor-pointer text-center shadow-xs block"
            >
              Explore Our Work
            </a>
            <a 
              href="https://theambedkarianchronicle.in/subscribe" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto border border-blue-700 text-blue-700 px-8 py-3.5 rounded font-bold hover:bg-blue-50 transition cursor-pointer text-center block"
            >
              Support the Foundation
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-bold text-gray-500">
            <span className="text-gray-900">Publishing</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Research</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Education</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Public Discourse</span>
          </div>
        </div>
        
        <div className="aspect-[4/5] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-100 max-w-md mx-auto md:max-w-full">
          <img 
            src="/images/hero-banner.jpg" 
            alt="Bodhi Press Foundation Hero Banner" 
            className="w-full h-full object-cover object-top" 
          />
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">About Us</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Knowledge is <br className="hidden sm:inline" /> a public good.
            </h2>
            <div className="w-16 h-1 bg-blue-700 mt-6 md:mt-8"></div>
          </div>
          <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-gray-900">
              Knowledge shapes societies, yet access to its production and dissemination remains unequal.
            </p>
            <p>
              Bodhi Press Foundation was established to create accessible platforms for scholarship, publishing, learning, and public engagement. Our work brings together writers, researchers, educators, artists, journalists, and communities to produce and share knowledge that is relevant, rigorous, and socially meaningful.
            </p>
            <p>
              We believe that ideas have the power to transform society, and that knowledge must be accessible to all.
            </p>
            <a href="https://theambedkarianchronicle.in/team" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold inline-flex items-center mt-2 hover:underline">
              Read more about us <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center border-b border-gray-200">
        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-12 md:mb-16">Our Work</h3>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">📖</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Publishing</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Books, journals, essays, reports, and digital publications that contribute to public understanding and intellectual exchange.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">🔍</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Research</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Research and documentation projects that advance critical inquiry across social, cultural, historical, and contemporary issues.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">🎓</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Education</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Workshops, training programs, mentorship initiatives, and learning opportunities that strengthen skills in writing, research, media, and public engagement.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">👥</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Public Discourse</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Creating spaces for dialogue, reflection, and debate through events, conversations, publications, and digital platforms.</p>
          </div>
        </div>
      </section>

      {/* OUR INITIATIVES SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-8">Our Initiatives</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Initiative 1 */}
          <div className="flex flex-col xl:flex-row bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden">
            <div className="xl:w-2/5 aspect-[4/5] bg-gray-100 shrink-0">
              {/* Changed to object-contain and added padding to resolve cropping */}
              <img src="/images/initiative-chronicle.jpg" alt="The Ambedkarian Chronicle" className="w-full h-full object-contain p-4 xl:p-8 bg-white" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">The Ambedkarian Chronicle</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                The Ambedkarian Chronicle is an independent journal of contemporary Ambedkarite thought dedicated to publishing critical essays, literature, interviews, reportage, podcasts, and cultural commentary. Inspired by the legacy of Dr. B.R. Ambedkar, it serves as a platform for rigorous public discourse and the amplification of marginalized voices.
              </p>
              <a href="https://theambedkarianchronicle.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold inline-flex items-center hover:underline mt-auto">
                Visit TAC <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Initiative 2 */}
          <div className="flex flex-col xl:flex-row bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden">
            <div className="xl:w-2/5 aspect-[4/5] bg-gray-100 shrink-0">
              {/* Changed to object-contain and added padding to resolve cropping */}
              <img src="/images/initiative-media-school.jpg" alt="TAC School of Media" className="w-full h-full object-contain p-4 xl:p-8 bg-white" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">TAC School of Media</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                The TAC School of Media is a media education initiative that nurtures emerging writers, journalists, researchers, and storytellers through workshops, training programs, fellowships, and community-based learning opportunities. The initiative seeks to strengthen independent and socially conscious media practices.
              </p>
              <a href="https://theambedkarianchronicle.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold inline-flex items-center hover:underline mt-auto">
                Learn More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TAC ISSUES SECTION (Carousel) */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm">Featured TAC Issues</h3>
          <a href="https://theambedkarianchronicle.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold text-sm hover:underline flex items-center">
            View all issues <span className="ml-1">&rarr;</span>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          
          {[
            { img: 'issue-1.jpg', title: 'Caste on Campus', issue: 'Issue 01', link: 'https://theambedkarianchronicle.in/caste-on-campus' },
            { img: 'issue-2.jpg', title: 'Caste in the Temple', issue: 'Issue 02', link: 'https://theambedkarianchronicle.in/caste-in-temple' },
            { img: 'issue-3.jpg', title: 'Caste and Climate Change', issue: 'Issue 03', link: 'https://theambedkarianchronicle.in/caste-and-climate-change' },
            { img: 'issue-4.jpg', title: 'Caste and Cinema', issue: 'Issue 04', link: 'https://theambedkarianchronicle.in/caste-and-cinema' },
            { img: 'issue-5.jpg', title: 'Remembering Rohith', issue: 'Issue 05', link: 'https://theambedkarianchronicle.in/remembering-rohith' },
            { img: 'issue-6.jpg', title: 'Ambedkar Jayanti: Public Space, Symbolic Rupture, And The Politics Of Citizenship', issue: 'Issue 06', link: 'https://theambedkarianchronicle.in/ambedkar-jayanti' }
          ].map((item, index) => (
            <a 
              href={item.link} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-70 shrink-0 snap-start flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] bg-gray-100 rounded shadow-sm mb-4 overflow-hidden border border-gray-200">
                <img 
                  src={`/images/${item.img}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h5 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-700 transition-colors">{item.title}</h5>
              <p className="text-gray-500 text-xs mt-1">{item.issue}</p>
            </a>
          ))}

        </div>
      </section>

      {/* OUR IMPACT SECTION (Animated Numbers + Ambedkarite Blue) */}
      <section className="bg-[#002147] py-16 text-white text-center">
        <h3 className="font-bold uppercase tracking-widest text-xs sm:text-sm mb-12 text-blue-100">Our Impact Since 2024</h3>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-blue-800">
          
          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <div className="text-3xl text-blue-300">📖</div>
            <div className="text-left">
              <h4 className="text-4xl font-bold font-serif mb-1">
                <AnimatedNumber end={6} suffix="" />
              </h4>
              <p className="text-sm text-blue-100 max-w-30 leading-tight">Thematic Issues Published</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <div className="text-3xl text-blue-300">👥</div>
            <div className="text-left">
              <h4 className="text-4xl font-bold font-serif mb-1">
                <AnimatedNumber end={50} suffix="+" />
              </h4>
              <p className="text-sm text-blue-100 max-w-30 leading-tight">Contributors & Writers</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <div className="text-3xl text-blue-300">🎙️</div>
            <div className="text-left">
              <h4 className="text-4xl font-bold font-serif mb-1">
                <AnimatedNumber end={2} suffix="" />
              </h4>
              <p className="text-sm text-blue-100 max-w-30 leading-tight">Podcast Series Released</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 md:pt-0">
            <div className="text-3xl text-blue-300">📚</div>
            <div className="text-left">
              <h4 className="text-4xl font-bold font-serif mb-1">
                <AnimatedNumber end={1000} suffix="+" />
              </h4>
              <p className="text-sm text-blue-100 max-w-30 leading-tight">Readers Reached Across India</p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Our Team</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Meet the people behind Bodhi Press Foundation</p>
        
        <div className="grid md:grid-cols-2 gap-8 text-center mb-10">
          
          {/* Rahul's Card */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-8 flex flex-col items-center gap-5">
            <div className="w-48 sm:w-56 shrink-0 rounded-lg overflow-hidden bg-gray-100 aspect-[4/5]">
              <img src="/images/team-rahul.jpg" alt="Dr. Rahul Sonpimple" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-gray-900 mb-1">Dr. Rahul Sonpimple</h4>
              <p className="text-blue-700 text-sm font-semibold mb-3">Director</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Dr. Rahul Sonpimple is a researcher, educator, and social thinker whose work engages with questions of caste, democracy, social justice, and constitutional values. He is the Founding President of the All India Independent Scheduled Castes Association (AIISCA) and Director of the Savitribai Phule Resource Centre, Nagpur. His work bridges scholarship, public engagement, and grassroots social transformation.
              </p>
            </div>
          </div>

          {/* Suraj's Card */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-8 flex flex-col items-center gap-5">
            <div className="w-48 sm:w-56 shrink-0 rounded-lg overflow-hidden bg-gray-100 aspect-[4/5]">
              <img src="/images/team-suraj.jpg" alt="Suraj Nirmale" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-gray-900 mb-1">Suraj Nirmale</h4>
              <p className="text-blue-700 text-sm font-semibold mb-3">Director</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Suraj Nirmale is a visual artist, documentary filmmaker, and media practitioner. His work explores the intersections of caste, culture, memory, and visual storytelling. Drawing from experience in both the development sector and media, he works to create accessible knowledge and public engagement through creative communication.
              </p>
            </div>
          </div>

        </div>
        
        <a href="https://theambedkarianchronicle.in/team" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold inline-flex items-center hover:underline">
          View full team <span className="ml-2">&rarr;</span>
        </a>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          
          <div className="w-32 md:w-48 shrink-0 relative z-10">
            <img src="/images/cta-books.png" alt="Stack of books" className="w-full object-contain" />
          </div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Independent knowledge institutions thrive through collective support.
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Your contribution helps us publish new voices, support research, create educational resources, train emerging writers and journalists, and sustain spaces for critical public discourse. Together, we can build a more democratic and inclusive knowledge ecosystem.
            </p>
            
            <p className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">
              Publish. Research. Educate. Engage.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto relative z-10 mt-4 md:mt-0 flex items-center">
            <button className="w-full md:w-auto bg-blue-700 text-white px-8 py-4 rounded font-bold hover:bg-blue-800 transition cursor-pointer text-center shadow-xs">
              Support Bodhi Press Foundation
            </button>
          </div>
          
        </div>
      </section>
    </>
  )
}