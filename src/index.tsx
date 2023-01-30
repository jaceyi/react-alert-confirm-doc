import 'react-alert-confirm/lib/style.css';
import './style.scss';

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import AlertConfirm from 'react-alert-confirm';
import PerviewCard from './PerviewCard';
import Basic from './demo/Basic';
import Confirm from './demo/Confirm';
import Alert from './demo/Alert';
import CustomFooter from './demo/CustomFooter';
import ChangeLang from './demo/ChangeLang';
import CustomPopup from './demo/CustomPopup';
import Prism from 'prismjs';

(window as any).AlertConfirm = AlertConfirm;

const App = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      const headerMd = await import('./title.md?raw');
      if (headerRef.current) {
        headerRef.current.innerHTML = marked.parse(headerMd.default);
      }
    })();
    (async () => {
      const docMd = await import('./doc.md?raw');
      if (docRef.current) {
        docRef.current.innerHTML = marked.parse(docMd.default);
        Prism.highlightAll();
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="header" ref={headerRef}></div>
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
      <div className="docs" ref={docRef} />
      <div className="footer">
        Doc Github：
        <a href="https://github.com/jaceyi/react-alert-confirm-doc">
          react-alert-confirm-doc
        </a>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
