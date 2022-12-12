import 'react-alert-confirm/lib/style.css';
import './style.scss';

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import PerviewCard from './PerviewCard';
import Basic from './demo/Basic';
import Confirm from './demo/Confirm';
import Alert from './demo/Alert';
import CustomFooter from './demo/CustomFooter';
import ChangeLang from './demo/ChangeLang';
import CustomPopup from './demo/CustomPopup';
import Prism from 'prismjs';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      const md = await import('./doc.md?raw');
      if (ref.current) {
        ref.current.innerHTML = marked.parse(md.default);
        Prism.highlightAll();
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="name">React-Alert-Confirm</h1>
        <div className="icon">
          <a href="https://npmjs.org/package/react-alert-confirm" title="npm">
            <img
              src="https://badgen.net/npm/v/react-alert-confirm?style=flat-square"
              alt="npm"
            />
          </a>
          <a
            href="https://npmjs.org/package/react-alert-confirm"
            title="npm download"
          >
            <img
              src="https://badgen.net/npm/dm/react-alert-confirm?style=flat-square"
              alt="npm download"
            />
          </a>
          <a
            href="https://bundlephobia.com/result?p=react-alert-confirm"
            title="bundle size"
          >
            <img
              src="https://badgen.net/bundlephobia/minzip/react-alert-confirm?style=flat-square"
              alt="bundle size"
            />
          </a>
          <a
            href="https://github.com/jaceyi/react-alert-confirm"
            title="github react-alert-confirm"
          >
            <img
              src="https://badgen.net/badge/icon/react-alert-confirm?icon=github&label=Github&style=flat-square"
              alt="github react-alert-confirm"
            />
          </a>
        </div>
        <blockquote className="blockquote">
          A react component confirm dialog, support synchronous mode call（一个
          React 确认对话框组件，支持同步方式调用）
        </blockquote>
      </div>
      <h2 id="example">Example</h2>
      <div className="wrap">
        <div className="col">
          <PerviewCard
            title={Basic.title}
            desc={Basic.desc}
            loadRaw={() => import('./demo/Basic.tsx?raw')}
          >
            <Basic />
          </PerviewCard>
          <PerviewCard
            title={CustomFooter.title}
            desc={CustomFooter.desc}
            loadRaw={() => import('./demo/CustomFooter.tsx?raw')}
          >
            <CustomFooter />
          </PerviewCard>
          <PerviewCard
            title={ChangeLang.title}
            desc={ChangeLang.desc}
            loadRaw={() => import('./demo/ChangeLang.tsx?raw')}
          >
            <ChangeLang />
          </PerviewCard>
        </div>
        <div className="col">
          <PerviewCard
            title={Confirm.title}
            desc={Confirm.desc}
            loadRaw={() => import('./demo/Confirm.tsx?raw')}
          >
            <Confirm />
          </PerviewCard>
          <PerviewCard
            title={Alert.title}
            desc={Alert.desc}
            loadRaw={() => import('./demo/Alert.tsx?raw')}
          >
            <Alert />
          </PerviewCard>
          <PerviewCard
            title={CustomPopup.title}
            desc={CustomPopup.desc}
            loadRaw={() => import('./demo/CustomPopup.tsx?raw')}
          >
            <CustomPopup />
          </PerviewCard>
        </div>
      </div>
      <div className="docs" ref={ref} />
      <div className="footer">
        Github：<a href="https://github.com/jaceyi/react-alert-confirm-doc">react-alert-confirm-doc</a>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
