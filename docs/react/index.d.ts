import React from "react";
import { AwcButton as AwcButtonElement } from "../dist/components/button/index.js";

export type { AwcButtonElement };

export interface AwcButtonProps extends Pick<
  React.AllHTMLAttributes<HTMLElement>,
  | "children"
  | "dir"
  | "hidden"
  | "id"
  | "lang"
  | "slot"
  | "style"
  | "title"
  | "translate"
  | "onClick"
  | "onFocus"
  | "onBlur"
> {
  /** Controls the disabled property of the button */
  disabled?: boolean;

  /** Changes the display of the button */
  variation?: AwcButtonElement["variation"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: React.Ref<AwcButtonElement>;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;
}

declare module "react" {
  interface CSSProperties {
    /** The background color of the button */
    "--awc-button-bg-color"?: string | number;
    /** The text color of the button */
    "--awc-button-fg-color"?: string | number;
    /** The border color of the button */
    "--awc-button-border-color"?: string | number;
  }
}

/**
 * An example button component
 *
 * ## Attributes & Properties
 *
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 *
 * - `variation`: Changes the display of the button
 * - `disabled`: Controls the disabled property of the button
 *
 * ## Slots
 *
 * Areas where markup can be added to the component.
 *
 * - `(default)`: The main content for the button
 *
 * ## CSS Custom Properties
 *
 * CSS variables available for styling the component.
 *
 * - `--awc-button-bg-color`: The background color of the button (default: `#f0f0f0`)
 * - `--awc-button-fg-color`: The text color of the button (default: `#333`)
 * - `--awc-button-border-color`: The border color of the button (default: `transparent`)
 *
 * ## CSS Parts
 *
 * Custom selectors for styling elements within the component.
 *
 * - `control`: The button element
 */
export const AwcButton: React.ForwardRefExoticComponent<AwcButtonProps>;