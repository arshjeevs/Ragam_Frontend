import { MoreVertical } from 'lucide-react';

export const ActivityCard = ({ activity, timeframe }) => {
  const timeframeData = activity.timeframes[timeframe];
  const timeframeText = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
  }[timeframe];

  return (
    <div className="relative pt-10">
      <div
        className="absolute inset-x-0 top-0 h-14 rounded-t-2xl overflow-hidden"
        style={{ backgroundColor: activity.color }}
      >
        <img
          src={activity.icon}
          alt=""
          className="absolute top-[-8px] right-4 w-14 h-14"
          aria-hidden="true"
        />
      </div>
      <div className="relative bg-[hsl(235,46%,20%)] rounded-2xl p-6 hover:bg-[hsl(235,45%,61%)] transition-colors cursor-pointer">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-medium">{activity.title}</h2>
          <button
            aria-label="More options"
            className="text-[hsl(236,100%,87%)] hover:text-white transition-colors"
          >
            <img src="/src/images/icon-ellipsis.svg" alt="" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-white text-3xl font-light">{timeframeData.current}hrs</p>
          <p className="text-[hsl(236,100%,87%)] text-sm">
            {timeframeText} - {timeframeData.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};