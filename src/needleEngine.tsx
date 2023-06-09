// https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
'use client'

const isServer = () => typeof window === `undefined`;

import "@needle-tools/engine"
import { NeedleEngineAttributes } from "@needle-tools/engine";
import { useEffect, useState } from "react";

export type NeedleEngineProps = NeedleEngineAttributes;

/** **Needle Engine Component**  
 * Import with `const NeedleEngine = dynamic(() => import('./needleEngine'), { ssr: false })`
 * 
 * @example
 * <NeedleEngine src="./assets/next.glb" loading-style="light" style={{ width: '100%', height: '100%', }}></NeedleEngine>
 * 
 */
export default function NeedleEngine({ ...props }): JSX.Element {

  const [src, setSrc] = useState(props?.src)

  useEffect(() => {
    // lazy import the codegen if no explicit src is defined
    if (!isServer() && props?.src === undefined) {
      import("./generated/gen")
        .then((m) => {
          setSrc(m.needle_exported_files)
        })
        .catch((e) => {
          console.error(e)
        });
    }
  }, [])

  return (
    <>
      {!isServer() && <needle-engine src={src} {...props}></needle-engine>}
    </>
  );
}