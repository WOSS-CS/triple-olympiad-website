
// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
export function TeamGrid() {
  const teamMembers: [string, string][] = [
    ['Eddie', 'none'],
    ['Darren', 'none'],
    ['Caden', 'none'],
    ['Moiz', 'none'],
    ['Parth', 'none'],
    ['Arjun', 'none'],
    ['Adham', 'none'],
    ['Shawn', 'none'],
  ]

  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
      {teamMembers.map(([name, photoUrl], index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, rgba(0, 102, 41, 0.25) 30%, transparent 100%)',
                padding: '2px'
              }}
            >
              <div 
                className="w-full h-full rounded-xl relative" 
                style={{ backgroundColor: '#001002' }}
              >
                {photoUrl !== 'none' && (
                  <img 
                    src={photoUrl} 
                    alt={name}
                    className="w-full h-full object-cover rounded-xl"
                    draggable={false}
                  />
                )}
              </div>
            </div>
          </div>
          <p className="mt-3 text-white text-sm font-medium">{name}</p>
        </div>
      ))}
    </div>
  )
}