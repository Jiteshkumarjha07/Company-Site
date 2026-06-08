import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#1a1a1a',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 9999,
    }}>
      <iframe
        src="/Alumnest_Privacy_Policy.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Alumnest Privacy Policy"
      />
    </div>
  );
}
