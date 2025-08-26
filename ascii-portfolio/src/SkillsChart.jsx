import React, { useState } from 'react';
import ScrollTypewriter from './ScrollTypewriter.jsx';

const SkillsChart = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skills data: [name, mastery(0-4), frequency(0-4), category]
  const skills = [
    // Technical Skills (green)
    ['React', 2.7, 2.8, 'technical'],
    ['JavaScript', 3.5, 2.65, 'technical'],
    ['Python', 3.7, 2.7, 'technical'],
    ['Node.js', 2.0, 1.7, 'technical'],
    ['Three.js', 1.5, 2, 'technical'],
    ['CSS/HTML', 3.57, 3.1, 'technical'],
    ['Git', 3.05, 3.6, 'technical'],
    ['SQL', 2.56, 2.73, 'technical'],
    ['Java', 3.31, 2.47, 'technical'],
    ['MongoDB', 2.2, 1.9, 'technical'],
    ['Android Studio', 1.5, 0, 'technical'],
    ['Apache Maven', 3, 1, 'technical'],
    ['Terraform', 2.3, 1, 'technical'],
    ['Azure SDK', 2.6, 1, 'technical'],
    [' C ', 2.5, 0.3, 'technical'],
    
    // Interpersonal Skills (blue)
    ['Leadership', 3.2, 3.5, 'interpersonal'],
    ['Communication', 3.8, 4, 'interpersonal'],
    ['Teamwork', 2.8, 3.8, 'interpersonal'],
    ['Problem Solving', 3.8, 3.8, 'interpersonal'],
    ['Presentation', 3, 2.5, 'interpersonal'],
    ['Mentoring', 1, 1, 'interpersonal'],
    
    // Concepts (yellow)
    ['Data Structures', 3.2, 3, 'concept'],
    ['Algorithms', 3, 2.8, 'concept'],
    ['System Design', 2.5, 2.2, 'concept'],
    ['UI/UX Design', 2.8, 3, 'concept'],
    ['Agile/Scrum', 2.5, 0.75, 'concept'],
    ['Machine Learning', 2, 0, 'concept'],
    ['User Requirements Engineering', 3.8, 0.6, 'concept'],
  ];

  const getSkillColor = (category) => {
    switch(category) {
      case 'technical': return '#00ff7f'; // bright green
      case 'interpersonal': return '#00bfff'; // bright blue  
      case 'concept': return '#ffd700'; // bright yellow
      default: return '#ffffff';
    }
  };

  const getSkillPosition = (mastery, frequency) => {
    const chartWidth = window.innerWidth * 0.8 * 0.85; // 85% of 80vw
    const chartHeight = window.innerHeight * 0.8 * 0.75; // 75% of 80vh
    const padding = 80;
    
    const x = padding + (mastery / 4) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - (frequency / 4) * (chartHeight - 2 * padding);
    
    return { x, y };
  };

  const chartWidth = window.innerWidth * 0.8;
  const chartHeight = window.innerHeight * 0.8;

  return (
    <section className="skills-section">
      <div className="skills-container">
        <ScrollTypewriter 
          text="Skills & Expertise"
          fontSize="3rem"
          color="lightgreen"
          delay={100}
          startDelay={300}
          className="skills-title-typewriter"
        />
        
        <div className="skills-description">
          <p>
            I believe skills should be measured not just by mastery level, but by how frequently they're applied. 
            This chart maps my expertise across both dimensions - showing which skills I've truly mastered through 
            consistent use versus those I'm still developing. The intersection of knowledge and practice reveals 
            where my strongest capabilities lie and guides my continued growth as a developer.
          </p>
        </div>
        
        <div className="chart-container">
          <svg width={chartWidth} height={chartHeight} className="skills-chart">
            {/* Chart background */}
            <rect 
              x="80" 
              y="80" 
              width={chartWidth - 160} 
              height={chartHeight - 160} 
              fill="rgba(255,255,255,0.05)" 
              rx="10"
            />
            
            {/* Grid lines */}
            {[1, 2, 3].map(i => (
              <g key={i}>
                {/* Vertical grid lines */}
                <line 
                  x1={80 + (i * (chartWidth - 160) / 4)} 
                  y1="80" 
                  x2={80 + (i * (chartWidth - 160) / 4)} 
                  y2={chartHeight - 80} 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1"
                />
                {/* Horizontal grid lines */}
                <line 
                  x1="80" 
                  y1={80 + (i * (chartHeight - 160) / 4)} 
                  x2={chartWidth - 80} 
                  y2={80 + (i * (chartHeight - 160) / 4)} 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* X-axis */}
            <line x1="80" y1={chartHeight - 80} x2={chartWidth - 80} y2={chartHeight - 80} stroke="#ffffff" strokeWidth="2"/>
            {/* Y-axis */}
            <line x1="80" y1="80" x2="80" y2={chartHeight - 80} stroke="#ffffff" strokeWidth="2"/>
            
            {/* X-axis labels */}
            {['Beginner', 'Learning', 'Proficient', 'Advanced', 'Expert'].map((label, i) => (
              <text key={i} x={80 + (i * (chartWidth - 160) / 4)} y={chartHeight - 50} fill="#ffffff" textAnchor="middle" fontSize="14">
                {label}
              </text>
            ))}
            
            {/* Y-axis labels */}
            {['Class Only', 'Work Only', 'Use Frequently', 'Everyday'].map((label, i) => (
              <text key={i} x="60" y={chartHeight - 80 - ((i + 1) * (chartHeight - 160) / 4)} fill="#ffffff" textAnchor="middle" fontSize="12">
                {label}
              </text>
            ))}
            
            {/* Axis titles */}
            <text x={chartWidth / 2} y={chartHeight - 20} fill="#ffffff" textAnchor="middle" fontSize="18" fontWeight="bold">
              Mastery Level
            </text>
            <text x="30" y={chartHeight / 2} fill="#ffffff" textAnchor="middle" fontSize="18" fontWeight="bold" transform={`rotate(-90 30 ${chartHeight / 2})`}>
              Usage Frequency
            </text>
            
            {/* Skills points */}
            {skills.map((skill, index) => {
              const [name, mastery, frequency, category] = skill;
              const position = getSkillPosition(mastery, frequency);
              const isHovered = hoveredSkill === index;
              
              return (
                <g key={index}>
                  {/* Skill rectangle */}
                  <rect
                    x={position.x - (name.length * 4)}
                    y={position.y - 12}
                    width={name.length * 8}
                    height="24"
                    fill={getSkillColor(category)}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    rx="12"
                    className="skill-button"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: 'center'
                    }}
                  />
                  
                  {/* Skill name text */}
                  <text
                    x={position.x}
                    y={position.y + 4}
                    fill="#000000"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="'Poppins', sans-serif"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: 'center'
                    }}
                  >
                    {name}
                  </text>
                </g>
              );
            })}
          </svg>
          
          {/* Legend */}
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#00ff7f'}}></div>
              <span>Technical Skills</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#00bfff'}}></div>
              <span>Interpersonal Skills</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#ffd700'}}></div>
              <span>Concepts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;