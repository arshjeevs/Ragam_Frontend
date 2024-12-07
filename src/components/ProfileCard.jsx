export const ProfileCard = ({ timeframe, onTimeframeChange }) => {
  return (
    <div className="bg-[hsl(246,80%,60%)] rounded-2xl overflow-hidden ">
      <div className="p-8 text-white">
        <img
          src="/src/images/image-jeremy.png"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white mb-8"
        />
        <p className="text-sm text-[hsl(236,100%,87%)]">Report for</p>
        <h1 className="text-3xl font-light mt-1">Jeremy Robson</h1>
      </div>
      <div className="bg-[hsl(235,46%,20%)] p-6 rounded-2xl">
        <nav className="flex flex-col gap-4">
          {(['daily', 'weekly', 'monthly']).map((t) => (
            <button
              key={t}
              onClick={() => onTimeframeChange(t)}
              className={`text-left capitalize ${
                timeframe === t ? 'text-white' : 'text-[hsl(235,45%,61%)] hover:text-white'
              } transition-colors`}
              aria-current={timeframe === t ? 'page' : undefined}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};