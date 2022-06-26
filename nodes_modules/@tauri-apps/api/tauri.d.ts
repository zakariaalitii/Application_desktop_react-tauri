/**
 * Invoke your custom commands.
 *
 * This package is also accessible with `window.__TAURI__.tauri` when `tauri.conf.json > build > withGlobalTauri` is set to true.
 * @module
 */
/** @ignore */
declare global {
    interface Window {
        __TAURI_IPC__: (message: any) => void;
        ipc: {
            postMessage: (args: string) => void;
        };
    }
}
/**
 * Transforms a callback function to a string identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return A unique identifier associated with the callback function.
 */
declare function transformCallback(callback?: (response: any) => void, once?: boolean): number;
/** Command arguments. */
interface InvokeArgs {
    [key: string]: unknown;
}
/**
 * Sends a message to the backend.
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @return A promise resolving or rejecting to the backend response.
 */
declare function invoke<T>(cmd: string, args?: InvokeArgs): Promise<T>;
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` and `https://asset.localhost` must be allowed on the `csp` value configured on `tauri.conf.json > tauri > security`.
 * Example CSP value: `"csp": "default-src 'self'; img-src 'self' asset: https://asset.localhost"` to use the asset protocol on image sources.
 *
 * Additionally, the `asset` must be allowlisted under `tauri.conf.json > tauri > allowlist > protocol`,
 * and its access scope must be defined on the `assetScope` array on the same `protocol` object.
 *
 * @param  filePath The file path.
 * @param  protocol The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol.
 * @example
 * ```typescript
 * import { appDir, join } from '@tauri-apps/api/path'
 * import { convertFileSrc } from '@tauri-apps/api/tauri'
 * const appDirPath = await appDir()
 * const filePath = await join(appDir, 'assets/video.mp4')
 * const assetUrl = convertFileSrc(filePath)
 *
 * const video = document.getElementById('my-video')
 * const source = document.createElement('source')
 * source.type = 'video/mp4'
 * source.src = assetUrl
 * video.appendChild(source)
 * video.load()
 * ```
 *
 * @return the URL that can be used as source on the webview.
 */
declare function convertFileSrc(filePath: string, protocol?: string): string;
export type { InvokeArgs };
export { transformCallback, invoke, convertFileSrc };
