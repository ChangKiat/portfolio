
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';

const data = [
  { subject: 'Frontend', A: 70, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'UI Design', A: 60, fullMark: 100 },
  { subject: 'DevOps', A: 65, fullMark: 100 },
  { subject: 'GenAI', A: 60, fullMark: 100 },
  { subject: 'Soft Skills', A: 85, fullMark: 100 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Skillset</h2>
        <p className="text-slate-400">Balancing technical proficiency with creative intuition.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="h-[400px] glass rounded-3xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#f8fafc' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Frontend', tech: 'React, Next.js, Vue' },
            { label: 'Languages', tech: 'TypeScript, Rust, Python' },
            { label: 'Styling', tech: 'Css, Scss' },
            { label: 'Backend', tech: 'Java, GO Lang, C#' },
            { label: 'Tools', tech: 'Docker, AWS, Git' },
            { label: 'AI', tech: 'Gemini API, OpenAI' },
          ].map((skill, i) => (
            <div key={i} className="glass p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <h3 className="font-bold text-blue-400 mb-2">{skill.label}</h3>
              <p className="text-slate-400 text-sm">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
