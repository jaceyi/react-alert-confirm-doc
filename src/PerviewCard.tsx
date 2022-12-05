import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Prism from 'prismjs';

interface Props {
  title: ReactNode;
  desc: ReactNode;
  loadRaw: () => Promise<typeof import('*?raw')>;
  children: ReactNode;
}

const PerviewCard: React.FC<Props> = ({ title, desc, loadRaw, children }) => {
  const [code, setCode] = useState('');
  const loadCode = async () => {
    const raw = (await loadRaw()).default;
    setCode(
      raw
        .replace(/\/\/ *demo-ignore-start(.|\n|\r)*\/\/ *demo-ignore-end/g, '')
        .trim()
    );
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    !code && loadCode();
  }, [visible]);

  return (
    <div className="perview-card">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="children">{children}</div>
      <div className="handle">
        <span onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} code
        </span>
      </div>
      <div className="code" style={{ display: visible ? 'block' : 'none' }}>
        <pre>
          <code className="language-tsx">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PerviewCard;
