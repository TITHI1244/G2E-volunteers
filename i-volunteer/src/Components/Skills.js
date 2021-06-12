import React, { useState } from 'react';

const skillSet = ['Certified electrician', 'Certified plumber', 'Certified carpenter', 'Certified forklift driver', 'Bartending experience', 'First aid course certified', 'Hygiene certified', 'Eager to help in anything'];

export default function Skills({volunteerSkills}) {
    const [isChecked, setIsChecked] = useState(
        new Array(skillSet.length).fill(false)
    );
    const handleChange = (position) => {
        const newState = isChecked.map((item, index) => index === position ? !item : item);
        setIsChecked(newState);
    }
    const submitSkills = () => {
        const filteredIndex = isChecked.map((item, index) => {
            if(item === true) {
                return skillSet.filter((skill, position) => position === index)[0]
        }});
        const skillsArray = filteredIndex.filter(item => item !== undefined);
        volunteerSkills(skillsArray);
    }
    return (
        <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills" onBlur={submitSkills}>
                {skillSet.map((skill, index) =>
                    <div key={skill + index} className="skill-item">
                        <input type="checkbox" id={`skill-${index}`} name={skill} value={skill} checked={isChecked[index]} onChange={() => handleChange(index)} />
                        <label htmlFor={`skill-${index}`}>{skill}</label>
                    </div>
                    )}
            </div>
        </div>
    )
}
