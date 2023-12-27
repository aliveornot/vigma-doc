import React, { useState, useEffect, PropsWithChildren } from 'react';

export default function PageViewLog({}) {
  useEffect(() => {
    if (window.twq) window.twq('track', 'PageView');
  });
  return null;
}
