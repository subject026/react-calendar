export default function Calander() {
  // views
  // - monthly view
  // - weekly view

  return (
    <section className="p-8">
      <div className="max-w-6xl m-auto">
        {(() => {
          const now = new Date(Date.now());
          return [
            <div>{now.toISOString()}</div>,
            <div>{now.toUTCString()}</div>,
            <div>{now.toLocaleDateString()}</div>,
            <div>date - {now.getDate()}</div>,
            <div>month - {now.getMonth()}</div>,
            <div>day - {now.getDay()}</div>,
            <div>day - {now.toTimeString()}</div>,
          ];
        })()}
      </div>
      <div className="max-w-6xl m-auto grid grid-cols-7 grid-rows-5 gap-4">
        <div className="bg-blue-300 h-20"></div>
        <div className="bg-blue-300 h-20"></div>
        <div className="bg-blue-300 h-20"></div>
        <div className="bg-blue-300 h-20"></div>
        <div className="bg-blue-300 h-20"></div>
        <div className="bg-blue-300 h-20"></div>
      </div>
    </section>
  );
}
