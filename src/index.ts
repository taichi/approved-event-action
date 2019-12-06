import config from "./config";

export function get() {
  return config.get("retry");
}
