import { test } from "@playwright/test";

export const parameterizeTestCase = (title: string) => {
  test(title, ({}, testInfo) => {
    console.log(testInfo.titlePath);
  });
};
