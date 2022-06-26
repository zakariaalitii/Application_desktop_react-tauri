import type { EventName, EventCallback, UnlistenFn } from './event';
declare type Theme = 'light' | 'dark';
/** Allows you to retrieve information about a given monitor. */
interface Monitor {
    /** Human-readable name of the monitor */
    name: string | null;
    /** The monitor's resolution. */
    size: PhysicalSize;
    /** the Top-left corner position of the monitor relative to the larger full screen area. */
    position: PhysicalPosition;
    /** The scale factor that can be used to map physical pixels to logical pixels. */
    scaleFactor: number;
}
/** A size represented in logical pixels. */
declare class LogicalSize {
    type: string;
    width: number;
    height: number;
    constructor(width: number, height: number);
}
/** A size represented in physical pixels. */
declare class PhysicalSize {
    type: string;
    width: number;
    height: number;
    constructor(width: number, height: number);
    /** Converts the physical size to a logical one. */
    toLogical(scaleFactor: number): LogicalSize;
}
/** A position represented in logical pixels. */
declare class LogicalPosition {
    type: string;
    x: number;
    y: number;
    constructor(x: number, y: number);
}
/** A position represented in physical pixels. */
declare class PhysicalPosition {
    type: string;
    x: number;
    y: number;
    constructor(x: number, y: number);
    /** Converts the physical position to a logical one. */
    toLogical(scaleFactor: number): LogicalPosition;
}
/** @ignore */
interface WindowDef {
    label: string;
}
/** @ignore */
declare global {
    interface Window {
        __TAURI_METADATA__: {
            __windows: WindowDef[];
            __currentWindow: WindowDef;
        };
    }
}
/** Attention type to request on a window. */
declare enum UserAttentionType {
    /**
     * #### Platform-specific
     *  - **macOS:** Bounces the dock icon until the application is in focus.
     * - **Windows:** Flashes both the window and the taskbar button until the application is in focus.
     */
    Critical = 1,
    /**
     * #### Platform-specific
     * - **macOS:** Bounces the dock icon once.
     * - **Windows:** Flashes the taskbar button until the application is in focus.
     */
    Informational = 2
}
export declare type CursorIcon = 'default' | 'crosshair' | 'hand' | 'arrow' | 'move' | 'text' | 'wait' | 'help' | 'progress' | 'notAllowed' | 'contextMenu' | 'cell' | 'verticalText' | 'alias' | 'copy' | 'noDrop' | 'grab' | 'grabbing' | 'allScroll' | 'zoomIn' | 'zoomOut' | 'eResize' | 'nResize' | 'neResize' | 'nwResize' | 'sResize' | 'seResize' | 'swResize' | 'wResize' | 'ewResize' | 'nsResize' | 'neswResize' | 'nwseResize' | 'colResize' | 'rowResize';
/**
 * Get an instance of `WebviewWindow` for the current webview window.
 *
 * @return The current WebviewWindow.
 */
declare function getCurrent(): WebviewWindow;
/**
 * Gets an instance of `WebviewWindow` for all available webview windows.
 *
 * @return The list of WebviewWindow.
 */
declare function getAll(): WebviewWindow[];
/** @ignore */
export declare type WindowLabel = string;
/**
 * A webview window handle allows emitting and listening to events from the backend that are tied to the window.
 */
declare class WebviewWindowHandle {
    /** The window label. It is a unique identifier for the window, can be used to reference it later. */
    label: WindowLabel;
    /** Local event listeners. */
    listeners: {
        [key: string]: Array<EventCallback<any>>;
    };
    constructor(label: WindowLabel);
    /**
     * Listen to an event emitted by the backend that is tied to the webview window.
     *
     * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
     * @param handler Event handler.
     * @returns A promise resolving to a function to unlisten to the event.
     */
    listen<T>(event: EventName, handler: EventCallback<T>): Promise<UnlistenFn>;
    /**
     * Listen to an one-off event emitted by the backend that is tied to the webview window.
     *
     * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
     * @param handler Event handler.
     * @returns A promise resolving to a function to unlisten to the event.
     */
    once<T>(event: string, handler: EventCallback<T>): Promise<UnlistenFn>;
    /**
     * Emits an event to the backend, tied to the webview window.
     *
     * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
     * @param payload Event payload.
     */
    emit(event: string, payload?: unknown): Promise<void>;
    _handleTauriEvent<T>(event: string, handler: EventCallback<T>): boolean;
}
/**
 * Manage the current window object.
 */
