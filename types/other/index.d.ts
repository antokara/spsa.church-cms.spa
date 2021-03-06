// @see https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
// @see https://stackoverflow.com/questions/51503754/typescript-type-beforeinstallpromptevent

/**
 * The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler
 * before a user is prompted to "install" a web site to a home screen on mobile.
 *
 * @deprecated Only supported on Chrome and Android Webview.
 */
interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

/**
 * expiramental feature so we need to add support for it (augment the global Navigator interface)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator
 */
interface Navigator {
  standalone?: boolean;
}

/**
 * expiramental feature so we need to add support for it (augment the global Window interface)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/onbeforeinstallprompt
 */
interface Window {
  onbeforeinstallprompt?: EventListenerOrEventListenerObject;
}
