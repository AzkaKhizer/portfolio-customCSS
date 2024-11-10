export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hello! I am Azka Khizer, a passionate Frontend Developer. I enjoy creating beautiful, functional websites and continuously improving my skills to deliver seamless user experiences.
        </p>
        
        <div className="skills">
          <h3 className="skills-title">My Skills</h3>
          <div className="skill-bars">
            <SkillBar skill="HTML" level={90} />
            <SkillBar skill="CSS" level={85} />
            <SkillBar skill="JavaScript" level={80} />
            <SkillBar skill="TypeScript" level={75} />
            <SkillBar skill="Next.js" level={70} />
            <SkillBar skill="Tailwind CSS" level={80} />
          </div>
        </div>
      </div>
    </section>
  );
}
type SkillBarProps = {
  skill: string; 
  level: number; 
};
function SkillBar({ skill, level }:SkillBarProps) {
  return (
    <div className="skill-bar">
      <span className="skill-label">{skill}</span>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${level}%`}}>
          <span className="progress-percent">{level}%</span>
        </div>
      </div>
    </div>
  );
}
