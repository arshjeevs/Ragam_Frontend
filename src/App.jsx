import { useState } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { ActivityCard } from './components/ActivityCard';
import data from './data/data.json';

const activityMeta = {
  Work: {
    color: 'hsl(15, 100%, 70%)',
    icon: 'src/images/icon-work.svg'
  },
  Play: {
    color: 'hsl(195, 74%, 62%)',
    icon: 'src/images/icon-play.svg'
  },
  Study: {
    color: 'hsl(348, 100%, 68%)',
    icon: 'src/images/icon-study.svg'
  },
  Exercise: {
    color: 'hsl(145, 58%, 55%)',
    icon: 'src/images/icon-exercise.svg'
  },
  Social: {
    color: 'hsl(264, 64%, 52%)',
    icon: 'src/images/icon-social.svg'
  },
  'Self Care': {
    color: 'hsl(43, 84%, 65%)',
    icon: 'src/images/icon-self-care.svg'
  }
};

function App() {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
    <div className="min-h-screen bg-[hsl(226,43%,10%)] text-white p-6 lg:py-20 flex">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="sr-only">Time tracking dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:row-span-2">
            <ProfileCard timeframe={timeframe} onTimeframeChange={setTimeframe} />
          </div>
          {data.map((activity) => (
            <ActivityCard
              key={activity.title}
              activity={{
                ...activity,
                ...activityMeta[activity.title]
              }}
              timeframe={timeframe}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;