declare class WindowManager extends WebviewWindowHandle {
    /** The scale factor that can be used to map physical pixels to logical pixels. */
    scaleFactor(): Promise<number>;
    /** The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop. */
    innerPosition(): Promise<PhysicalPosition>;
    /** The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop. */
    outerPosition(): Promise<PhysicalPosition>;
    /**
     * The physical size of the window's client area.
     * The client area is the content of the window, excluding the title bar and borders.
     */
    innerSize(): Promise<PhysicalSize>;
    /**
     * The physical size of the entire window.
     * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
     */
    outerSize(): Promise<PhysicalSize>;
    /** Gets the window's current fullscreen state. */
    isFullscreen(): Promise<boolean>;
    /** Gets the window's current maximized state. */
    isMaximized(): Promise<boolean>;
    /** Gets the window's current decorated state. */
    isDecorated(): Promise<boolean>;
    /** Gets the window's current resizable state. */
    isResizable(): Promise<boolean>;
    /** Gets the window's current visible state. */
    isVisible(): Promise<boolean>;
    /** Gets the window's current visible state. */
    theme(): Promise<Theme | null>;
    /**
     * Centers the window.
     *
     * @param resizable
     * @returns A promise indicating the success or failure of the operation.
     */
    center(): Promise<void>;
    /**
     *  Requests user attention to the window, this has no effect if the application
     * is already focused. How requesting for user attention manifests is platform dependent,
     * see `UserAttentionType` for details.
     *
     * Providing `null` will unset the request for user attention. Unsetting the request for
     * user attention might not be done automatically by the WM when the window receives input.
     *
     * #### Platform-specific
     *
     * - **macOS:** `null` has no effect.
     * - **Linux:** Urgency levels have the same effect.
     *
     * @param resizable
     * @returns A promise indicating the success or failure of the operation.
     */
    requestUserAttention(requestType: UserAttentionType | null): Promise<void>;
    /**
     * Updates the window resizable flag.
     *
     * @param resizable
     * @returns A promise indicating the success or failure of the operation.
     */
    setResizable(resizable: boolean): Promise<void>;
    /**
     * Sets the window title.
     *
     * @param title The new title
     * @returns A promise indicating the success or failure of the operation.
     */
    setTitle(title: string): Promise<void>;
    /**
     * Maximizes the window.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    maximize(): Promise<void>;
    /**
     * Unmaximizes the window.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    unmaximize(): Promise<void>;
    /**
     * Toggles the window maximized state.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    toggleMaximize(): Promise<void>;
    /**
     * Minimizes the window.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    minimize(): Promise<void>;
    /**
     * Unminimizes the window.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    unminimize(): Promise<void>;
    /**
     * Sets the window visibility to true.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    show(): Promise<void>;
    /**
     * Sets the window visibility to false.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    hide(): Promise<void>;
    /**
     * Closes the window.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    close(): Promise<void>;
    /**
     * Whether the window should have borders and bars.
     *
     * @param decorations Whether the window should have borders and bars.
     * @returns A promise indicating the success or failure of the operation.
     */
    setDecorations(decorations: boolean): Promise<void>;
    /**
     * Whether the window should always be on top of other windows.
     *
     * @param alwaysOnTop Whether the window should always be on top of other windows or not.
     * @returns A promise indicating the success or failure of the operation.
     */
    setAlwaysOnTop(alwaysOnTop: boolean): Promise<void>;
    /**
     * Resizes the window with a new inner size.
     * @example
     * ```typescript
     * import { appWindow, LogicalSize } from '@tauri-apps/api/window'
     * await appWindow.setSize(new LogicalSize(600, 500))
     * ```
     *
     * @param size The logical or physical inner size.
     * @returns A promise indicating the success or failure of the operation.
     */
    setSize(size: LogicalSize | PhysicalSize): Promise<void>;
    /**
     * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
     * @example
     * ```typescript
     * import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
     * await appWindow.setMinSize(new PhysicalSize(600, 500))
     * ```
     *
     * @param size The logical or physical inner size, or `null` to unset the constraint.
     * @returns A promise indicating the success or failure of the operation.
     */
    setMinSize(size: LogicalSize | PhysicalSize | null | undefined): Promise<void>;
    /**
     * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
     * @example
     * ```typescript
     * import { appWindow, LogicalSize } from '@tauri-apps/api/window'
     * await appWindow.setMaxSize(new LogicalSize(600, 500))
     * ```
     *
     * @param size The logical or physical inner size, or `null` to unset the constraint.
     * @returns A promise indicating the success or failure of the operation.
     */
    setMaxSize(size: LogicalSize | PhysicalSize | null | undefined): Promise<void>;
    /**
     * Sets the window outer position.
     * @example
     * ```typescript
     * import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
     * await appWindow.setPosition(new LogicalPosition(600, 500))
     * ```
     *
     * @param position The new position, in logical or physical pixels.
     * @returns A promise indicating the success or failure of the operation.
     */
    setPosition(position: LogicalPosition | PhysicalPosition): Promise<void>;
    /**
     * Sets the window fullscreen state.
     *
     * @param fullscreen Whether the window should go to fullscreen or not.
     * @returns A promise indicating the success or failure of the operation.
     */
    setFullscreen(fullscreen: boolean): Promise<void>;
    /**
     * Bring the window to front and focus.
     *
     * @returns A promise indicating the success or failure of the operation.
     */
    setFocus(): Promise<void>;
    /**
     * Sets the window icon.
     *
     * Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
     * To enable it, change your Cargo.toml file:
     * ```toml
     * [dependencies]
     * tauri = { version = "...", features = ["...", "icon-png"] }
     * ```
     *
     * @param icon Icon bytes or path to the icon file.
     * @returns A promise indicating the success or failure of the operation.
     */
    setIcon(icon: string | Uint8Array): Promise<void>;
    /**
     * Whether to show the window icon in the task bar or not.
     *
     * @param skip true to hide window icon, false to show it.
     * @returns A promise indicating the success or failure of the operation.
     */
    setSkipTaskbar(skip: boolean): Promise<void>;
    /**
     * Grabs the cursor, preventing it from leaving the window.
     *
     * There's no guarantee that the cursor will be hidden. You should
     * hide it by yourself if you want so.
     *
     * #### Platform-specific
     *
     * - **Linux:** Unsupported.
     * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
     *
     * @param grab `true` to grab the cursor icon, `false` to release it.
     * @returns A promise indicating the success or failure of the operation.
     */
    setCursorGrab(grab: boolean): Promise<void>;
    /**
     * Modifies the cursor's visibility.
     *
     * #### Platform-specific
     *
     * - **Windows:** The cursor is only hidden within the confines of the window.
     * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
     *   outside of the window.
     *
     * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
     * @returns A promise indicating the success or failure of the operation.
     */
    setCursorVisible(visible: boolean): Promise<void>;
    /**
     * Modifies the cursor icon of the window.
     *
     * @param icon The new cursor icon.
     * @returns A promise indicating the success or failure of the operation.
     */
    setCursorIcon(icon: CursorIcon): Promise<void>;
    /**
     * Changes the position of the cursor in window coordinates.
     *
     * @param position The new cursor position.
     * @returns A promise indicating the success or failure of the operation.
     */
    setCursorPosition(position: LogicalPosition | PhysicalPosition): Promise<void>;
    /**
     * Starts dragging the window.
     *
     * @return A promise indicating the success or failure of the operation.
     */
    startDragging(): Promise<void>;
}
/**
 * Create new webview windows and get a handle to existing ones.
 *
 * Windows are identified by a *label*  a unique identifier that can be used to reference it later.
 * It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.
 *
 * @example
 * ```typescript
 * // loading embedded asset:
 * const webview = new WebviewWindow('theUniqueLabel', {
 *   url: 'path/to/page.html'
 * })
 * // alternatively, load a remote URL:
 * const webview = new WebviewWindow('theUniqueLabel', {
 *   url: 'https://github.com/tauri-apps/tauri'
 * })
 *
 * webview.once('tauri://created', function () {
 *  // webview window successfully created
 * })
 * webview.once('tauri://error', function (e) {
 *  // an error happened creating the webview window
 * })
 *
 * // emit an event to the backend
 * await webview.emit("some event", "data")
 * // listen to an event from the backend
 * const unlisten = await webview.listen("event name", e => {})
 * unlisten()
 * ```
 */
