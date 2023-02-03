import { Component } from "@angular/core";
import tailwindConfig from "../../../tailwind.config.js";

@Component({
  selector: "sb-color-box",
  templateUrl: `colors.component.html`,
  styleUrls: ["colors.stories.scss"],
})
export class ColorsComponent {
  objectKeys = Object.keys;
  colors = tailwindConfig?.theme?.extend?.colors;

  documentation = {
    neutral: "Black, white and shades of grey",
    semantic: "Colors which convey information (state of system, errors, etc)",
  };

  isString(color: any): boolean {
    return typeof color === "string";
  }
}
