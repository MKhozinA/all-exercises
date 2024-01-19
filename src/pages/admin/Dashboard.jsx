const Dashboard = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="overflow-x-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Data Buku
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <a
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Lihat
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Data Buku
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <a
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Lihat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
