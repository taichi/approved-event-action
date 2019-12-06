import config from "./config";

const retry = config.get("retry");
// tslint:disable-next-line: no-console
console.log(retry.limit, retry.wait);
