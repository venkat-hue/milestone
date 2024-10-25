import React, { useState } from 'react';
import { Award, Book, Target } from 'lucide-react';

interface CareerGoal {
  id: number;
  title: string;
  targetDate: string;
  completed: boolean;
}

interface Skill {
  id: number;
  name: string;
  proficiency: number;
}

const CareerTracker: React.FC = () => {
  const [goals, setGoals] = useState<CareerGoal[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newGoal, setNewGoal] = useState({ title: '', targetDate: '' });
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 1 });

  const addGoal = () => {
    if (newGoal.title && newGoal.targetDate) {
      setGoals([...goals, { ...newGoal, id: Date.now(), completed: false }]);
      setNewGoal({ title: '', targetDate: '' });
    }
  };

  const addSkill = () => {
    if (newSkill.name) {
      setSkills([...skills, { ...newSkill, id: Date.now() }]);
      setNewSkill({ name: '', proficiency: 1 });
    }
  };

  const toggleGoalCompletion = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const updateSkillProficiency = (id: number, proficiency: number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, proficiency } : skill
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Career Tracker</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target size={24} className="mr-2 text-blue-500" />
          Career Goals
        </h3>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="New goal"
            className="border rounded-l p-2 flex-grow"
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
          />
          <input
            type="date"
            className="border-t border-b border-r rounded-r p-2"
            value={newGoal.targetDate}
            onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
            onClick={addGoal}
          >
            Add Goal
          </button>
        </div>
        <ul className="space-y-2">
          {goals.map((goal) => (
            <li key={goal.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span className={goal.completed ? 'line-through text-gray-500' : ''}>
                {goal.title} (Target: {new Date(goal.targetDate).toLocaleDateString()})
              </span>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoalCompletion(goal.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Book size={24} className="mr-2 text-green-500" />
          Skills Tracker
        </h3>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="New skill"
            className="border rounded-l p-2 flex-grow"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          />
          <select
            className="border-t border-b border-r p-2"
            value={newSkill.proficiency}
            onChange={(e) => setNewSkill({ ...newSkill, proficiency: Number(e.target.value) })}
          >
            {[1, 2, 3, 4, 5].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-colors"
            onClick={addSkill}
          >
            Add Skill
          </button>
        </div>
        <ul className="space-y-4">
          {skills.map((skill) => (
            <li key={skill.id} className="bg-gray-50 p-3 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-600">
                  Proficiency: {skill.proficiency}/5
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={skill.proficiency}
                onChange={(e) => updateSkillProficiency(skill.id, Number(e.target.value))}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <button style={{border:'2px solid #3388FF',backgroundColor:'#3388FF',height:'35px',width:'300',padding:'0.5rem',borderRadius:'10px',color:'white',fontSize:'10px'}} > <a href='https://ask-ai-delta.vercel.app/'>GUIDE ME</a> </button>
   
    </div>
  );
};

export default CareerTracker;