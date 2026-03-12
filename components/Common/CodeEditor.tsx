'use client';

import { useState } from 'react';

const editorMap: Record<string, string> = {
    'HTML': '/utils/code-editors/html.html',
    'HTML + CSS': '/utils/code-editors/html-css.html',
    'HTML + CSS + JS': '/utils/code-editors/html-css-js.html',
};

const tabs = Object.keys(editorMap);

export default function CodeEditor() {
    const [tab, setTab] = useState(0);

    return (
        <div className="w-full h-full flex flex-col">
            {/* Tab bar */}
            <div className="flex items-end gap-1 px-4 pt-2" role="tablist" aria-label="Code Editor">
                {tabs.map((label, i) => {
                    const active = i === tab;
                    return (
                        <button
                            key={label}
                            role="tab"
                            id={`editor-tab-${i}`}
                            aria-controls={`editor-panel-${i}`}
                            aria-selected={active}
                            onClick={() => setTab(i)}
                            className={[
                                'px-5 py-2 text-sm font-medium rounded-t-lg border border-b-0 transition-all',
                                active
                                    ? 'bg-white text-black shadow-[0_-2px_8px_rgba(0,0,0,0.12)] z-10 border-gray-300 -mb-px pb-[calc(0.5rem+1px)]'
                                    : 'bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200 hover:text-gray-700',
                            ].join(' ')}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Panels — all mounted, only active one visible */}
            <div className="flex-1 overflow-hidden border border-gray-300 rounded-b-lg rounded-tr-lg shadow-md bg-white relative">
                {tabs.map((label, i) => (
                    <div
                        key={label}
                        role="tabpanel"
                        id={`editor-panel-${i}`}
                        aria-labelledby={`editor-tab-${i}`}
                        className="absolute inset-0"
                        style={{ visibility: i === tab ? 'visible' : 'hidden' }}
                    >
                        <iframe
                            className="w-full h-full border-none"
                            src={editorMap[label]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
