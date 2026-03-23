import fs from 'fs';
import path from 'path';

// Server component to read the skills directory
export default async function SkillsRepoPage() {
  const repoPath = path.join(process.cwd(), 'mi-ai-skills-repo');
  
  // Helper to read directory recursively
  const getFiles = (dir: string): { name: string; path: string; isDir: boolean }[] => {
    try {
      const items = fs.readdirSync(dir);
      return items.map(item => {
        const fullPath = path.join(dir, item);
        const isDir = fs.statSync(fullPath).isDirectory();
        return {
          name: item,
          path: fullPath.replace(process.cwd(), ''),
          isDir
        };
      }).sort((a, b) => {
        if (a.isDir && !b.isDir) return -1;
        if (!a.isDir && b.isDir) return 1;
        return a.name.localeCompare(b.name);
      });
    } catch (e) {
      return [];
    }
  };

  const rootItems = getFiles(repoPath);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8 sm:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Repositorio Listo para Exportar
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">AI Skills Repository</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Tu "Cerebro de Tech Lead" está completo. Este entorno contiene tu repositorio de heurísticas, antipatrones y checklists para agentes de IA.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
            <h2 className="text-white font-mono text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              /mi-ai-skills-repo
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-500 mb-6">
              <strong>Nota:</strong> Los archivos adicionales que ves en tu entorno (como <code className="bg-slate-100 px-1 rounded">package.json</code> o la carpeta <code className="bg-slate-100 px-1 rounded">app/</code>) son el "motor" que mantiene vivo este chat. Al exportar el proyecto, solo necesitas extraer esta carpeta:
            </p>
            
            <ul className="space-y-3 font-mono text-sm">
              {rootItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  {item.isDir ? (
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  )}
                  <div>
                    <span className={item.isDir ? "font-semibold text-slate-800" : "text-slate-600"}>{item.name}</span>
                    {item.isDir && (
                      <div className="mt-2 pl-4 border-l-2 border-slate-100 space-y-2">
                        {getFiles(path.join(process.cwd(), item.path)).map((subItem, subIdx) => (
                          <div key={subIdx} className="flex items-center gap-2 text-slate-500">
                            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            {subItem.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h3 className="text-indigo-900 font-semibold mb-2">¿Cómo exportar tu repositorio?</h3>
          <ol className="list-decimal list-inside text-indigo-800 space-y-2 text-sm">
            <li>Ve al menú de configuración (Settings) de AI Studio.</li>
            <li>Selecciona <strong>Export to ZIP</strong> o <strong>Export to GitHub</strong>.</li>
            <li>Una vez descargado, extrae únicamente la carpeta <code>mi-ai-skills-repo</code>.</li>
            <li>¡Listo! Puedes borrar el resto de archivos, ya que solo eran necesarios para mantener este entorno vivo.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
