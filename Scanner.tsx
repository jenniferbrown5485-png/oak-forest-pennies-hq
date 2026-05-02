'use client';

import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function Scanner({ onScan }: any) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

    scanner.render((text) => onScan(text), () => {});

    return () => scanner.clear();
  }, []);

  return <div id="reader" />;
}
