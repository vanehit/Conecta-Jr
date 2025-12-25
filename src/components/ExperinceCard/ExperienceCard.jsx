
function ExperienceCard({ title, role, date, description, skills }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h4>{title}</h4>
          <p className="role">{role}</p>
        </div>
        <span className="date">{date}</span>
      </div>

      <p className="description">{description}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
