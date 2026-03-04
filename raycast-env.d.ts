/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** kubectl Path - Absolute path or command name for kubectl */
  "kubectlPath": string,
  /** AWS Path - Absolute path or command name for aws (for kube exec plugins such as EKS) */
  "awsPath": string,
  /** Terminal App - App used for exec shell and port-forward commands */
  "terminalApp": "terminal" | "iterm",
  /** Preferred Exec Shell - First shell attempted for kubectl exec */
  "execShell": string,
  /** kubectl Timeout (ms) - Default timeout used for kubectl commands */
  "kubectlTimeoutMs": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `get-deployments` command */
  export type GetDeployments = ExtensionPreferences & {}
  /** Preferences accessible in the `get-pods` command */
  export type GetPods = ExtensionPreferences & {}
  /** Preferences accessible in the `get-services` command */
  export type GetServices = ExtensionPreferences & {}
  /** Preferences accessible in the `get-jobs` command */
  export type GetJobs = ExtensionPreferences & {}
  /** Preferences accessible in the `get-cronjobs` command */
  export type GetCronjobs = ExtensionPreferences & {}
  /** Preferences accessible in the `get-contexts` command */
  export type GetContexts = ExtensionPreferences & {}
  /** Preferences accessible in the `diagnostics` command */
  export type Diagnostics = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `get-deployments` command */
  export type GetDeployments = {}
  /** Arguments passed to the `get-pods` command */
  export type GetPods = {}
  /** Arguments passed to the `get-services` command */
  export type GetServices = {}
  /** Arguments passed to the `get-jobs` command */
  export type GetJobs = {}
  /** Arguments passed to the `get-cronjobs` command */
  export type GetCronjobs = {}
  /** Arguments passed to the `get-contexts` command */
  export type GetContexts = {}
  /** Arguments passed to the `diagnostics` command */
  export type Diagnostics = {}
}

