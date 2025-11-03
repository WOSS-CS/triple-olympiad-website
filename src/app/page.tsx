import { MenuBar } from '@/components/MenuBar'
import { TeamGrid } from '@/components/TeamGrid'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <MenuBar />
      <div className="min-h-screen bg-black p-2 md:p-4">
        <div 
          className="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] rounded-[20px] md:rounded-[40px] p-4 md:p-8 relative overflow-hidden"
          style={{ backgroundColor: '#001002' }}
        >
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 rounded-[40px] pointer-events-none animate-background-fade-in"
            style={{ 
              backgroundImage: 'url(/background_art.png)',
              backgroundSize: '100% auto',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Background Decoration */}
          <img 
            src="/bg_decor.svg" 
            alt="Background Decoration" 
            className="absolute top-4 right-2 w-150 h-auto  pointer-events-none opacity-50"
            draggable={false}
          />
          
          {/* Content area */}
          <div className="relative z-10">
            {/* Hero Section */}
            <div className="flex items-start justify-center pt-20 md:pt-30">
              
              <div className="text-center flex flex-col items-center gap-6 md:gap-13 px-4">
                
                
                <img 
                  src="/disciplines.png" 
                  alt="Disciplines" 
                  className="w-32 md:w-75 h-auto animate-fade-in-down"
                  draggable={false}
                />
                <img 
                  src="/triple_olympiad.png" 
                  alt="Triple Olympiad" 
                  className="w-96 md:w-270 h-auto drop-shadow-lg animate-fade-in-down-delay-1"
                  draggable={false}
                />
                <img 
                  src="/hero_art.png" 
                  alt="Hero Art" 
                  className="w-auto h-auto max-w-sm md:max-w-2xl lg:max-w-4xl animate-fade-in-down-delay-2"
                  draggable={false}
                />
                <button 
                className="bg-gradient-to-b from-green-400 to-green-700 text-black px-6 py-3 md:px-10 md:py-5 rounded-full font-medium text-base md:text-[20px] shadow-md hover:from-green-500 hover:to-green-800 transition-all duration-300 flex items-center gap-2 w-48 md:w-60 justify-center animate-fade-in-down-delay-3">
                Sponsor  Event
              </button>
              
              {/* Current Sponsors Section */}
              <div className="mt-16 md:mt-24">
                <h2 className="text-white text-xl md:text-2xl font-semibold opacity-70 mb-8">
                  Proudly Sponsored By:
                </h2>
                <div className="relative overflow-hidden">
                  {/* Infinite scrolling container */}
                  <div className="flex animate-infinite-scroll">
                    {/* First set of logos */}
                    <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                      <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                      <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                      <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                      <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                      <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                    </div>
                    {/* Second set */}
                    <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                      <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                      <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                      <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                      <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                      <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                    </div>
                    {/* Third set */}
                    <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                      <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                      <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                      <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                      <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                      <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                    </div>
                    {/* Fourth set */}
                    <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                      <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                      <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                      <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                      <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                      <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                    </div>
                  </div>
                  
                  {/* Fade gradients */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(to right, #001002, transparent)'
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(to left, #001002, transparent)'
                    }}
                  />
                </div>
              </div>
              
              </div>
            </div>
            
            {/* Feature Sections - Outside hero container for consistent width */}
            <div className="px-8 md:px-16 lg:px-24 relative overflow-hidden">
              {/* Side Glow - Top Right */}
              <img 
                src="/side_glow.png" 
                alt="Side Glow" 
                className="absolute top-4 -right-0 md:top-8 w-64 md:w-80 h-auto pointer-events-none opacity-40 -z-10"
                draggable={false}
              />
              
              {/* Background Decoration for Feature Sections */}
              <img 
                src="/bg_decor.svg" 
                alt="Background Decoration" 
                className="absolute bottom-4 left-2 md:bottom-8 md:left-4 w-100 md:w-200 h-auto pointer-events-none opacity-50 transform rotate-180"
                draggable={false}
              />
              {/* Feature Section 1 */}
              <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
                {/* Left side - Icon, heading, subheading */}
                <div className="space-y-6 text-left">
                  {/* Icon box */}
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    Secure & Reliable Platform
                  </h3>
                  
                  {/* Subheading */}
                  <p className="text-base md:text-lg text-white opacity-70 max-w-md text-left">
                    Built with enterprise-grade security and reliability in mind. 
                    Your data and competitions are protected with industry-leading standards.
                  </p>
                </div>
                
                {/* Right side - Large image area */}
                <div className="bg-green-700 rounded-2xl p-6 md:p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center text-white opacity-50">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Feature Image</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Section 2 - Swapped layout */}
              <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
                {/* Left side - Large image area */}
                <div className="bg-green-700 rounded-2xl p-6 md:p-8 aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center text-white opacity-50">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Feature Image</p>
                  </div>
                </div>
                
                {/* Right side - Icon, heading, subheading */}
                <div className="space-y-6 text-left order-1 lg:order-2">
                  {/* Icon box */}
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    Real-time Competition Tracking
                  </h3>
                  
                  {/* Subheading */}
                  <p className="text-base md:text-lg text-white opacity-70 max-w-md text-left">
                    Monitor your progress and rankings in real-time. Get instant feedback 
                    and see how you stack up against other participants.
                  </p>
                </div>
              </div>
              
              {/* Feature Section 3 - Back to original layout */}
              <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
                {/* Left side - Icon, heading, subheading */}
                <div className="space-y-6 text-left">
                  {/* Icon box */}
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m0 0a4 4 0 11-6 0M13 7a4 4 0 11-6 0 4 4 0 016 0z" />
                    </svg>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    Collaborative Learning Environment
                  </h3>
                  
                  {/* Subheading */}
                  <p className="text-base md:text-lg text-white opacity-70 max-w-md text-left">
                    Connect with fellow participants, share knowledge, and learn together. 
                    Build lasting relationships in our supportive community.
                  </p>
                </div>
                
                {/* Right side - Large image area */}
                <div className="bg-green-700 rounded-2xl p-6 md:p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center text-white opacity-50">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Feature Image</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Section */}
            <div className="mt-24 md:mt-32 text-center">
              <img 
                src="/team.png" 
                alt="Team" 
                className="opacity-50 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl"
                draggable={false}
              />
              <p className="mt-6 text-white text-lg md:text-[30px] font-bold opacity-100 mt-[-25]">
                Meet the crew behind this event
              </p>
              
              <TeamGrid />
            </div>
            
            {/* FAQ Section */}
            <FAQ />
            
            {/* Bottom spacing with glow */}
            <div className="mt-24 md:mt-32 relative">
              <img 
                src="/bottom_glow.png" 
                alt="Bottom Glow" 
                className="absolute bottom-0 left-0 w-full h-auto opacity-60 pointer-events-none -z-10"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
