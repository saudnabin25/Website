import React from "react";
import annualReports from "../data/annualReports.js";

export default function AnnualReports(){
  const [activeReport, setActiveReport] = React.useState(annualReports[0]?.id ?? null);
  const [fullscreenReport, setFullscreenReport] = React.useState(null);

  React.useEffect(() => {
    if (fullscreenReport !== null) {
      const { style } = document.body;
      const previous = style.overflow;
      style.overflow = "hidden";
      return () => {
        style.overflow = previous;
      };
    }
    return undefined;
  }, [fullscreenReport]);

  const toggleReport = id => {
    setActiveReport(prev => (prev === id ? null : id));
  };

  const openFullscreen = id => {
    setFullscreenReport(id);
  };

  const closeFullscreen = () => {
    setFullscreenReport(null);
  };

  const fullscreenData = fullscreenReport != null ? annualReports.find(r => r.id === fullscreenReport) : null;

  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container-max max-w-3xl">
          <p className="section-sub">Annual Reports</p>
          <h1 className="section-title">Transparency In Action</h1>
          <p className="mt-4 text-gray-600">
            Download our annual reports to learn how Trinket for Education stewards donations, measures impact,
            and plans the road ahead for students in Nepal.
          </p>

          <div className="mt-10 space-y-4">
            {annualReports.map(report => (
              <article key={report.id} className="card bg-white p-6 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <img src="/Pictures/logo.png" alt="TFE logo" className="w-16 h-16 object-contain" />
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{report.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-end">
                    <button
                      type="button"
                      onClick={() => toggleReport(report.id)}
                      className="btn btn-secondary text-sm"
                    >
                      {activeReport === report.id ? "Hide Preview" : "Preview"}
                    </button>
                    <button
                      type="button"
                      onClick={() => openFullscreen(report.id)}
                      className="btn btn-secondary text-sm"
                    >
                      Fullscreen
                    </button>
                    <a
                      href={report.file}
                      download
                      className="btn btn-blue text-sm"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
                {activeReport === report.id && (
                  <div className="border rounded-2xl overflow-hidden bg-gray-100">
                    <iframe
                      src={report.file}
                      title={`${report.title} preview`}
                      className="w-full h-[520px]"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {fullscreenData && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${fullscreenData.title} full-screen preview`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{fullscreenData.title}</h2>
                <p className="text-xs text-gray-600">{fullscreenData.description}</p>
              </div>
              <button
                type="button"
                onClick={closeFullscreen}
                className="btn btn-secondary text-xs"
              >
                Close
              </button>
            </div>
            <iframe
              src={fullscreenData.file}
              title={`${fullscreenData.title} full-screen preview`}
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
