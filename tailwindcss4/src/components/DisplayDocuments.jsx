function DisplayDocuments() {
  return (
    <div className="w-screen h-screen p-0 m-0">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold text-center py-2">Resume</h2>
          <embed
            src="/Resume_Ramirez_2025.pdf"
            type="application/pdf"
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold text-center py-2">CV</h2>
          <embed
            src="/CV_Ramirez_2025.pdf"
            type="application/pdf"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayDocuments;
