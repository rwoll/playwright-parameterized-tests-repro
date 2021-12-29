import test from "@playwright/test";
import { parameterizeTestCase } from "../helpers";

test.describe.parallel("suite", () => {
  parameterizeTestCase("b-0");
  parameterizeTestCase("b-1");
});
