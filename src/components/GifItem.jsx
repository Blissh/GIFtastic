export const GifItem = ({ title, url, id }) => {
  return (
    <article className="grid h-auto gap-4 rounded-md border-gray-700">
      <div className="h-72 rounded-md border border-slate-800 bg-slate-900">
        <img src={url} alt={title} className="h-2/3 w-full rounded-t-md" />
        <p className="h-1/3 px-2 py-4 font-semibold text-gray-200">{title? title : 'Hola'}</p>
      </div>
    </article>
  );
  //m-5 mx-auto h-72 w-auto max-w-xs
  //h-48 w-full max-w-xs
};