declare class WebviewWindow extends WindowManager {
    /**
     * Creates a new WebviewWindow.
     * * @param label The unique webview window label. Must be alphanumeric: `a-zA-Z-/:_`.
     * @returns The WebviewWindow instance to communicate with the webview.
     */
    constructor(label: WindowLabel, options?: WindowOptions);
    /**
     * Gets the WebviewWindow for the webview associated with the given label.
     *
     * @param label The webview window label.
     * @returns The WebviewWindow instance to communicate with the webview or null if the webview doesn't exist.
     */
    static getByLabel(label: string): WebviewWindow | null;
}
/** The WebviewWindow for the current window. */
declare let appWindow: WebviewWindow;
/** Configuration for the window to create. */
interface WindowOptions {
    /**
     * Remote URL or local file path to open.
     *
     * - URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
     * - data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
     * - local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).
     */
    url?: string;
    /** Show window in the center of the screen.. */
    center?: boolean;
    /** The initial vertical position. Only applies if `y` is also set. */
    x?: number;
    /** The initial horizontal position. Only applies if `x` is also set. */
    y?: number;
    /** The initial width. */
    width?: number;
    /** The initial height. */
    height?: number;
    /** The minimum width. Only applies if `minHeight` is also set. */
    minWidth?: number;
    /** The minimum height. Only applies if `minWidth` is also set. */
    minHeight?: number;
    /** The maximum width. Only applies if `maxHeight` is also set. */
    maxWidth?: number;
    /** The maximum height. Only applies if `maxWidth` is also set. */
    maxHeight?: number;
    /** Whether the window is resizable or not. */
    resizable?: boolean;
    /** Window title. */
    title?: string;
    /** Whether the window is in fullscreen mode or not. */
    fullscreen?: boolean;
    /** Whether the window will be initially hidden or focused. */
    focus?: boolean;
    /**
     * Whether the window is transparent or not.
     * Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
     * WARNING: Using private APIs on `macOS` prevents your application from being accepted for the `App Store`.
     */
    transparent?: boolean;
    /** Whether the window should be maximized upon creation or not. */
    maximized?: boolean;
    /** Whether the window should be immediately visible upon creation or not. */
    visible?: boolean;
    /** Whether the window should have borders and bars or not. */
    decorations?: boolean;
    /** Whether the window should always be on top of other windows or not. */
    alwaysOnTop?: boolean;
    /** Whether or not the window icon should be added to the taskbar. */
    skipTaskbar?: boolean;
    /**
     * Whether the file drop is enabled or not on the webview. By default it is enabled.
     *
     * Disabling it is required to use drag and drop on the frontend on Windows.
     */
    fileDropEnabled?: boolean;
    /**
     *  The initial window theme. Defaults to the system theme.
     *
     * Only implemented on Windows.
     */
    theme?: Theme;
}
/**
 * Returns the monitor on which the window currently resides.
 * Returns `null` if current monitor can't be detected.
 */
declare function currentMonitor(): Promise<Monitor | null>;
/**
 * Returns the primary monitor of the system.
 * Returns `null` if it can't identify any monitor as a primary one.
 */
declare function primaryMonitor(): Promise<Monitor | null>;
/** Returns the list of all the monitors available on the system. */
declare function availableMonitors(): Promise<Monitor[]>;
export { WebviewWindow, WebviewWindowHandle, WindowManager, getCurrent, getAll, appWindow, LogicalSize, PhysicalSize, LogicalPosition, PhysicalPosition, UserAttentionType, currentMonitor, primaryMonitor, availableMonitors };
export type { Theme, Monitor, WindowOptions };
